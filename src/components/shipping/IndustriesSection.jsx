import React from 'react';
import { motion } from 'framer-motion';
import { Store, Factory, Zap, ShoppingBag, Building2 } from 'lucide-react';

const industries = [
  { icon: Store, name: "Trading & Distribution" },
  { icon: Factory, name: "Manufacturing & Industrial" },
  { icon: Zap, name: "Energy & Commodities" },
  { icon: ShoppingBag, name: "Retail & Consumer" },
  { icon: Building2, name: "Project & Infrastructure" }
];

export default function IndustriesSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0A1628] via-[#0F2744] to-[#0A1628]">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#D4A853]/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#D4A853] font-medium tracking-[0.2em] text-sm uppercase mb-4">
            Industries We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Serving <span className="font-semibold">Diverse Sectors</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We work with clients across multiple industries, delivering specialized logistics solutions
          </p>
        </motion.div>

        {/* Industries grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-3 px-6 py-4 bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-full hover:border-[#D4A853]/40 hover:bg-white/[0.08] transition-all duration-300 cursor-default"
            >
              <industry.icon className="w-5 h-5 text-[#D4A853]" />
              <span className="text-white font-medium">{industry.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}