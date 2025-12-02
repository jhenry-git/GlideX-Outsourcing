// LOCATION: app/components/PortableTextComponent.jsx

"use client";
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/lib/sanity/image-url'; // This is used for inline images

// Define custom components for rendering specific block types and types
const components = {
  block: {
    // Customize your paragraphs and headings for Tailwind CSS
    normal: ({ children }) => <p className="mt-4 mb-4 text-lg text-gray-dark leading-relaxed">{children}</p>,
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4 text-dark-teal">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-6 mb-3 text-medium-blue">{children}</h2>,
    // Add h3, h4, blockquote, etc., here if needed
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-8 my-4 space-y-1">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-8 my-4 space-y-1">{children}</ol>,
  },
  listItem: {
    normal: ({ children }) => <li className="text-lg">{children}</li>,
  },
  // 🛑 NEW: Component for rendering inline images within the body field
  types: {
    image: ({ value }) => {
      // 1. Get the image URL using the imported helper
      const imageUrl = urlForImage(value).width(800).url(); // Adjust width as needed

      // 2. Render the image using a standard <img> tag
      return (
        <figure className="my-8">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-xl"
            src={imageUrl}
            alt={value.alt || 'Content Image'}
            loading="lazy"
          />
          {/* Optional: Add a caption if you have a 'caption' field in your Sanity image schema */}
          {value.caption && <figcaption className="text-center text-sm mt-2 text-gray-500">{value.caption}</figcaption>}
        </figure>
      );
    },
  },
};


// Main rendering component
export default function PortableTextComponent({ blocks }) {
  if (!blocks) return null;
  
  return (
    <div className="prose max-w-none">
      <PortableText
        value={blocks}
        components={components}
      />
    </div>
  );
}
