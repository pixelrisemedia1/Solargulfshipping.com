import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe2, Settings2, Shield, Scale } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: "Strategic Location",
    description: "Headquartered in Dubai, one of the world's leading logistics hubs."
  },
  {
    icon: Globe2,
    title: "Global Network",
    description: "Trusted partners and agents across key international trade routes."
  },
  {
    icon: Settings2,
    title: "Tailored Solutions",
    description: "Every shipment planned according to your business needs and cargo requirements."
  },
  {
    icon: Shield,
    title: "Reliability & Transparency",
    description: "Clear communication, accurate tracking, and dependable execution at every stage."
  },
  {
    icon: Scale,
    title: "Compliance-Focused",
    description: "We adhere to international trade regulations and best practices in shipping."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 bg-[#FAFBFC] overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0A1628 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-[#D4A853] font-medium tracking-[0.2em] text-sm uppercase mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-[#0A1628] mb-6 leading-tight">
              Your Trusted Partner in <span className="font-semibold">Global Logistics</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              With deep regional expertise and a global partner network, we help our clients 
              navigate complex supply chains and deliver goods with confidence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "50+", label: "Global Partners" },
                { value: "24/7", label: "Support" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-[#D4A853] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex gap-5 p-5 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A1628] to-[#1a3a5c] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-[#D4A853]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A1628] mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}