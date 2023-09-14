import { routes, createClient, linkResolver } from "$lib/prismicio.js"

export const GET = (async ({ request, fetch, url }) => {
	const api = createClient({ request, fetch })
	const types = routes.map(route => route.type)
	let documents = await Promise.all(types.map(type => api.getAllByType(type)))

	documents = documents.flat()
  console.log(documents.map(doc => ({ type: doc.type, uid: doc?.uid})))

	const { origin } = url

  const allLocations = documents
    .map(doc => `${origin}${linkResolver(doc)}`)
    .map(loc => {
      return `
        <url>
          <loc>${loc}</loc>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
      `
    })

  const uniqueLocations = [...new Set(allLocations)]

  const locations = uniqueLocations.join("")

	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>

		<url>
		<loc>${origin}</loc>
		<changefreq>daily</changefreq>
		<priority>0.7</priority>
		</url>

		${locations}

		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
})