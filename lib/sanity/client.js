// LOCATION: glidex-outsourcing/lib/sanity/client.js

import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

// Set to true to fetch data using the fastest CDN available (ideal for published content)
const useCdn = process.env.NODE_ENV === 'production';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  
  // FIX: REMOVE the token entirely for public reads.
  // Sanity allows public reads by default. Including a private token often triggers
  // the "Unauthorized" error if it's not needed for the query.
  // token: process.env.SANITY_API_TOKEN, // <-- REMOVE or COMMENT THIS LINE OUT

  // If you need the token for fetching drafts/private data, set the property conditionally:
  // token: process.env.SANITY_API_TOKEN,
  // perspective: 'published' // Ensure you only get published content
});
