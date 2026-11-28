import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Plane, Route, Package, Warehouse, FileCheck } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: Ship,
    title: "Ocean Freight (FCL & LCL)",
    description: "Cost-effective and reliable sea transportation for global imports and exports with full container and consolidated options."
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast and flexible air cargo solutions for time-sensitive shipments requiring urgent delivery worldwide."
  },
  {
    icon: Route,
    title: "Multimodal Transportation",
    description: "Seamless integration of sea, air, and land transport for optimized delivery routes and maximum efficiency."
  },
  {
    icon: Package,
    title: "Project & Special Cargo",
    description: "Customized solutions for oversized, heavy-lift, and complex cargo requiring specialized handling."
  },
  {
    icon: Warehouse,
    title: "Warehousing & Distribution",
    description: "Secure storage, consolidation, and distribution services in strategic locations across the globe."
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description: "Professional handling of customs procedures and trade documentation for smooth cross-border operations."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32 bg-gradient-to-b from-[#0A1628] to-[#0F2744]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4A853]/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#D4A853] font-medium tracking-[0.2em] text-sm uppercase mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Our <span className="font-semibold">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We offer a full range of logistics and shipping services to meet your global trade needs
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}