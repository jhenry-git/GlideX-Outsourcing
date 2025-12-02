import { client } from './client';
import { createImageUrlBuilder } from '@sanity/image-url';

const builder = createImageUrlBuilder(client);

export function urlForImage(source) {
  return source ? builder.image(source) : null;
}
