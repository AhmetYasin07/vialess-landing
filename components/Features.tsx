import { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, UserCircle, QrCode, IdCard, Users, BarChart3, Lock, Eye, CloudUpload, ScanLine, MapPin, Tags, Mail, Video, Building2, BookUser } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import onlineMeetingImage from 'figma:asset/8f838fb3b201b207901de91e3325fdbbd65b8077.png';
import multipleProfileImage from 'figma:asset/0e5917e26cb3ac81d50d93ab37f2fd1d310d076c.png';
import cardScannerImage from 'figma:asset/2b53a4d3e1dce2b83a17e70b67c8cf79fb516f27.png';
import emailSignatureImage from 'figma:asset/eb1ba554062da9f67f53ec45714046538933324c.png';
import cardReaderImage from 'figma:asset/30d407462c683d2033f595448f9405da80fdb4fe.png';
import analyticsImage from 'figma:asset/68d4ac64ea56c477a1fd33b5b3c1bf5900aba33e.png';
import multipleDigitalIdImage from 'figma:asset/a17c0f87543c3926c75ab878f791cdfb55409622.png';
import multipleProfileNewImage from 'figma:asset/4a7bd06f8a58df8cecabb3e715abc21eb0ff1026.png';
import digitalIdImage from 'figma:asset/08d78951bfbb062bdd7f903ef22069f8bfc237c7.png';
import qrShareImage from 'figma:asset/62a2286500cf6d6818feb37f740283596926e0d5.png';
import contextInfoImage from 'figma:asset/92608ab555dc6c16954878af8f52f2d5d48159ad.png';
import organizationImage from 'figma:asset/8e3f7d495340fcc0f5817f8d7215ac05dd8ffd83.png';

// Features component with multilingual support
export function Features() {
  const { t } = useLanguage();
  
  // State for the first section (Digital Business Card)
  const [activePoint, setActivePoint] = useState(0);
  const [activeSecurityPoint, setActiveSecurityPoint] = useState(0);
  const [activeSyncPoint, setActiveSyncPoint] = useState(0);
  
  // User interaction flags to pause auto-advance
  const [userInteractedDigital, setUserInteractedDigital] = useState(false);
  const [userInteractedContacts, setUserInteractedContacts] = useState(false);
  const [userInteractedSync, setUserInteractedSync] = useState(false);
  
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

  // Auto-advance timers — skip ticks when off-screen or user interacted
  useEffect(() => {
    if (userInteractedDigital) return; // Kullanıcı müdahale ettiyse timer başlatma
    
    const digitalCardPointsLength = 4;
    const timer = setInterval(() => {
      if (isVisibleRef.current) {
        setActivePoint((prev) => (prev + 1) % digitalCardPointsLength);
      }
    }, 4500);
    return () => clearInterval(timer);
  }, [userInteractedDigital]);

  useEffect(() => {
    if (userInteractedContacts) return; // Kullanıcı müdahale ettiyse timer başlatma
    
    const securityPointsLength = 3;
    const timer = setInterval(() => {
      if (isVisibleRef.current) {
        setActiveSecurityPoint((prev) => (prev + 1) % securityPointsLength);
      }
    }, 4500);
    return () => clearInterval(timer);
  }, [userInteractedContacts]);

  useEffect(() => {
    if (userInteractedSync) return; // Kullanıcı müdahale ettiyse timer başlatma
    
    const syncPointsLength = 2;
    const timer = setInterval(() => {
      if (isVisibleRef.current) {
        setActiveSyncPoint((prev) => (prev + 1) % syncPointsLength);
      }
    }, 4500);
    return () => clearInterval(timer);
  }, [userInteractedSync]);

  // Images for the Digital Business Card sub-points
  const digitalCardImages = [
    digitalIdImage,
    multipleDigitalIdImage,
    qrShareImage,
    analyticsImage
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
    emailSignatureImage,
    onlineMeetingImage,
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
    cardReaderImage,
    contextInfoImage,
    organizationImage,
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
                          onMouseEnter={() => {
                            setActivePoint(index);
                            setUserInteractedDigital(true);
                          }}
                          onClick={() => {
                            setActivePoint(index);
                            setUserInteractedDigital(true);
                          }}
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
                <div className="relative w-full max-w-[420px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePoint}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="w-full"
                    >
                      <img 
                        src={digitalCardImages[activePoint]}
                        alt={digitalCardPoints[activePoint].title}
                        className="w-full h-auto max-h-[680px] object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Mobile Image (Active Only) */}
            <div className="lg:hidden w-full max-w-[320px] mx-auto">
              <img 
                src={digitalCardImages[activePoint]}
                alt={digitalCardPoints[activePoint].title}
                className="w-full h-auto object-contain"
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
                          onMouseEnter={() => {
                            setActiveSecurityPoint(index);
                            setUserInteractedContacts(true);
                          }}
                          onClick={() => {
                            setActiveSecurityPoint(index);
                            setUserInteractedContacts(true);
                          }}
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
                <div className="sticky top-32 h-[520px] flex items-center justify-center">
                  <div className="relative w-full max-w-[420px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeSecurityPoint}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full"
                      >
                        <img 
                          src={contactsImages[activeSecurityPoint]}
                          alt={contactsPoints[activeSecurityPoint].title}
                          className={`w-full h-[520px] object-contain rounded-2xl ${activeSecurityPoint === 0 ? 'shadow-2xl shadow-purple-400/20' : ''}`}
                          style={{ background: 'transparent' }}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Mobile Image */}
              <div className="lg:hidden w-full max-w-[320px] mx-auto">
                <img 
                  src={contactsImages[activeSecurityPoint]}
                  alt={contactsPoints[activeSecurityPoint].title}
                  className={`w-full h-[360px] object-contain rounded-2xl ${activeSecurityPoint === 0 ? 'shadow-2xl shadow-purple-400/20' : ''}`}
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
                          onMouseEnter={() => {
                            setActiveSyncPoint(index);
                            setUserInteractedSync(true);
                          }}
                          onClick={() => {
                            setActiveSyncPoint(index);
                            setUserInteractedSync(true);
                          }}
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
                <div className="sticky top-32 h-[520px] flex items-center justify-center">
                  <div className="relative w-full max-w-[480px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeSyncPoint}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full"
                      >
                        <img 
                          src={syncImages[activeSyncPoint]}
                          alt={syncPoints[activeSyncPoint].title}
                          className={`w-full h-[520px] object-contain rounded-2xl ${activeSyncPoint === 0 ? 'shadow-2xl shadow-gray-400/30' : ''}`}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Mobile Image */}
              <div className="lg:hidden w-full mx-auto max-w-[320px]">
                <img 
                  src={syncImages[activeSyncPoint]}
                  alt={syncPoints[activeSyncPoint].title}
                  className={`w-full h-[360px] object-contain rounded-2xl ${activeSyncPoint === 0 ? 'shadow-2xl shadow-gray-400/30' : ''}`}
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