import React from 'react';
import profile from "./assets/arjit.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Shield, 
  Code2, 
  Terminal, 
  Cpu,
  GraduationCap,
  Award,
  Briefcase
} from 'lucide-react';
import { RESUME_DATA } from './constants';
import { cn } from './lib/utils';

export default function App() {
  const [selectedCert, setSelectedCert] = useState(null);
  return (
    <div className="min-h-screen font-sans selection:bg-brand-copper/30 bg-white text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-opacity-80 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter text-brand-copper"
          >
            AS.
          </motion.span>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium">
              {['About', 'Education', 'Skills', 'Projects', 'Certifications'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-brand-copper transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-4 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section id="about" className="py-12 md:py-24">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-7"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-slate-900">
                Hi, I'm <span className="text-brand-copper">{RESUME_DATA.name}</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                {RESUME_DATA.summary}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  className="flex items-center gap-2 px-8 py-4 bg-brand-copper text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-lg shadow-brand-copper/20"
                >
                  <Mail size={18} /> Contact Me
                </a>
                <div className="flex gap-3">
                  <a href={RESUME_DATA.contact.github} className="p-4 rounded-2xl border border-slate-200 hover:border-brand-copper transition-colors bg-white shadow-sm">
                    <Github size={22} />
                  </a>
                  <a href={RESUME_DATA.contact.linkedin} className="p-4 rounded-2xl border border-slate-200 hover:border-brand-copper transition-colors bg-white shadow-sm">
                    <Linkedin size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-5 relative"
            >
              <div className="aspect-square rounded-[2.5rem] bg-gradient-to-br from-brand-copper to-brand-terracotta opacity-10 absolute -inset-4 blur-3xl animate-pulse" />
              
              <div className="relative space-y-6">
                {/* Image Placeholder */}
                <div className="aspect-square rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl bg-slate-100 group">
                  <img 
                    src={profile} 
                    alt="Arjit Singh" 
                    className="w-full h-full object-cover object-center scale-110 transition duration-300 hover:grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white text-sm font-medium">Arjit Singh • AI & Cybersecurity</p>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl">
                      <div className="text-2xl font-black text-brand-copper">8.0</div>
                      <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">B.Tech CGPA</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl">
                      <div className="text-2xl font-black text-brand-copper">3+</div>
                      <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Major Projects</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <MapPin size={16} className="text-brand-copper" />
                      <span>{RESUME_DATA.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <Phone size={16} className="text-brand-copper" />
                      <span>{RESUME_DATA.contact.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 border-t border-slate-100">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-4 bg-brand-copper/10 rounded-2xl text-brand-copper">
              < GraduationCap size={28} />
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Education</h2>
          </div>
          <div className="grid gap-8">
            {RESUME_DATA.education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative pl-10 border-l-2 border-slate-200 hover:border-brand-copper transition-colors"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 group-hover:bg-brand-copper transition-colors" />
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 text-slate-900">{edu.institution}</h3>
                    <p className="text-brand-copper font-bold tracking-wide">{edu.degree}</p>
                  </div>
                  <span className="text-xs font-black tracking-widest uppercase px-4 py-2 bg-slate-100 rounded-xl text-slate-500">
                    {edu.period}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                  <span className="text-brand-terracotta font-bold">{edu.score}</span>
                  <span className="opacity-30">|</span>
                  <span>{edu.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-slate-100">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-4 bg-brand-terracotta/10 rounded-2xl text-brand-terracotta">
              <Code2 size={28} />
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Technical Skills</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard title="Programming" icon={<Terminal size={20} />} skills={RESUME_DATA.skills.programming} />
            <SkillCard title="Web Technologies" icon={<Code2 size={20} />} skills={RESUME_DATA.skills.web} />
            <SkillCard title="Security Knowledge" icon={<Shield size={20} />} skills={RESUME_DATA.skills.security} />
            <SkillCard title="Tools & Platforms" icon={<Briefcase size={20} />} skills={[...RESUME_DATA.skills.tools, ...RESUME_DATA.skills.platforms]} />
            <SkillCard title="Security Tools" icon={<Shield size={20} />} skills={RESUME_DATA.skills.securityTools} />
            <SkillCard title="Core Skills" icon={<Cpu size={20} />} skills={RESUME_DATA.skills.core} />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-slate-100">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-4 bg-brand-copper/10 rounded-2xl text-brand-copper">
              <Terminal size={28} />
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {RESUME_DATA.projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-brand-copper transition-all shadow-sm hover:shadow-2xl hover:shadow-brand-copper/5"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold group-hover:text-brand-copper transition-colors leading-tight text-slate-900">{project.title}</h3>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{project.year}</span>
                </div>
                <p className="text-sm font-bold text-brand-terracotta mb-6 bg-brand-terracotta/5 inline-block px-3 py-1 rounded-lg">{project.tech}</p>
                <ul className="space-y-4 mb-8">
                  {project.description.map((desc, i) => (
                    <li key={i} className="text-slate-600 text-sm flex gap-3 leading-relaxed">
                      <span className="text-brand-copper shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-copper" />
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-6 pt-4 border-t border-slate-100">
                  <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-brand-copper hover:gap-3 transition-all"
                >
                  View Code <Github size={16} />
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-brand-copper hover:gap-3 transition-all"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}

<section id="certificates" className="py-20 border-t border-slate-100">

<div className="flex items-center gap-4 mb-12">
<h2 className="text-4xl font-bold tracking-tight text-slate-900">
Certificates
</h2>
</div>

<Swiper
modules={[Autoplay, Navigation]}
spaceBetween={30}
slidesPerView={3}
centeredSlides={true}
loop={true}
autoplay={{ delay: 2500 }}
navigation={true}
grabCursor={true}
>

{RESUME_DATA.certificates.map((cert, i) => (

<SwiperSlide key={i}>

<div
className="rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
onClick={() => setSelectedCert(cert.image)}
>

<img
src={cert.image}
alt={cert.title}
className="w-full transition duration-300 group-hover:scale-105"
/>

</div>

</SwiperSlide>

))}

</Swiper>

</section>
      </main>

      <footer className="py-20 border-t border-slate-100 text-center">
        <div className="max-w-xs mx-auto mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
        <p className="text-slate-500 text-sm mb-6 font-medium">
          © {new Date().getFullYear()} {RESUME_DATA.name}. Built with Passion.
        </p>
        <div className="flex justify-center gap-6">
          <a href={RESUME_DATA.contact.github} className="p-2 text-slate-400 hover:text-brand-copper transition-all hover:scale-110"><Github size={24} /></a>
          <a href={RESUME_DATA.contact.linkedin} className="p-2 text-slate-400 hover:text-brand-copper transition-all hover:scale-110"><Linkedin size={24} /></a>
          <a href={`mailto:${RESUME_DATA.contact.email}`} className="p-2 text-slate-400 hover:text-brand-copper transition-all hover:scale-110"><Mail size={24} /></a>
        </div>
      </footer>
      {selectedCert && (
<div
className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
onClick={() => setSelectedCert(null)}
>

<img
src={selectedCert}
className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
/>

</div>
)}
    </div>
  );
}

function SkillCard({ title, icon, skills }: { title: string, icon: React.ReactNode, skills: string[] }) {
  return (
    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200">
      <div className="flex items-center gap-3 mb-4 text-brand-copper">
        {icon}
        <h3 className="font-bold text-slate-900">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="text-xs font-medium px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-sm text-slate-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
