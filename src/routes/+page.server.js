import { createClient } from '$lib/prismicio';

export const prerender = true;

export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });

	const document = await client.getByUID('page', 'home');

  if (document) {
    return {
      document
    };
  }
}
