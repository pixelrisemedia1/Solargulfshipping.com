import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Smartphone, MapPin, Ship, ArrowUpRight } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: "Email", value: "client.broker@solar-group.com", href: "mailto:client.broker@solar-group.com" },
  { icon: Phone, label: "Tel", value: "+971 4 320 7232", href: "tel:+97143207232" },
  { icon: Phone, label: "Fax", value: "+971 4 320 7233", href: null },
  { icon: Smartphone, label: "Mobile", value: "+971 50 845 1388", href: "tel:+971508451388" }
];

export default function ContactSection() {
  return (
    <footer className="relative bg-[#0A1628] pt-24 pb-12 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4A853]/20 to-transparent" />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#D4A853]/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-[#D4A853] font-medium tracking-[0.2em] text-sm uppercase mb-4">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
              Ready to Move Your <span className="font-semibold">Business Forward?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Whether you are moving a single shipment or managing a complex supply chain, 
              Solar Gulf Shipping D.M.C.C. is ready to support your logistics needs.
            </p>

            <a
              href="mailto:client.broker@solar-group.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4A853] to-[#B8924A] text-[#0A1628] font-semibold rounded-full hover:shadow-xl hover:shadow-[#D4A853]/30 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              Contact Us Today
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right - Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#D4A853]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#D4A853]" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white hover:text-[#D4A853] transition-colors font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Address */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D4A853]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#D4A853]" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Address</p>
                    <p className="text-white font-medium leading-relaxed">
                      3906, Mazaya Business Avenue AA 1,<br />
                      Plot No: JLTE-PH25-AA1,<br />
                      Jumeirah Lakes Towers, Dubai, UAE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={import.meta.env.BASE_URL + "assets/logo.webp"}
                alt="Solar Gulf Shipping"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Solar Gulf Shipping D.M.C.C. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}