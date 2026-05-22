import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Camera, Link } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    revenue: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = `Hello Prajwal, I'm interested in your services!%0A%0A*Name:* ${formData.name}%0A*Website:* ${formData.website}%0A*Revenue:* ${formData.revenue}%0A*Address:* ${formData.address}`;
    window.open(`https://wa.me/918197169305?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10 border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Col - Info */}
        <div className="flex flex-col">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-6 text-white"
          >
            Ready for Compounding Growth? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              Book a Call.
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted max-w-xl mb-12 font-medium leading-relaxed"
          >
            If you are doing $50k+/mo in revenue and looking to double or triple your customer acquisition efficiently, let's talk strategy. No obligations.
          </motion.p>
          
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 max-w-md w-full"
            onSubmit={handleWhatsApp}
          >
            <div>
              <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Company Website (Optional)</label>
              <input type="url" name="website" value={formData.website} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="https://yourbrand.com" />
            </div>
            <div>
              <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Monthly Revenue</label>
              <select name="revenue" value={formData.revenue} onChange={handleChange} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none">
                <option value="" disabled className="text-black">Select range</option>
                <option value="< $50k" className="text-black">&lt; $50k</option>
                <option value="$50k - $100k" className="text-black">$50k - $100k</option>
                <option value="$100k - $500k" className="text-black">$100k - $500k</option>
                <option value="$500k+" className="text-black">$500k+</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Address / Location</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="New York, NY" />
            </div>
            <button 
              type="submit"
              className="w-full bg-green-500 text-white font-bold text-lg rounded-xl px-6 py-4 flex items-center justify-center gap-2 hover:bg-green-400 transition-colors mt-4"
            >
              Message on WhatsApp <MessageCircle className="w-5 h-5" />
            </button>
          </motion.form>
        </div>

        {/* Right Col - Direct Contact Links */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-full min-h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md relative flex flex-col justify-center p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Or Reach Out Directly</h3>
          
          <div className="space-y-6">
            <a href="https://wa.me/918197169305" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-green-500 transition-colors">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">WhatsApp</p>
                <p className="text-muted text-sm">+91 81971 69305</p>
              </div>
            </a>

            <a href="mailto:prajwal.ar390@gmail.com" className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-red-500 transition-colors">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">Email</p>
                <p className="text-muted text-sm">prajwal.ar390@gmail.com</p>
              </div>
            </a>

            <a href="https://instagram.com/_iamprajwal._" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-pink-500 transition-colors">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">Instagram</p>
                <p className="text-muted text-sm">@_iamprajwal._</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/prajwal-ar390/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600 transition-colors">
                <Link className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">LinkedIn</p>
                <p className="text-muted text-sm">prajwal-ar390</p>
              </div>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
