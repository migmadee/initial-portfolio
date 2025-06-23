'use client';

import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { projects } from '@/Data';
import FloatingSkills from '@/component/FloatingSkill';
import Image from 'next/image';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);

          const sections = ['home', 'about', 'projects', 'contact'];
          const current = sections.find((id) => {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
          });

          if (current) setActiveSection(current);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Migma Dema Sherpa - Portfolio</title>
        <meta name="description" content="Full-stack developer passionate about creating amazing web experiences" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Migma Dema Sherpa
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors duration-300 hover:text-blue-500 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-500'
                      : isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
        <div className="flex justify-center items-center py-12">

<Image
  src="/halfphoto.jpeg"
  alt="Profile"
  width={240}
  height={240}
  className="rounded-full object-cover shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:shadow-2xl"
/>

</div>



            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Migma Dema Sherpa</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Full-Stack Developer passionate about creating amazing web experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors duration-300 font-semibold"
            >
              View My Work
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-white hover:bg-white hover:text-gray-900 rounded-lg transition-all duration-300 font-semibold"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-16 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I&apos;m a passionate full-stack developer who completed my internship at Athang Training Academy. 
                    I specialize in creating digital solutions that make a real difference in people&apos;s lives.
                  </p>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-16 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Beyond coding, I&apos;m constantly exploring new technologies, expressing creativity through writing and drawing, 
                    and cherishing moments with the people who matter most.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-white/50 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Let&apos;s Connect</h3>
                <p className="text-gray-600">Ready to collaborate or just say hello?</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <a 
                  href="https://github.com/migmadee" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub Profile"
                  className="group relative p-6 bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-800 hover:to-black rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Github className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors mx-auto" />
                </a>

                <a 
                  href="https://www.linkedin.com/in/migmademasherpa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn Profile"
                  className="group relative p-6 bg-gradient-to-br from-blue-100 to-blue-200 hover:from-blue-600 hover:to-blue-800 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Linkedin className="w-8 h-8 text-blue-700 group-hover:text-white transition-colors mx-auto" />
                </a>

                <a 
                  href="mailto:migmadema079@gmail.com" 
                  aria-label="Send Email"
                  className="group relative p-6 bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-600 hover:to-purple-800 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Mail className="w-8 h-8 text-purple-700 group-hover:text-white transition-colors mx-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FloatingSkills />

      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors"
                    >
                      <Github className="w-5 h-5" /> Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" /> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Let&apos;s Work Together</h2>
          <p className="text-xl mb-12 text-gray-300">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s chat!
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">migmadema079@gmail.com</p>
            </div>
            <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Github className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-gray-300">@migmadee</p>
            </div>
            <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Linkedin className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300">Migma Dema Sherpa</p>
            </div>
          </div>
          <a
            href="mailto:migmadema079@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Mail className="w-5 h-5" /> Send Message
          </a>
        </div>
      </section>

      <footer className="py-8 bg-gray-900 text-white text-center">
        <p>&copy; 2025 Migma Dema Sherpa. All rights reserved.</p>
      </footer>
    </>
  );
}
