import { motion } from 'framer-motion';
import { LineChart, PenTool, Search, Layout } from 'lucide-react';

const services = [
  {
    title: 'Digital Marketing & Strategy',
    description: 'Aggressive scaling across platforms. We engineer campaigns that drive high-intent traffic and maximize bottom-line revenue.',
    icon: <LineChart className="w-8 h-8 text-cyan-400" />
  },
  {
    title: 'Content & Reels Creation',
    description: 'High-converting engaging reels and scroll-stopping content designed to build massive brand awareness.',
    icon: <PenTool className="w-8 h-8 text-green-400" />
  },
  {
    title: 'Editing & Social Media Handling',
    description: 'Professional video and photo editing combined with end-to-end social media handling to keep your brand active and growing.',
    icon: <Search className="w-8 h-8 text-cyan-400" />
  },
  {
    title: 'Graphic Design',
    description: 'Poster making, pamphlets, business cards, and comprehensive brand identity visuals that stand out.',
    icon: <Layout className="w-8 h-8 text-green-400" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col items-center text-center mb-16 md:mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60"
        >
          Growth Architecture
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted max-w-2xl font-medium"
        >
          We build end-to-end acquisition systems for brands ready to scale beyond 7-figures.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed font-medium">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
