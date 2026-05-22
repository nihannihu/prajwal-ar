import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1 flex flex-col items-start text-left z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-muted mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Accepting 2 new clients this month
          </div>
          
          <h1 className="sr-only">Prajwal AR</h1>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40">
            Scaling E-Commerce Brands Past $1M/ARR.
          </h2>
          
          <p className="text-lg md:text-xl text-muted max-w-xl mb-10 leading-relaxed font-medium">
            We use a ruthless, data-driven framework to architect high-ticket funnels and scale customer acquisition aggressively. No fluff, just scalable systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href="#social-proof" className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full text-base font-semibold text-center hover:bg-gray-200 transition-colors">
              See The Data
            </a>
            <a href="#works" className="w-full sm:w-auto glass-button text-white px-8 py-4 rounded-full text-base font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
              <Play className="w-5 h-5 fill-white" />
              See My Last Works
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 w-full max-w-lg md:max-w-none relative z-10"
      >
        <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-3xl relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div>
          {/* Hero Image */}
          <div className="absolute inset-0 flex items-center justify-center p-2">
            <div className="w-full h-full relative rounded-2xl overflow-hidden">
              <img 
                src="/prajwal-ar.PNG" 
                alt="Prajwal AR - Elite Digital Marketing Consultant and Growth Expert" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
