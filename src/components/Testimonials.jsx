import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Happy Aura Poly Clinic',
    logo: '/testmonial/happy-aura.PNG',
    role: 'Digital Growth Partner',
    content: 'Prajwal AR completely revamped our digital presence. From strategy to execution, the social media handling and content creation drove significant footfall to our clinic.'
  },
  {
    name: 'Curelo Health Tech',
    logo: '/testmonial/curelo.jpeg',
    role: 'Performance Marketing',
    content: 'A massive step up in our lead generation. The targeted campaigns and highly engaging reels reduced our customer acquisition cost drastically.'
  },
  {
    name: 'Starbucks',
    logo: '/testmonial/starbucks.jpeg',
    role: 'Brand Content & Engagement',
    content: 'Working with Prajwal brought a fresh, dynamic energy to our local campaigns. The visuals and editing quality were exactly what a premium brand demands.',
    currentlyWorking: true
  },
  {
    name: 'OMNI IDE',
    logo: '/testmonial/omni-logo.png',
    role: 'Chief Marketing Manager',
    content: 'Leading the marketing vision and executing high-level growth strategies to expand market presence and drive sustainable user acquisition.',
    currentlyWorking: true
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10 border-t border-white/10">
      <div className="flex flex-col items-center text-center mb-16 md:mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60"
        >
          Trusted By Industry Leaders
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted max-w-2xl font-medium"
        >
          I have had the privilege of driving growth and crafting content for some of the best brands.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                {item.logo ? (
                  <img src={item.logo} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-white font-black text-2xl">{item.name.charAt(0)}</span>
                )}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                </div>
                <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wider mt-1">{item.role}</p>
                {item.currentlyWorking && (
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 w-fit mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider">Currently Working</span>
                  </div>
                )}
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed font-medium italic flex-1">"{item.content}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
