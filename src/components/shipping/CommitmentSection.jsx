import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function CommitmentSection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#D4A853]/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#0A1628]/5 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Quote className="w-16 h-16 text-[#D4A853]/30 mx-auto mb-8" />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0A1628] leading-relaxed mb-8">
            At Solar Gulf Shipping D.M.C.C., we believe that logistics is more than transportation — 
            it is about{' '}
            <span className="font-semibold bg-gradient-to-r from-[#D4A853] to-[#B8924A] bg-clip-text text-transparent">
              trust, precision, and long-term partnerships
            </span>.
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our mission is to simplify global trade for our clients by delivering 
            dependable shipping solutions and exceptional service quality.
          </p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-[#D4A853] to-[#B8924A] mx-auto mt-12 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}