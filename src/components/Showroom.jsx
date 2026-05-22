import { motion } from 'framer-motion';

const images = [
  { src: '/prajwal-ar-performance-marketing.jpeg', alt: 'Prajwal AR demonstrating high-level performance marketing metrics' },
  { src: '/prajwal-ar-b2b-saas-analysis.jpeg', alt: 'Prajwal AR analyzing B2B SaaS marketing revenue data' },
  { src: '/prajwal-ar-viral-content-strategy.jpeg', alt: 'Prajwal AR crafting viral digital content strategies' },
  { src: '/prajwal-ar.PNG', alt: 'Prajwal AR scaling e-commerce brands' },
  { src: '/prajwal-ar-sales-funnels.jpeg', alt: 'Prajwal AR executing high-ticket sales funnels' },
  { src: '/prajwal-ar-marketing-roi.jpeg', alt: 'Prajwal AR optimizing digital marketing ROI' }
];

export default function Showroom() {
  return (
    <section id="work" className="py-24 md:py-32 w-full relative z-10">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60"
        >
          The Showroom.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted font-medium max-w-xl mx-auto"
        >
          A glimpse into the visual direction and creative execution.
        </motion.p>
      </div>

      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 relative group"
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                loading="lazy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
