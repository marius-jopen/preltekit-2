import { createClient } from '$lib/prismicio.js';
import { error } from "@sveltejs/kit"

export const prerender = true;

export async function load({ params, fetch, request }) {
	const client = createClient({ fetch, request });

  try {
    const document = await client.getByUID('page', params.uid);
  
    if (document) {
      return {
        document
      };
    }
  } catch (err) {
    throw error(404, err?.message)
  }

}
