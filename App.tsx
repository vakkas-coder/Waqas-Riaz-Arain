
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Award, 
  Users, 
  CheckCircle,
  ExternalLink,
  Github,
  Twitter,
  // Fix: Added missing icons to imports
  Linkedin,
  Mail,
  Phone,
  MapPin,
  TrendingUp
} from 'lucide-react';
import { SectionTitle } from './components/SectionTitle';
import { SEOGrowthChart } from './components/Charts';
import { SERVICES, EXPERIENCE, TOOLS, SKILLS, getIcon } from './constants.tsx';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-tight text-blue-600">Waqas<span className="text-slate-900">Riaz.</span></span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Hire Me
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-900 hover:bg-slate-50 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
              Data-Driven SEO Excellence
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
              Grow Your Business With <span className="gradient-text">Precision SEO.</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Engineer Waqas Riaz Arain combines analytical engineering principles with advanced digital marketing to rank your website on page one.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center group">
                Request a Free Audit
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href="#portfolio" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
                View Case Studies
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 items-center opacity-70">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                <span className="text-sm font-medium">95% Client Retention</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                <span className="text-sm font-medium">Certified Partner</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
              <SEOGrowthChart />
            </div>
            {/* Floating decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-teal-100 rounded-full blur-3xl z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
    <div className="inline-flex p-4 rounded-xl bg-blue-50 text-blue-600 mb-4">
      <Icon size={32} />
    </div>
    <h3 className="text-4xl font-bold text-slate-900 mb-2">{value}</h3>
    <p className="text-slate-500 font-medium uppercase tracking-wider text-xs">{label}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://picsum.photos/id/1012/600/700" 
                alt="Waqas Riaz" 
                className="rounded-3xl shadow-2xl z-10 relative object-cover w-full aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-3xl -z-0"></div>
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Meet the Expert</h2>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              An Engineer’s Mindset Applied to <span className="text-blue-600">Search Growth</span>
            </h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                Hello! I am <strong>Engineer Waqas Riaz Arain</strong>. With a Bachelor of Engineering in Electronics from Mehran University, I transitioned into the digital marketing space with a unique advantage: a deeply analytical and data-driven perspective.
              </p>
              <p>
                SEO isn't just about keywords; it's about understanding complex algorithms, user behavior, and technical infrastructure. My engineering background allows me to dissect search engine logic and build strategies that are not only creative but technically flawless.
              </p>
              <p>
                Based in Hyderabad, Pakistan, I've spent years helping businesses bridge the gap between their products and their ideal customers on Google. Whether it's a technical site audit or a massive backlink campaign, my focus is always on <strong>ROI and measurable growth</strong>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
                <Award className="text-blue-600" />
                <span className="font-semibold text-slate-800">5+ Years Exp.</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
                <Users className="text-blue-600" />
                <span className="font-semibold text-slate-800">100+ Clients</span>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
               <a href="https://www.linkedin.com/in/engineer-waqas-riaz-arain-83375b63" target="_blank" className="p-3 bg-slate-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                  <Linkedin size={20} />
               </a>
               <a href="mailto:w_great1@hotmail.com" className="p-3 bg-slate-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                  <Mail size={20} />
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="SEO Solutions That Convert" 
          subtitle="From technical optimization to authority building, I provide end-to-end SEO services designed for high rankings and actual business revenue."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {getIcon(service.icon, "w-8 h-8")}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-blue-600 font-bold text-sm cursor-pointer hover:gap-2 transition-all">
                LEARN MORE <ChevronRight size={16} className="ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsAndTools = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8">Professional <span className="text-blue-600">Skillset</span></h2>
            <div className="space-y-6">
              {SKILLS.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-slate-700">{skill.name}</span>
                    <span className="text-blue-600 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-blue-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Industry <span className="text-blue-600">Toolkit</span></h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {TOOLS.map((tool) => (
                <div key={tool.name} className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow grayscale hover:grayscale-0">
                  <img src={tool.icon} alt={tool.name} className="h-10 mb-3 object-contain" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter text-center">{tool.name}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-slate-500 text-sm italic">
              "Mastery of enterprise tools ensures accurate forecasting and flawless execution."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="The Journey of Growth" 
          subtitle="My professional timeline from engineering student to an industry-recognized SEO Specialist."
        />

        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:left-1/2">
          {EXPERIENCE.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto text-left'}`}
            >
              {/* Timeline dot */}
              <div className="absolute top-0 w-6 h-6 bg-blue-600 border-4 border-white rounded-full -left-3.5 md:left-auto md:-right-3.5 md:translate-x-0 md:group-even:left-auto" 
                   style={index % 2 === 0 ? { right: '-12px' } : { left: '-12px' }}></div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-3 uppercase">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                <h4 className="text-blue-600 font-semibold mb-4">{exp.company}</h4>
                <ul className={`space-y-2 text-slate-600 text-sm ${index % 2 === 0 ? 'md:list-none' : 'md:list-none'}`}>
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 justify-start md:justify-end lg:justify-start">
                      {index % 2 !== 0 ? <CheckCircle className="text-blue-500 flex-shrink-0" size={14} /> : null}
                      <span className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>{point}</span>
                      {index % 2 === 0 ? <CheckCircle className="text-blue-500 flex-shrink-0 md:order-2" size={14} /> : null}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row">
            <div className="lg:w-2/5 p-12 lg:p-20 text-white">
              <h2 className="text-4xl font-bold mb-6">Let's Rank Your <span className="text-blue-400">Business.</span></h2>
              <p className="text-slate-400 text-lg mb-12">
                Ready to take your online presence to the next level? Contact me for a free 15-minute consultation or a full website audit.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Email Me</p>
                    <p className="text-lg font-medium">w_great1@hotmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Call Me</p>
                    <p className="text-lg font-medium">03321378901</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Location</p>
                    <p className="text-lg font-medium">Hyderabad, Sindh, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-3/5 p-12 lg:p-20 bg-white/5 backdrop-blur-sm border-l border-white/10">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 mb-8">I'll get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-blue-400 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Your Name</label>
                      <input 
                        required
                        type="text" 
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Your Email</label>
                      <input 
                        required
                        type="email" 
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Message</label>
                    <textarea 
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Tell me about your project or goals..."
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl transition-all shadow-xl shadow-blue-900/40 flex items-center justify-center gap-2"
                  >
                    Send Message <ChevronRight size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <span className="text-3xl font-bold text-blue-600">Waqas<span className="text-slate-900">Riaz.</span></span>
            <p className="mt-6 text-slate-500 text-lg max-w-sm">
              Helping businesses dominate search engines with engineering-driven SEO strategies and analytical marketing solutions.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="https://www.linkedin.com/in/engineer-waqas-riaz-arain-83375b63" target="_blank" className="p-2 bg-white shadow-sm border border-slate-200 rounded-lg text-slate-600 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-white shadow-sm border border-slate-200 rounded-lg text-slate-600 hover:text-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white shadow-sm border border-slate-200 rounded-lg text-slate-600 hover:text-blue-600 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-slate-600">
              <li><a href="#home" className="hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-600 transition-colors">About Me</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
              <li><a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-4 text-slate-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Sitemap</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Engineer Waqas Riaz Arain. All rights reserved. Designed for SEO performance.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 mb-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard icon={TrendingUp} value="10X+" label="Organic Traffic Growth" />
          <StatCard icon={Award} value="500+" label="Keywords on Page 1" />
          <StatCard icon={Users} value="150+" label="Businesses Served" />
        </div>
      </div>
      <About />
      <Services />
      <SkillsAndTools />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
