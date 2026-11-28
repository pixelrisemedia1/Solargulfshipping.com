import React from 'react';
import { motion } from 'framer-motion';

export default function ImageShowcase() {
  const images = [
    {
      url: import.meta.env.BASE_URL + "assets/office.webp",
      alt: "Solar Gulf Shipping Office Building",
      caption: "Our Dubai Headquarters"
    },
    {
      url: import.meta.env.BASE_URL + "assets/containers.webp",
      alt: "Solar Gulf Shipping Containers",
      caption: "Global Shipping Operations"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0F2744] to-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#D4A853] font-medium tracking-[0.2em] text-sm uppercase mb-4">
            Our Presence
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white">
            Delivering <span className="font-semibold">Excellence</span> Worldwide
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0A1628]/50">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Caption */}
                <div className="absolute top-0 left-0 right-0 p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                  >
                    <h3 className="text-2xl font-semibold text-white mb-2">{image.caption}</h3>
                    <div className="w-16 h-1 bg-[#D4A853] rounded-full" />
                  </motion.div>
                </div>
              </div>
              
              {/* Border effect on hover */}
              <div className="absolute inset-0 border-2 border-[#D4A853]/0 group-hover:border-[#D4A853]/30 rounded-3xl transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}