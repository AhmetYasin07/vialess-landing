import { useState, useEffect, useRef } from 'react';
import { Check, Sparkles, ArrowRight, Shield, RefreshCw, UserCircle, QrCode, IdCard, Users, BarChart3, Lock, Eye, CloudUpload, Bell, Smartphone, Zap, ScanLine, MapPin, Tags, Mail, Video, Building2, BookUser } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';

// Features component with multilingual support
export function Features() {
  const { t } = useLanguage();
  
  // State for the first section (Digital Business Card)
  const [activePoint, setActivePoint] = useState(0);
  const [activeSecurityPoint, setActiveSecurityPoint] = useState(0);
  const [activeSyncPoint, setActiveSyncPoint] = useState(0);
  
  // Visibility-based timer pausing
  const sectionRef = useRef<HTMLElement>(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-advance timers — skip ticks when off-screen
  useEffect(() => {
    const digitalCardPointsLength = 4;
    const timer = setInterval(() => {
      if (isVisibleRef.current) {
        setActivePoint((prev) => (prev + 1) % digitalCardPointsLength);
      }
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const securityPointsLength = 3;
    const timer = setInterval(() => {
      if (isVisibleRef.current) {
        setActiveSecurityPoint((prev) => (prev + 1) % securityPointsLength);
      }
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const syncPointsLength = 2;
    const timer = setInterval(() => {
      if (isVisibleRef.current) {
        setActiveSyncPoint((prev) => (prev + 1) % syncPointsLength);
      }
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Images for the Digital Business Card sub-points
  const digitalCardImages = [
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720'%3E%3Crect width='1080' height='720' fill='%23e5e7eb'/%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720'%3E%3Crect width='1080' height='720' fill='%23e5e7eb'/%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720'%3E%3Crect width='1080' height='720' fill='%23e5e7eb'/%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720'%3E%3Crect width='1080' height='720' fill='%23e5e7eb'/%3E%3C/svg%3E"
  ];

  const digitalCardPoints = [
    { 
      title: t.feature_1_point_2_title, 
      desc: t.feature_1_point_2_desc,
      icon: IdCard
    },
    { 
      title: t.feature_1_point_3_title, 
      desc: t.feature_1_point_3_desc,
      icon: Users
    },
    { 
      title: t.feature_1_point_1_title, 
      desc: t.feature_1_point_1_desc,
      icon: QrCode
    },
    {
      title: t.feature_1_point_4_title,
      desc: t.feature_1_point_4_desc,
      icon: BarChart3
    }
  ];

  // Images and points for Security section
  const securityImages = [
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720'%3E%3Crect width='1080' height='720' fill='%23e5e7eb'/%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720'%3E%3Crect width='1080' height='720' fill='%23e5e7eb'/%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720'%3E%3Crect width='1080' height='720' fill='%23e5e7eb'/%3E%3C/svg%3E",
  ];

  const securityPoints = [
    {
      title: t.feature_2_point_1_title,
      desc: t.feature_2_point_1_desc,
      icon: Lock
    },
    {
      title: t.feature_2_point_2_title,
      desc: t.feature_2_point_2_desc,
      icon: Eye
    },
    {
      title: t.feature_2_point_3_title,
      desc: t.feature_2_point_3_desc,
      icon: CloudUpload
    }
  ];

  // Images and points for Sync section
  const syncImages = [
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720'%3E%3Crect width='1080' height='720' fill='%23e5e7eb'/%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720'%3E%3Crect width='1080' height='720' fill='%23e5e7eb'/%3E%3C/svg%3E",
  ];

  const syncPoints = [
    {
      title: t.sync_point_1_title,
      desc: t.sync_point_1_desc,
      icon: Mail
    },
    {
      title: t.sync_point_2_title,
      desc: t.sync_point_2_desc,
      icon: Video
    }
  ];

  // Images and points for Contacts section (New Generation Contact Book)
  const contactsImages = [
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720'%3E%3Crect width='1080' height='720' fill='%23e5e7eb'/%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720'%3E%3Crect width='1080' height='720' fill='%23e5e7eb'/%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='720'%3E%3Crect width='1080' height='720' fill='%23e5e7eb'/%3E%3C/svg%3E",
  ];

  const contactsPoints = [
    {
      title: t.contacts_point_1_title,
      desc: t.contacts_point_1_desc,
      icon: ScanLine
    },
    {
      title: t.contacts_point_2_title,
      desc: t.contacts_point_2_desc,
      icon: MapPin
    },
    {
      title: t.contacts_point_3_title,
      desc: t.contacts_point_3_desc,
      icon: Tags
    }
  ];

  return (
    <section id="ozellikler" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            {t.features_badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {t.features_title_1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c63ff] to-[#8780fd]">{t.features_title_highlight}</span> {t.features_title_2}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t.features_subtitle}
          </p>
        </div>

        <div className="space-y-32">
          
          {/* FEATURE 1: Digital Business Card (Sticky Scroll) */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Left: Scrollable Content */}
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold relative overflow-hidden group/badge mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover/badge:translate-x-[200%] transition-transform duration-1000" />
                  <UserCircle className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{t.feature_1_badge}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                  {t.feature_1_title}
                </h3>
                
                {/* Fixed height container - reduced height */}
                <div className="relative">
                  <div className="relative min-h-[480px]">
                    {/* Vertical Line for timeline effect */}
                    <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-100 hidden md:block"></div>

                    <div className="space-y-3">
                      {digitalCardPoints.map((point, index) => (
                        <div 
                          key={index}
                          onMouseEnter={() => setActivePoint(index)}
                          onClick={() => setActivePoint(index)}
                          className={`group relative pl-0 md:pl-16 transition-all duration-300 cursor-pointer rounded-2xl p-3 md:py-4 md:pr-4 ${activePoint === index ? 'opacity-100 bg-purple-50/60' : 'opacity-60 hover:opacity-80 hover:bg-gray-50/50'}`}
                        >
                           {/* Timeline Dot */}
                           <div className={`absolute left-0 md:left-3 w-10 h-10 rounded-full border-2 hidden md:flex items-center justify-center bg-white transition-colors duration-300 z-10 ${activePoint === index ? 'border-[#6c63ff] text-[#6c63ff] shadow-md shadow-purple-200' : 'border-gray-200 text-gray-300'}`}>
                              <point.icon className="w-5 h-5" />
                           </div>

                           <div className="flex gap-4 md:hidden mb-2">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-colors duration-300 ${activePoint === index ? 'bg-purple-50 border-purple-200 text-[#6c63ff]' : 'bg-gray-50 border-gray-100 text-gray-400'}`}>
                                <point.icon className="w-5 h-5" />
                              </div>
                           </div>

                          <h4 className={`text-lg font-bold transition-colors duration-300 ${activePoint === index ? 'text-gray-900' : 'text-gray-500'}`}>
                            {point.title}
                          </h4>
                          
                          <div className={`overflow-hidden transition-all duration-400 ease-in-out ${activePoint === index ? 'max-h-32 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {point.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
            </div>

            {/* Right: Sticky Image */}
            <div className="flex-1 hidden lg:block">
              <div className="sticky top-32 h-[480px] flex items-center justify-center">
                <div className="relative w-full max-w-[360px] aspect-[9/16]">
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-[3rem] blur-3xl opacity-50"></div>
                  
                  {/* Frame */}
                  <div className="relative h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activePoint}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 w-full h-full"
                      >
                         <ImageWithFallback 
                            src={digitalCardImages[activePoint]}
                            alt={digitalCardPoints[activePoint].title}
                            width={360}
                            height={640}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                          />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Image (Active Only) */}
            <div className="lg:hidden w-full max-w-[360px] mx-auto aspect-[9/16] relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
               <ImageWithFallback 
                  src={digitalCardImages[activePoint]}
                  alt={digitalCardPoints[activePoint].title}
                  width={360}
                  height={640}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
            </div>

          </div>

          {/* FEATURE 2: Contacts (New Generation Contact Book) */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24">
             <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-semibold relative overflow-hidden group/badge mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover/badge:translate-x-[200%] transition-transform duration-1000" />
                  <BookUser className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{t.contacts_badge}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-8">
                  {t.contacts_title}
                </h3>
                
                {/* Fixed height container */}
                <div className="relative">
                  <div className="relative min-h-[420px]">
                    <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-100 hidden md:block"></div>

                    <div className="space-y-4">
                      {contactsPoints.map((point, index) => (
                        <div 
                          key={index}
                          onMouseEnter={() => setActiveSecurityPoint(index)}
                          onClick={() => setActiveSecurityPoint(index)}
                          className={`group relative pl-0 md:pl-16 transition-all duration-300 cursor-pointer rounded-2xl p-4 md:py-5 md:pr-5 ${activeSecurityPoint === index ? 'opacity-100 bg-green-50/60' : 'opacity-60 hover:opacity-80 hover:bg-gray-50/50'}`}
                        >
                           <div className={`absolute left-0 md:left-3 w-10 h-10 rounded-full border-2 hidden md:flex items-center justify-center bg-white transition-colors duration-300 z-10 ${activeSecurityPoint === index ? 'border-green-500 text-green-500 shadow-md shadow-green-200' : 'border-gray-200 text-gray-300'}`}>
                              <point.icon className="w-5 h-5" />
                           </div>

                           <div className="flex gap-4 md:hidden mb-3">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-colors duration-300 ${activeSecurityPoint === index ? 'bg-green-50 border-green-200 text-green-500' : 'bg-gray-50 border-gray-100 text-gray-400'}`}>
                                <point.icon className="w-5 h-5" />
                              </div>
                           </div>

                          <h4 className={`text-xl font-bold transition-colors duration-300 ${activeSecurityPoint === index ? 'text-gray-900' : 'text-gray-500'}`}>
                            {point.title}
                          </h4>
                          
                          <div className={`overflow-hidden transition-all duration-400 ease-in-out ${activeSecurityPoint === index ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}>
                            <p className="text-base text-gray-600 leading-relaxed">
                              {point.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Left: Sticky Image */}
              <div className="flex-1 hidden lg:block">
                <div className="sticky top-32 h-[600px] flex items-center justify-center">
                  <div className="relative w-full max-w-[400px] aspect-[9/16]">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-[3rem] blur-3xl opacity-50"></div>
                    <div className="relative h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeSecurityPoint}
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 w-full h-full"
                        >
                          <ImageWithFallback 
                            src={contactsImages[activeSecurityPoint]}
                            alt={contactsPoints[activeSecurityPoint].title}
                            width={400}
                            height={711}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Image */}
              <div className="lg:hidden w-full max-w-[400px] mx-auto aspect-[9/16] relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
                <ImageWithFallback 
                  src={contactsImages[activeSecurityPoint]}
                  alt={contactsPoints[activeSecurityPoint].title}
                  width={400}
                  height={711}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
          </div>

          {/* FEATURE 3: Updates */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
             <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold relative overflow-hidden group/badge mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover/badge:translate-x-[200%] transition-transform duration-1000" />
                  <Building2 className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{t.sync_badge}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-8">
                  {t.sync_title}
                </h3>
                
                {/* Fixed height container */}
                <div className="relative">
                  <div className="relative min-h-[280px]">
                    <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-100 hidden md:block"></div>

                    <div className="space-y-4">
                      {syncPoints.map((point, index) => (
                        <div 
                          key={index}
                          onMouseEnter={() => setActiveSyncPoint(index)}
                          onClick={() => setActiveSyncPoint(index)}
                          className={`group relative pl-0 md:pl-16 transition-all duration-300 cursor-pointer rounded-2xl p-4 md:py-5 md:pr-5 ${activeSyncPoint === index ? 'opacity-100 bg-blue-50/60' : 'opacity-60 hover:opacity-80 hover:bg-gray-50/50'}`}
                        >
                           <div className={`absolute left-0 md:left-3 w-10 h-10 rounded-full border-2 hidden md:flex items-center justify-center bg-white transition-colors duration-300 z-10 ${activeSyncPoint === index ? 'border-blue-500 text-blue-500 shadow-md shadow-blue-200' : 'border-gray-200 text-gray-300'}`}>
                              <point.icon className="w-5 h-5" />
                           </div>

                           <div className="flex gap-4 md:hidden mb-3">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-colors duration-300 ${activeSyncPoint === index ? 'bg-blue-50 border-blue-200 text-blue-500' : 'bg-gray-50 border-gray-100 text-gray-400'}`}>
                                <point.icon className="w-5 h-5" />
                              </div>
                           </div>

                          <h4 className={`text-xl font-bold transition-colors duration-300 ${activeSyncPoint === index ? 'text-gray-900' : 'text-gray-500'}`}>
                            {point.title}
                          </h4>
                          
                          <div className={`overflow-hidden transition-all duration-400 ease-in-out ${activeSyncPoint === index ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}>
                            <p className="text-base text-gray-600 leading-relaxed">
                              {point.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Sticky Image */}
              <div className="flex-1 hidden lg:block">
                <div className="sticky top-32 h-[600px] flex items-center justify-center">
                  <div className="relative w-full max-w-[400px] aspect-[9/16]">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-[3rem] blur-3xl opacity-50"></div>
                    <div className="relative h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeSyncPoint}
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 w-full h-full"
                        >
                          <ImageWithFallback 
                            src={syncImages[activeSyncPoint]}
                            alt={syncPoints[activeSyncPoint].title}
                            width={400}
                            height={711}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Image */}
              <div className="lg:hidden w-full max-w-[400px] mx-auto aspect-[9/16] relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
                <ImageWithFallback 
                  src={syncImages[activeSyncPoint]}
                  alt={syncPoints[activeSyncPoint].title}
                  width={400}
                  height={711}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
          </div>

        </div>

        {/* CTA Button - Explore All Features */}
        <div className="mt-24 text-center">
          <Link 
            to="/ozellikler"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#6c63ff] to-[#8780fd] text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <span>{t.features_cta_button}</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}