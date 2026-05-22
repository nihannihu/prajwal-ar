import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, TrendingUp, X } from 'lucide-react';

export default function SocialProof() {
  const [selectedImg, setSelectedImg] = useState(null);

  const proofs = [
    {
      src: '/socialproof/prajwal-ar-organic-growth-stats.png',
      views: '1M+',
      subtext: 'Recent Views: 66.4K',
      label: 'Organic Growth',
      icon: <Eye className="w-5 h-5 text-cyan-400" />
    },
    {
      src: '/socialproof/prajwal-ar-viral-reels-engagement.png',
      views: '392K+',
      subtext: '& 256K+ on viral reels',
      label: 'Viral Engagement',
      icon: <TrendingUp className="w-5 h-5 text-green-400" />
    }
  ];

  return (
    <section id="social-proof" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10 border-t border-white/10">
      <div className="flex flex-col items-center text-center mb-16 md:mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60"
        >
          The Data Speaks For Itself.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted max-w-2xl font-medium"
        >
          Scroll-stopping content frameworks engineered for maximum virality and organic growth.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
        {proofs.map((proof, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 aspect-[3/4] flex flex-col cursor-pointer"
            onClick={() => setSelectedImg(proof.src)}
          >
            {/* Image Container */}
            <div className="flex-1 relative overflow-hidden bg-black flex justify-center items-center">
              {/* Blurred Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-700"
                style={{ backgroundImage: `url(${proof.src})` }}
              ></div>
              
              <img 
                src={proof.src} 
                alt={`Prajwal AR social proof demonstrating ${proof.views} ${proof.label}`} 
                loading="lazy"
                className="w-full h-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 z-20 pointer-events-none"></div>
            </div>

            {/* Metrics Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-30 pointer-events-none">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  {proof.icon}
                </div>
                <span className="text-white font-bold text-lg uppercase tracking-wider">{proof.label}</span>
              </div>
              <p className="text-5xl md:text-7xl font-black text-white drop-shadow-2xl">
                {proof.views}
              </p>
              <p className="text-cyan-400 font-bold text-lg mt-2 drop-shadow-md">
                {proof.subtext}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
            >
              <X className="w-6 h-6" />
            </button>
              <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              src={selectedImg}
              alt="Prajwal AR full screen social proof data"
              loading="lazy"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
