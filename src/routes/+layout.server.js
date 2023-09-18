import { createClient } from '$lib/prismicio';

export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });

	const settings = await client.getSingle('settings');
	const navigation = await client.getSingle('navigation');

  if (settings && navigation) {
    return {
      settings,
      navigation
    };
  }
}
