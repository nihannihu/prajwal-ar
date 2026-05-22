import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 px-6 md:px-12 flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center overflow-hidden">
          <img src="/prajwal-ar.PNG" alt="Prajwal AR Logo" className="w-full h-full object-cover" />
        </div>
        <span className="text-white font-bold text-lg tracking-tight">Prajwal AR</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
        <a href="#work" className="hover:text-white transition-colors">Work</a>
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
      </div>

      <a 
        href="https://wa.me/918197169305" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
      >
        Book Strategy Call
      </a>
    </motion.nav>
  );
}
