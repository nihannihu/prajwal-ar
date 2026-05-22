import { motion } from 'framer-motion';

export default function Works() {
  const works = [
    { type: 'image', src: '/works/prajwal-ar-creative-campaign.webp', title: 'Creative Campaign' },
    { type: 'video', src: '/works/prajwal-ar-dynamic-ad-creative.mp4', title: 'Dynamic Ad Creative' },
    { type: 'image', src: '/works/prajwal-ar-brand-graphic-design.jpeg', title: 'Brand Graphic desin' }
  ];

  return (
    <section id="works" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col items-center text-center mb-16 md:mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60"
        >
          My Recent Works
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted font-medium max-w-xl"
        >
          A selection of high-converting content, reels, and visual campaigns.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/5]"
          >
            {work.type === 'image' ? (
              <img src={work.src} alt={work.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            ) : (
              <video src={work.src} autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-xl font-bold text-white">{work.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
