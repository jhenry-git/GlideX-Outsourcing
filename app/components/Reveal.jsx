// LOCATION: glidex-outsourcing/app/components/Reveal.jsx

"use client";

import React from "react";
import { motion } from "framer-motion";

// This component wraps content to animate it when it appears on the screen
export const Reveal = ({ children, delay = 0.2, duration = 0.6, variants = 'fadeInUp', ...props }) => {
  
  // Define animation variants
  const animationVariants = {
    // FadeUp variant: content slides up slightly while fading in
    fadeInUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    // FadeIn variant: simple fade in
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }
  };

  // Get the selected variant (default to fadeInUp)
  const selectedVariant = animationVariants[variants] || animationVariants.fadeInUp;

  return (
    <motion.div
      // Use the 'whileInView' prop to trigger the animation when the element appears
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% of the element is visible
      transition={{ delay, duration, ease: "easeOut" }}
      variants={selectedVariant}
      {...props}
    >
      {children}
    </motion.div>
  );
};
