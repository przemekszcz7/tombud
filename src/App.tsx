import React, { useState, useEffect } from "react";
import { 
  Phone, 
  Mail, 
  Facebook, 
  MessageSquare,
  Check, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ArrowRight,
  Maximize2,
  Send,
  HardHat,
  Droplet,
  Compass,
  Layers,
  MapPin,
  Calendar,
  CheckCircle,
  Clock,
  Star,
  ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Types for our realizations
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState("");

  // Scroll listener to update header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Unified, flat list of all realization images
  const allImages = [
    "https://i.ibb.co/qLNLXTJ4/724019907-122255406938152172-3128836796561668569-n.jpg",
    "https://i.ibb.co/CsY5XJHQ/724257154-122255406896152172-1857620340076052329-n.jpg",
    "https://i.ibb.co/r2mFKDZc/723118797-122255406854152172-8809157203539423034-n.jpg",
    "https://i.ibb.co/1GK9hM15/724047007-122255406806152172-4062911230286143239-n.jpg",
    "https://i.ibb.co/zV516f8S/724024302-122255406764152172-1612290438315317025-n.jpg",
    "https://i.ibb.co/5X54km4x/724181885-122255406722152172-1808138757206685203-n.jpg",
    "https://i.ibb.co/bjnCXygk/724818281-122255406674152172-5972124209726236884-n.jpg",
    "https://i.ibb.co/9mLHjfRv/723820955-122255406632152172-6026018988199683083-n.jpg",
    "https://i.ibb.co/2Vzwp65/723209111-122255406590152172-4219860874990016825-n.jpg",
    "https://i.ibb.co/mrYgvpNV/709134852-122253526004152172-7140460602356122690-n.jpg",
    "https://i.ibb.co/3t239Tw/708089079-122253525962152172-2629237634572453834-n.jpg",
    "https://i.ibb.co/FLL0YtGs/709079110-122253525920152172-3651607086909840591-n.jpg",
    "https://i.ibb.co/WNL0R8bt/708254832-122253525878152172-442948157717150219-n.jpg",
    "https://i.ibb.co/zVFgL0k4/708243910-122253525830152172-4977516386671948879-n.jpg",
    "https://i.ibb.co/dJMX6D4D/706793008-122253525788152172-2940389981522022344-n.jpg",
    "https://i.ibb.co/G4HYJHSW/708891855-122253525746152172-3201323282693254346-n.jpg",
    "https://i.ibb.co/RGCCgX7v/706436960-122253525698152172-3715150504647075232-n.jpg",
    "https://i.ibb.co/R4p15PxP/707965186-122253525656152172-4239616075529665704-n.jpg",
    "https://i.ibb.co/tTztRk8n/707005310-122253525614152172-3909890414331736855-n.jpg",
    "https://i.ibb.co/C3PZ757N/735317508-122257789172152172-2635727666402307717-n.jpg",
    "https://i.ibb.co/z9zWKz7/738759035-122257789130152172-5247221346328789460-n.jpg",
    "https://i.ibb.co/RGCF4ZBn/738396219-122257789088152172-5187095515074153824-n.jpg",
    "https://i.ibb.co/ycLmWdrg/737875510-122257789046152172-1348159730756407811-n.jpg",
    "https://i.ibb.co/QBnVqjC/735018293-122257789004152172-496689502894115583-n.jpg",
    "https://i.ibb.co/Yq89yX6/737324795-122257788962152172-1428516895903559178-n.jpg"
  ];

  const openLightbox = (images: string[], index: number, title: string) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxTitle(title);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#f5c400] selection:text-black">
      
      {/* HEADER / NAVIGATION */}
      <header 
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-[#0a0a0ab3] backdrop-blur-md py-3 border-b border-[#ffffff10]" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#f5c400] transition-transform duration-300 group-hover:scale-105">
              <img 
                src="https://i.ibb.co/6JscD8M8/469607065-122179070072152172-1636234746867101575-n.jpg" 
                alt="TOM BUD Logo" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-wider text-white group-hover:text-[#f5c400] transition-colors duration-200">
                TOM BUD
              </span>
              <span className="text-[10px] tracking-widest text-gray-400 font-mono uppercase">
                Prace Ziemne
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-sans font-medium text-sm tracking-wide">
            <a href="#o-firmie" className="text-gray-300 hover:text-[#f5c400] transition-colors duration-200">O Firmie</a>
            <a href="#oferta" className="text-gray-300 hover:text-[#f5c400] transition-colors duration-200">Oferta</a>
            <a href="#zalety" className="text-gray-300 hover:text-[#f5c400] transition-colors duration-200">Dlaczego My</a>
            <a href="#realizacje" className="text-gray-300 hover:text-[#f5c400] transition-colors duration-200">Realizacje</a>
            <a href="#kontakt" className="text-gray-300 hover:text-[#f5c400] transition-colors duration-200">Kontakt</a>
          </nav>

          {/* Desktop Quick Action */}
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href="tel:515286822" 
              className="flex items-center gap-2 bg-[#f5c400] text-black font-display font-bold py-2.5 px-5 rounded-md hover:bg-white transition-all duration-300 shadow-[0_4px_20px_rgba(245,196,0,0.25)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.2)] hover:scale-102"
              id="header-call-btn"
            >
              <Phone size={16} className="fill-black" />
              <span>515 286 822</span>
            </a>
          </div>

          {/* Hamburger button (mobile) */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#f5c400] transition-colors"
            id="mobile-menu-toggle"
            aria-label="Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-[2px] bg-current rounded transition-all duration-300 ${mobileMenuOpen ? "w-6 rotate-45 translate-y-[9px]" : "w-6"}`}></span>
              <span className={`h-[2px] bg-current rounded transition-all duration-300 ${mobileMenuOpen ? "w-0 opacity-0" : "w-4"}`}></span>
              <span className={`h-[2px] bg-current rounded transition-all duration-300 ${mobileMenuOpen ? "w-6 -rotate-45 -translate-y-[9px]" : "w-5"}`}></span>
            </div>
          </button>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0a0af0] bg-opacity-95 bg-black pt-24 px-6 pb-8 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-6 font-display font-bold text-2xl text-center">
              <a 
                href="#o-firmie" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#f5c400] transition-colors py-2 border-b border-zinc-800"
              >
                O Firmie
              </a>
              <a 
                href="#oferta" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#f5c400] transition-colors py-2 border-b border-zinc-800"
              >
                Oferta
              </a>
              <a 
                href="#zalety" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#f5c400] transition-colors py-2 border-b border-zinc-800"
              >
                Dlaczego My
              </a>
              <a 
                href="#realizacje" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#f5c400] transition-colors py-2 border-b border-zinc-800"
              >
                Realizacje
              </a>
              <a 
                href="#kontakt" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#f5c400] transition-colors py-2"
              >
                Kontakt
              </a>
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <a 
                href="tel:515286822"
                className="flex items-center justify-center gap-3 bg-[#f5c400] text-black font-display font-extrabold py-4 rounded-xl shadow-lg"
              >
                <Phone size={20} className="fill-black" />
                <span>Zadzwoń teraz: 515 286 822</span>
              </a>
              <p className="text-center text-xs text-gray-500 font-mono">TOM BUD – Usługi koparką 2,7T</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* HERO SECTION */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden"
      >
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/6JbtBnzX/474196238-122185470158152172-3829802752083062145-n.jpg" 
            alt="TOM BUD Koparka" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Linear gradient overlay for high contrast text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0ae0] to-[#0a0a0a99]"></div>
          {/* Subtle industrial pattern indicator */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#f5c400_1.5px,transparent_1.5px)] [background-size:16px_16px]"></div>
        </div>

        {/* Content Box */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full text-center md:text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 self-center md:self-start bg-[#f5c4001f] border border-[#f5c40050] text-[#f5c400] font-mono text-xs uppercase tracking-widest py-1.5 px-4 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#f5c400] animate-pulse"></span>
              Profesjonalne Prace Ziemne
            </div>

            {/* Main Header */}
            <div className="flex flex-col">
              <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl tracking-tight text-white leading-none">
                TOM <span className="text-[#f5c400]">BUD</span>
              </h1>
              <p className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-100 mt-4 leading-tight">
                Usługi koparką 2,7T
              </p>
              <p className="text-lg sm:text-xl text-[#f5c400] tracking-wider uppercase font-mono mt-1 font-semibold">
                Profesjonalne prace ziemne
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-gray-300 text-lg max-w-xl leading-relaxed font-sans font-light">
              "Solidne wykonanie, dokładność i doświadczenie w realizacji prac ziemnych."
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
              <a 
                href="tel:515286822" 
                className="flex items-center justify-center gap-3 bg-[#f5c400] text-black font-display font-extrabold py-4 px-8 rounded-lg hover:bg-white transition-all duration-300 shadow-[0_4px_30px_rgba(245,196,0,0.3)] hover:scale-102 group text-base"
                id="hero-call-now"
              >
                <Phone size={18} className="fill-black group-hover:scale-110 transition-transform" />
                <span>Zadzwoń teraz</span>
              </a>
              <a 
                href="#realizacje" 
                className="flex items-center justify-center gap-3 bg-zinc-900 border-2 border-zinc-700 text-white font-display font-extrabold py-4 px-8 rounded-lg hover:bg-zinc-800 hover:border-[#f5c400] transition-all duration-300 text-base"
                id="hero-view-realizations"
              >
                <span>Zobacz realizacje</span>
                <ArrowRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Floating Badge / Visual Detail */}
          <div className="hidden lg:flex lg:col-span-4 justify-end relative">
            <div className="relative p-6 bg-zinc-900/80 border-2 border-[#f5c400]/40 backdrop-blur-md rounded-2xl max-w-xs shadow-2xl">
              <div className="absolute -top-5 -left-5 bg-[#f5c400] text-black w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-xl shadow-lg">
                ✔
              </div>
              <h3 className="font-display font-bold text-lg text-white mt-2">Darmowa Wycena</h3>
              <p className="text-sm text-gray-400 mt-2 font-sans leading-relaxed">
                Skontaktuj się z nami telefonicznie lub mailowo, a bezpłatnie wycenimy Twoje zlecenie ziemne.
              </p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-zinc-800">
                <span className="text-xs font-mono text-[#f5c400] font-semibold">ZADZWOŃ:</span>
                <a href="tel:515286822" className="text-base font-display font-extrabold text-white hover:text-[#f5c400] transition-colors">
                  515 286 822
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Diagonal Section Divider at Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 120 0 0z" fill="#0c0c0c"></path>
          </svg>
        </div>
      </section>


      {/* O FIRMIE SECTION */}
      <section id="o-firmie" className="bg-[#0c0c0c] py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Visual with Round Logo Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                
                {/* Main Image Container */}
                <div className="relative bg-zinc-900 border border-zinc-800 p-6 rounded-2xl z-10 shadow-2xl max-w-sm">
                  <div className="aspect-square rounded-xl overflow-hidden bg-black border-2 border-zinc-800 mb-6">
                    <img 
                      src="https://i.ibb.co/6JscD8M8/469607065-122179070072152172-1636234746867101575-n.jpg" 
                      alt="TOM BUD Maszyny" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="font-display font-bold text-lg text-white">TOM BUD</span>
                      <span className="font-mono text-xs text-[#f5c400] font-semibold">Rzeszów & Okolice</span>
                    </div>
                    <p className="text-xs text-gray-400 font-sans">
                      Usługi koparką 2,7T na najwyższym poziomie profesjonalizmu.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Info & Distinctive Highlights */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs text-[#f5c400] uppercase tracking-widest font-bold">Poznaj naszą firmę</span>
                <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight construction-accent">
                  Profesjonalne prace ziemne
                </h2>
              </div>

              <div className="text-gray-300 text-lg font-light leading-relaxed flex flex-col gap-4">
                <p>
                  <strong className="text-white font-medium">TOM BUD</strong> świadczy profesjonalne usługi koparką o masie <strong className="text-[#f5c400] font-bold">2,7 ton</strong>. Nasz sprzęt łączy kompaktowe wymiary z potężną mocą, co pozwala nam pracować z niezwykłą wydajnością nawet w trudnodostępnych miejscach.
                </p>
                <p>
                  Realizujemy różnorodne prace ziemne – od przygotowania terenu, poprzez wykopy i instalacje, aż po kompleksowe przygotowanie działek. Bezpieczeństwo, profesjonalizm i zgodność ze sztuką budowlaną to nasze absolutne priorytety.
                </p>
              </div>

              {/* Three distinctive highlights with checkmarks */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                
                <div className="bg-zinc-900 border-l-4 border-[#f5c400] p-5 rounded-r-xl shadow-md hover:translate-y-[-2px] transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#f5c4001a] flex items-center justify-center mb-3">
                    <Check className="text-[#f5c400]" size={20} />
                  </div>
                  <h4 className="font-display font-bold text-white text-base">Dokładność wykonania</h4>
                  <p className="text-xs text-gray-400 mt-1">Prace realizujemy z chirurgiczną precyzją według planów.</p>
                </div>

                <div className="bg-zinc-900 border-l-4 border-[#f5c400] p-5 rounded-r-xl shadow-md hover:translate-y-[-2px] transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#f5c4001a] flex items-center justify-center mb-3">
                    <Check className="text-[#f5c400]" size={20} />
                  </div>
                  <h4 className="font-display font-bold text-white text-base">Terminowa realizacja</h4>
                  <p className="text-xs text-gray-400 mt-1">Szanujemy Twój czas. Dotrzymujemy ustalonych terminów.</p>
                </div>

                <div className="bg-zinc-900 border-l-4 border-[#f5c400] p-5 rounded-r-xl shadow-md hover:translate-y-[-2px] transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#f5c4001a] flex items-center justify-center mb-3">
                    <Check className="text-[#f5c400]" size={20} />
                  </div>
                  <h4 className="font-display font-bold text-white text-base">Nowoczesny sprzęt</h4>
                  <p className="text-xs text-gray-400 mt-1">Dysponujemy koparką 2,7T w doskonałym stanie technicznym.</p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* OFERTA SECTION */}
      <section id="oferta" className="bg-[#0a0a0a] py-24 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <span className="font-mono text-xs text-[#f5c400] uppercase tracking-widest font-bold">Kompleksowy Zakres Prac</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
              Nasze usługi
            </h2>
            <div className="w-24 h-1 bg-[#f5c400] mt-2"></div>
            <p className="text-gray-400 font-sans font-light mt-3">
              Świadczymy usługi ziemne najwyższej klasy. Zobacz nasz pełny pakiet prac realizowany profesjonalną minikoparką 2,7T.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Service Card 1 */}
            <div className="bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-[#f5c400]/40 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px] flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-xl bg-zinc-800 text-[#f5c400] flex items-center justify-center mb-6 border border-zinc-700 group-hover:bg-[#f5c400] group-hover:text-black transition-colors duration-300">
                  <HardHat size={28} />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-4 group-hover:text-[#f5c400] transition-colors">
                  🚜 Usługi minikoparką 2,7T
                </h3>
                <ul className="flex flex-col gap-2.5 text-gray-400 font-sans text-sm">
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#f5c400]" /> wykopy</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#f5c400]" /> przygotowanie terenu</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#f5c400]" /> prace ziemne</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#f5c400]" /> wykopy pod instalacje</li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-zinc-800">
                <span className="text-xs font-mono text-[#f5c400] uppercase tracking-wider font-semibold">Kompaktowa & Silna</span>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-[#f5c400]/40 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px] flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-xl bg-zinc-800 text-[#f5c400] flex items-center justify-center mb-6 border border-zinc-700 group-hover:bg-[#f5c400] group-hover:text-black transition-colors duration-300">
                  <Droplet size={28} />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-4 group-hover:text-[#f5c400] transition-colors">
                  💧 Przyłącza
                </h3>
                <ul className="flex flex-col gap-2.5 text-gray-400 font-sans text-sm">
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#f5c400]" /> przyłącza wodne</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#f5c400]" /> przyłącza elektryczne</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#f5c400]" /> przygotowanie instalacji</li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-zinc-800">
                <span className="text-xs font-mono text-[#f5c400] uppercase tracking-wider font-semibold">Kompleksowa instalacja</span>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-[#f5c400]/40 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px] flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-xl bg-zinc-800 text-[#f5c400] flex items-center justify-center mb-6 border border-zinc-700 group-hover:bg-[#f5c400] group-hover:text-black transition-colors duration-300">
                  <Compass size={28} />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-4 group-hover:text-[#f5c400] transition-colors">
                  🌧 Zbiorniki i odwodnienia
                </h3>
                <ul className="flex flex-col gap-2.5 text-gray-400 font-sans text-sm">
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#f5c400]" /> montaż zbiorników na deszczówkę</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#f5c400]" /> drenaże</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#f5c400]" /> odwodnienia terenu</li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-zinc-800">
                <span className="text-xs font-mono text-[#f5c400] uppercase tracking-wider font-semibold">Ochrona przed wodą</span>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-[#f5c400]/40 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px] flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-xl bg-zinc-800 text-[#f5c400] flex items-center justify-center mb-6 border border-zinc-700 group-hover:bg-[#f5c400] group-hover:text-black transition-colors duration-300">
                  <Layers size={28} />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-4 group-hover:text-[#f5c400] transition-colors">
                  🏡 Przygotowanie działek
                </h3>
                <ul className="flex flex-col gap-2.5 text-gray-400 font-sans text-sm">
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#f5c400]" /> równanie terenu</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#f5c400]" /> utwardzenia</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#f5c400]" /> przygotowanie pod budowę</li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-zinc-800">
                <span className="text-xs font-mono text-[#f5c400] uppercase tracking-wider font-semibold">Idealny profil gruntu</span>
              </div>
            </div>

          </div>

          {/* Quick Contact CTA Banner inside Oferta */}
          <div className="mt-16 bg-[#f5c40015] border border-[#f5c40030] rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f5c400] text-black flex items-center justify-center font-bold text-xl shrink-0">
                i
              </div>
              <p className="text-sm md:text-base text-gray-300 font-sans">
                Potrzebujesz nietypowych prac ziemnych? Realizujemy zadania pod indywidualne specyfikacje inwestora.
              </p>
            </div>
            <a 
              href="#kontakt" 
              className="bg-[#f5c400] text-black font-display font-bold py-3 px-6 rounded-lg hover:bg-white transition-all duration-300 text-sm whitespace-nowrap shrink-0"
            >
              Zapytaj o szczegóły
            </a>
          </div>

        </div>
      </section>


      {/* REALIZACJE SECTION (The most critical section with gallery) */}
      <section id="realizacje" className="bg-[#0c0c0c] py-24 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
            <span className="font-mono text-xs text-[#f5c400] uppercase tracking-widest font-bold">Galeria Wykonanych Prac</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
              Nasze realizacje
            </h2>
            <div className="w-24 h-1 bg-[#f5c400] mt-2"></div>
            <p className="text-gray-400 font-sans font-light mt-3">
              Zdjęcia bezpośrednio z placu budowy. Zobacz najwyższą jakość wykonania prac drenażowych, przyłączy oraz niwelacji terenu przez firmę TOM BUD. Kliknij na zdjęcie, by je powiększyć.
            </p>
          </div>

          {/* Project Images Responsive Thumbnails Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {allImages.map((imgUrl, imgIdx) => (
              <div 
                key={imgIdx}
                onClick={() => openLightbox(allImages, imgIdx, "Realizacja TOM BUD")}
                className="group relative aspect-square rounded-xl overflow-hidden bg-black border border-zinc-800 cursor-pointer shadow-md hover:shadow-2xl hover:border-[#f5c400]/50 transition-all duration-300"
              >
                {/* Loading visual */}
                <div className="absolute inset-0 bg-zinc-950 flex items-center justify-center -z-10">
                  <span className="text-xs text-zinc-700 font-mono">TOM BUD</span>
                </div>
                
                {/* Actual Image */}
                <img 
                  src={imgUrl} 
                  alt={`Realizacja TOM BUD - Zdjęcie ${imgIdx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Hover Overlay with Icon - Pure Icon, No Captions/Text */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#f5c400] text-black flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 size={18} />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>


      {/* SEKCJA ZALET (Dlaczego TOM BUD?) */}
      <section id="zalety" className="bg-[#0a0a0a] py-24 relative overflow-hidden">
        {/* Decorative machinery element backdrop */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#f5c400]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-zinc-900/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <span className="font-mono text-xs text-[#f5c400] uppercase tracking-widest font-bold">Nasze Silne Strony</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
              Dlaczego TOM BUD?
            </h2>
            <div className="w-24 h-1 bg-[#f5c400] mt-2"></div>
            <p className="text-gray-400 font-sans font-light mt-3">
              Budujemy naszą markę na zaufaniu, solidności i najwyższych standardach wykonania robót ziemnych.
            </p>
          </div>

          {/* Horizontal Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Tile 1 */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-[#f5c400]/40 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 self-start">🚜</div>
              <div>
                <h3 className="font-display font-bold text-lg text-white mb-2">Profesjonalny sprzęt</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  Nowoczesna minikoparka 2,7T o optymalnych parametrach do precyzyjnych robót.
                </p>
              </div>
            </div>

            {/* Tile 2 */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-[#f5c400]/40 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 self-start">⚙️</div>
              <div>
                <h3 className="font-display font-bold text-lg text-white mb-2">Dokładność i precyzja</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  Chirurgiczne wykonanie wykopów i niwelacji zgodnie z dostarczonym projektem budowlanym.
                </p>
              </div>
            </div>

            {/* Tile 3 */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-[#f5c400]/40 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 self-start">🏗️</div>
              <div>
                <h3 className="font-display font-bold text-lg text-white mb-2">Kompleksowe usługi</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  Od drenażu, poprzez instalację zbiorników na deszczówkę, aż po stabilizację dróg.
                </p>
              </div>
            </div>

            {/* Tile 4 */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-[#f5c400]/40 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 self-start">⏱️</div>
              <div>
                <h3 className="font-display font-bold text-lg text-white mb-2">Terminowość</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  Szanujemy czas naszych zleceniodawców. Prace kończymy zawsze we wskazanym terminie.
                </p>
              </div>
            </div>

            {/* Tile 5 */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-[#f5c400]/40 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between md:col-span-2 lg:col-span-1">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 self-start">🤝</div>
              <div>
                <h3 className="font-display font-bold text-lg text-white mb-2">Indywidualne podejście</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  Każdy projekt traktujemy priorytetowo. Dopasowujemy warunki pracy do Twoich oczekiwań.
                </p>
              </div>
            </div>

          </div>

          {/* Certifications or trust badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16 border-t border-zinc-800 pt-12">
            <div className="flex items-center gap-3 text-gray-500 font-mono text-xs uppercase tracking-widest">
              <CheckCircle size={16} className="text-[#f5c400]" />
              <span>Zadowoleni Klienci</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500 font-mono text-xs uppercase tracking-widest">
              <CheckCircle size={16} className="text-[#f5c400]" />
              <span>Ubezpieczenie OC</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500 font-mono text-xs uppercase tracking-widest">
              <CheckCircle size={16} className="text-[#f5c400]" />
              <span>Gwarancja Jakości</span>
            </div>
          </div>

        </div>
      </section>


      {/* CTA SECTION - DUŻY ŻÓŁTY PANEL */}
      <section className="bg-[#f5c400] text-black py-16 relative overflow-hidden">
        {/* Subtle dark pattern indicator */}
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#000000_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center relative z-10 flex flex-col items-center gap-6">
          <div className="w-12 h-1 bg-black mb-2"></div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight max-w-3xl leading-tight">
            Potrzebujesz wykopu, przygotowania działki lub prac ziemnych?
          </h2>
          <p className="text-black/80 text-lg sm:text-xl font-medium max-w-xl font-sans italic">
            "Skontaktuj się z nami i zapytaj o wycenę."
          </p>
          <div className="mt-4">
            <a 
              href="tel:515286822" 
              className="inline-flex items-center gap-3 bg-black text-[#f5c400] font-display font-black text-xl sm:text-2xl py-4 px-10 rounded-xl hover:bg-white hover:text-black transition-all duration-300 shadow-xl hover:scale-105"
              id="cta-call-btn"
            >
              <Phone size={24} className="fill-[#f5c400] group-hover:fill-black" />
              <span>515 286 822</span>
            </a>
          </div>
          <p className="text-black/60 font-mono text-xs tracking-wider uppercase font-semibold">
            Szybka odpowiedź i fachowe doradztwo techniczne gratis
          </p>
        </div>
      </section>


      {/* KONTAKT SECTION (Skontaktuj się z nami) */}
      <section id="kontakt" className="bg-[#0c0c0c] py-24 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            
            <div className="flex flex-col items-center gap-4 mb-12">
              <span className="font-mono text-xs text-[#f5c400] uppercase tracking-widest font-bold">Skontaktuj się</span>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
                Skontaktuj się z nami
              </h2>
              <div className="w-20 h-1 bg-[#f5c400] mt-2"></div>
              <p className="text-gray-400 font-sans font-light text-base leading-relaxed mt-4 max-w-2xl">
                Zadzwoń do nas, wyślij e-mail lub skontaktuj się za pomocą naszych mediów społecznościowych. Odpowiemy na każde zapytanie najszybciej jak to możliwe!
              </p>
            </div>

            {/* Direct interactive numbers and emails */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-12">
              
              {/* Telefon block */}
              <div className="flex flex-col items-center bg-zinc-900/50 border border-zinc-800/80 p-8 rounded-2xl hover:border-[#f5c400]/40 transition-all duration-300 w-full">
                <div className="w-14 h-14 rounded-full bg-zinc-950 border border-zinc-800 text-[#f5c400] flex items-center justify-center mb-4">
                  <Phone size={24} />
                </div>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Telefon:</span>
                <a href="tel:515286822" className="text-2xl sm:text-3xl font-display font-black text-white hover:text-[#f5c400] transition-colors tracking-tight mt-2">
                  515 286 822
                </a>
              </div>

              {/* Email block */}
              <div className="flex flex-col items-center bg-zinc-900/50 border border-zinc-800/80 p-8 rounded-2xl hover:border-[#f5c400]/40 transition-all duration-300 w-full">
                <div className="w-14 h-14 rounded-full bg-zinc-950 border border-zinc-800 text-[#f5c400] flex items-center justify-center mb-4">
                  <Mail size={24} />
                </div>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Email:</span>
                <a href="mailto:tomekczepielkiewicz@gmail.com" className="text-lg sm:text-xl font-display font-bold text-white hover:text-[#f5c400] transition-colors break-all mt-2">
                  tomekczepielkiewicz@gmail.com
                </a>
              </div>

            </div>

            {/* Polish platforms direct buttons: Phone, Email, Facebook, OLX */}
            <div className="flex flex-col items-center gap-4 w-full">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Nasze oficjalne kanały:</span>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl">
                
                {/* Phone action */}
                <a 
                  href="tel:515286822"
                  className="flex items-center justify-center gap-3 bg-zinc-900 hover:bg-zinc-800 text-white font-sans font-medium py-4 px-6 rounded-xl border border-zinc-800 hover:border-[#f5c400]/40 transition-all text-sm"
                >
                  <Phone size={16} className="text-[#f5c400]" />
                  <span>Telefon</span>
                </a>

                {/* Email action */}
                <a 
                  href="mailto:tomekczepielkiewicz@gmail.com"
                  className="flex items-center justify-center gap-3 bg-zinc-900 hover:bg-zinc-800 text-white font-sans font-medium py-4 px-6 rounded-xl border border-zinc-800 hover:border-[#f5c400]/40 transition-all text-sm"
                >
                  <Mail size={16} className="text-[#f5c400]" />
                  <span>Email</span>
                </a>

                {/* Facebook link */}
                <a 
                  href="https://www.facebook.com/profile.php?id=61554565182401"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-zinc-900 hover:bg-[#1877f2]/20 hover:text-[#1877f2] text-white font-sans font-medium py-4 px-6 rounded-xl border border-zinc-800 hover:border-[#1877f2]/50 transition-all text-sm"
                >
                  <Facebook size={16} className="text-[#1877f2]" />
                  <span>Facebook</span>
                </a>

                {/* OLX link */}
                <a 
                  href="https://www.olx.pl/d/oferta/uslugi-koparka-2-7t-prace-ziemne-minikoparka-koparko-ladowarka-CID4371-IDX3imC.html"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-zinc-900 hover:bg-teal-500/20 hover:text-teal-400 text-white font-sans font-medium py-4 px-6 rounded-xl border border-zinc-800 hover:border-teal-500/50 transition-all text-sm group"
                >
                  <div className="w-4 h-4 bg-[#002f34] text-[#23e5db] rounded-full flex items-center justify-center text-[8px] font-black group-hover:bg-[#23e5db] group-hover:text-[#002f34] transition-colors">
                    O
                  </div>
                  <span>OLX</span>
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-black border-t border-zinc-900 pt-16 pb-28 md:pb-16 text-gray-400 font-sans text-sm relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            
            {/* Branding Column */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#f5c400]">
                  <img 
                    src="https://i.ibb.co/6JscD8M8/469607065-122179070072152172-1636234746867101575-n.jpg" 
                    alt="TOM BUD Logo" 
                    className="object-cover w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-display font-black text-white text-xl tracking-wider">
                  TOM BUD
                </span>
              </div>
              <p className="font-display font-bold text-[#f5c400] text-sm tracking-wider uppercase">
                Usługi koparką 2,7T – Prace ziemne
              </p>
              <p className="text-gray-500 font-light max-w-sm text-xs leading-relaxed">
                Firma budowlana TOM BUD gwarantuje pełen profesjonalizm, precyzyjne realizacje oraz rzetelne doradztwo w kwestiach odwodnień, drenażu i przygotowania gruntu pod inwestycje.
              </p>
            </div>

            {/* Quick links Column */}
            <div className="md:col-span-3 flex flex-col gap-4">
              <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs border-b border-zinc-900 pb-2">Menu nawigacji</h4>
              <ul className="flex flex-col gap-2.5 text-xs">
                <li><a href="#o-firmie" className="hover:text-[#f5c400] transition-colors">O Firmie</a></li>
                <li><a href="#oferta" className="hover:text-[#f5c400] transition-colors">Nasze Usługi</a></li>
                <li><a href="#zalety" className="hover:text-[#f5c400] transition-colors">Dlaczego My</a></li>
                <li><a href="#realizacje" className="hover:text-[#f5c400] transition-colors">Nasze Realizacje</a></li>
                <li><a href="#kontakt" className="hover:text-[#f5c400] transition-colors">Kontakt i Formularz</a></li>
              </ul>
            </div>

            {/* Contact quick details */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs border-b border-zinc-900 pb-2">Dane kontaktowe</h4>
              
              <ul className="flex flex-col gap-3 text-xs">
                <li className="flex items-center gap-2.5">
                  <Phone size={14} className="text-[#f5c400]" />
                  <span>Telefon: <a href="tel:515286822" className="text-white hover:text-[#f5c400] font-medium transition-colors">515 286 822</a></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={14} className="text-[#f5c400]" />
                  <span className="break-all">Email: <a href="mailto:tomekczepielkiewicz@gmail.com" className="text-white hover:text-[#f5c400] font-medium transition-colors">tomekczepielkiewicz@gmail.com</a></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Facebook size={14} className="text-[#f5c400]" />
                  <span>Facebook: <a href="https://www.facebook.com/profile.php?id=61554565182401" target="_blank" rel="noreferrer" className="text-white hover:text-[#f5c400] font-medium transition-colors">TOM BUD Profil</a></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ExternalLink size={14} className="text-[#f5c400]" />
                  <span>OLX: <a href="https://www.olx.pl/d/oferta/uslugi-koparka-2-7t-prace-ziemne-minikoparka-koparko-ladowarka-CID4371-IDX3imC.html" target="_blank" rel="noreferrer" className="text-white hover:text-[#f5c400] font-medium transition-colors">Ogłoszenie OLX</a></span>
                </li>
              </ul>

            </div>

          </div>

          {/* Legal / credits line */}
          <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>© {new Date().getFullYear()} TOM BUD. Wszelkie prawa zastrzeżone.</p>
            <p className="font-mono">Usługi koparką 2,7T • Solidność • Precyzja</p>
          </div>

        </div>
      </footer>


      {/* MOBILE STICKY BOTTOM QUICK-ACTION CONTACTOR BAR (Wymóg: "przyciski kontaktowe na telefonie") */}
      <div className="fixed bottom-0 left-0 w-full z-40 bg-zinc-950/90 backdrop-blur-md border-t border-zinc-800/80 p-3 md:hidden flex items-center justify-around gap-3 shadow-2xl">
        
        {/* Telephone button */}
        <a 
          href="tel:515286822" 
          className="flex-1 flex items-center justify-center gap-2 bg-[#f5c400] text-black font-display font-extrabold py-3 px-2 rounded-xl text-xs active:scale-95 transition-transform shadow-md"
        >
          <Phone size={14} className="fill-black" />
          <span>Zadzwoń</span>
        </a>

        {/* SMS action */}
        <a 
          href="sms:+48515286822?body=Dzien%20dobry%2C%20chcialbym%20zapytac%20o%20uslugi%20koparka%20TOM%20BUD"
          className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 text-white font-display font-bold py-3 px-2 rounded-xl text-xs active:scale-95 transition-transform border border-zinc-800"
        >
          <MessageSquare size={14} className="text-[#f5c400]" />
          <span>Napisz SMS</span>
        </a>

        {/* Email action */}
        <a 
          href="mailto:tomekczepielkiewicz@gmail.com" 
          className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 text-white font-display font-bold py-3 px-2 rounded-xl text-xs active:scale-95 transition-transform border border-zinc-800"
        >
          <Mail size={14} className="text-[#f5c400]" />
          <span>Wyślij Email</span>
        </a>

      </div>


      {/* INTERACTIVE FULL SCREEN LIGHTBOX MODAL GALLERY VIEWER */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-6"
          >
            {/* Lightbox Header info */}
            <div className="flex justify-between items-center text-white z-10 w-full max-w-5xl mx-auto py-2">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] text-[#f5c400] font-mono uppercase tracking-wider">Realizacja TOM BUD</span>
                <span className="font-display font-bold text-sm sm:text-base md:text-lg line-clamp-1 max-w-xs sm:max-w-md md:max-w-2xl">
                  {lightboxTitle}
                </span>
              </div>
              
              <button 
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-[#f5c400] hover:text-black transition-colors duration-200 flex items-center justify-center cursor-pointer"
                aria-label="Zamknij"
              >
                <X size={20} />
              </button>
            </div>

            {/* Lightbox Main Image & Side Navigators */}
            <div className="relative flex-1 flex items-center justify-center max-w-5xl w-full mx-auto my-4">
              
              {/* Image box */}
              <div 
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[70vh] sm:max-h-[75vh] w-full flex items-center justify-center rounded-2xl overflow-hidden"
              >
                <motion.img 
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  src={lightboxImages[lightboxIndex]} 
                  alt={`${lightboxTitle} - Widok powiększony`}
                  className="max-h-[70vh] sm:max-h-[75vh] max-w-full object-contain shadow-2xl rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Prev Button */}
              <button 
                onClick={handlePrevImage}
                className="absolute left-2 sm:-left-6 w-12 h-12 rounded-full bg-zinc-900/80 hover:bg-[#f5c400] hover:text-black text-white transition-all flex items-center justify-center shadow-lg cursor-pointer"
                aria-label="Poprzednie"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next Button */}
              <button 
                onClick={handleNextImage}
                className="absolute right-2 sm:-right-6 w-12 h-12 rounded-full bg-zinc-900/80 hover:bg-[#f5c400] hover:text-black text-white transition-all flex items-center justify-center shadow-lg cursor-pointer"
                aria-label="Następne"
              >
                <ChevronRight size={24} />
              </button>

            </div>

            {/* Lightbox footer counter and preview thumbs bar */}
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-4 z-10 py-2 pb-6">
              
              <div className="text-xs text-gray-400 font-mono">
                Zdjęcie <span className="text-[#f5c400] font-bold">{lightboxIndex + 1}</span> z <span className="text-white">{lightboxImages.length}</span>
              </div>

              {/* Inline Thumbnails index indicator */}
              <div className="flex gap-2 max-w-full overflow-x-auto py-1 px-2 no-scrollbar">
                {lightboxImages.map((thumbUrl, idx) => (
                  <div 
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex(idx);
                    }}
                    className={`w-10 h-10 rounded-md overflow-hidden shrink-0 cursor-pointer border transition-all duration-200 ${
                      idx === lightboxIndex 
                        ? "border-[#f5c400] ring-1 ring-[#f5c400] opacity-100 scale-105" 
                        : "border-transparent opacity-40 hover:opacity-80"
                    }`}
                  >
                    <img 
                      src={thumbUrl} 
                      alt="Miniaturka" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
