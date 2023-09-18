import * as prismic from '@prismicio/client'
import * as cookie from 'cookie'

import { createClient, linkResolver } from "$lib/prismicio.js"
import { error } from "@sveltejs/kit"

export async function GET({ url, fetch, request }) {
	const client = createClient({ fetch, request })

  try {

    const previewToken = url.searchParams.get('token')
    const previewURL = await client.resolvePreviewURL({ linkResolver, defaultURL: '/' })
    
    const headers = new Headers({
      'Set-Cookie': cookie.serialize(prismic.cookie.preview, previewToken, {
        path: '/',
      }),
      location: previewURL,
    })
  
    const response = new Response(null, {
      status: 307,
      headers,
    })

    

    return response
  } catch (err) {
    throw error(404, "Could not fetch preview")
  }

}