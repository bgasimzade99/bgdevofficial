import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Filter,
  Globe,
  ShoppingCart,
  Smartphone,
  Code2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

type ProjectBadge = 'hot' | 'new';

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  logo?: string;
  images?: string[];
  videoUrl: string | null;
  category: string;
  technologies: string[];
  gradient: string;
  liveUrl: string;
  githubUrl: string;
  delay: number;
  features: string[];
  badge?: ProjectBadge;
  /** Shown in modal / view only — card cover stays `image` */
  galleryImages?: string[];
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [mutedVideos, setMutedVideos] = useState<Set<number>>(new Set());
  const [modalVideo, setModalVideo] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'mobile', label: 'Mobile App' },
    { id: 'aiPowered', label: 'AI Powered' },
    { id: 'productivity', label: 'Productivity' }
  ];

  /** BGFocus, BGResume, Convertonix, Flowwaz */
  const AI_POWERED_IDS = new Set<number>([1, 2, 5, 6]);

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "BGFocus",
      description: "AI-powered productivity management platform. Professional focus with Pomodoro timer, task management, and AI assistant.",
      image: "/bdevprot.jpg", // Using existing image as poster
      logo: "/bgfocus11.png", // Custom logo for video preview
      videoUrl: "/videos/BGFocus1.mp4", // Using existing video file
      category: "mobile",
      technologies: ["React Native", "TypeScript", "ChatGLM API", "Firebase", "Expo"],
      gradient: "from-blue-500 to-cyan-500",
      liveUrl: "https://www.linkedin.com/posts/bgdev_bgfocus-bgdevofficial-productivity-activity-7378494330514206720-_ZfK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADqF_l8B1tSMmcre7IshTRtCc2J0A1qujwM",
      githubUrl: "https://github.com/bgasimzade99",
      delay: 0,
      features: ["AI Chat Assistant", "Pomodoro Timer", "Real-time Analytics", "Cross-platform"]
    },
    {
      id: 2,
      title: "BGResume",
      description: "GPT-4 powered professional CV and proposal generator. AI-powered solutions for ATS optimization and career development.",
      image: "/bdevprot.jpg", // Using existing image as poster
      logo: "/bgresum.png", // Custom logo for video preview
      videoUrl: "/videos/BGResume.mp4", // Using existing video file
      category: "ai",
      technologies: ["React Native", "GPT-4 API", "Firebase", "TypeScript", "Glassmorphism UI"],
      gradient: "from-purple-500 to-pink-500",
      liveUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7372560507460943872",
      githubUrl: "https://github.com/bgasimzade99",
      delay: 0.1,
      features: ["GPT-4 Integration", "ATS Optimization", "Professional Templates", "Voice Input"]
    },
    {
      id: 3,
      title: "BGDev Website",
      description: "Modern and animated corporate website. Glassmorphism design with Tailwind CSS and Framer Motion.",
      image: "/bdevprot.jpg", // First image
      logo: "/logo.png", // Custom logo for BGDev Website
      images: ["/bdevprot.jpg", "/bgdevwb1.png", "/bgdevwb3.jpg"], // Updated with bgdevwb3.jpg
      videoUrl: null, // No video, only images
      category: "web",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      gradient: "from-green-500 to-emerald-500",
      liveUrl: "https://www.bgdev.dev",
      githubUrl: "https://github.com/bgasimzade99",
      delay: 0.2,
      features: ["Responsive Design", "Glassmorphism", "Smooth Animations", "SEO Optimized"]
    },
    {
      id: 4,
      title: "Asnates JSK",
      description: "Modern corporate website for Asnates JSK. Professional design with responsive layout and modern UI/UX.",
      image: "/mainana.png",
      logo: "/mainana.png",
      images: ["/mainana.png", "/asnatesikk1.png", "/asnatesikk2.png", "/asnatesikk3.png"],
      videoUrl: null,
      category: "web",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      gradient: "from-orange-500 to-red-500",
      liveUrl: "https://asnatesjsk.lv/",
      githubUrl: "https://github.com/bgasimzade99",
      delay: 0.3,
      features: ["Responsive Design", "Modern UI/UX", "Fast Performance", "SEO Optimized"]
    },
    {
      id: 5,
      title: "Convertonix",
      description: "AI-powered file converter supporting 100+ formats. Privacy-first browser-based conversion with instant results.",
      image: "/favicon-192.svg",
      logo: "/favicon-192.svg",
      images: ["/favicon-192.svg", "/convert1.png", "/convert2.png", "/convert3.png", "/convert4.png"],
      videoUrl: null,
      category: "web",
      technologies: ["React", "TypeScript", "AI Integration", "Browser-based Processing"],
      gradient: "from-indigo-500 to-purple-500",
      liveUrl: "https://convertonix.com/",
      githubUrl: "https://github.com/bgasimzade99",
      delay: 0.4,
      features: ["100+ File Formats", "Smart processing", "Privacy-First", "Browser-based"]
    },
    {
      id: 6,
      title: "Flowwaz",
      description:
        "Corporate web presence for Flowwaz—clear structure, responsive layout, and a polished brand-forward experience.",
      image:
        "https://dummyimage.com/800x500/0f172a/38bdf8.png&text=Flowwaz",
      galleryImages: ["/flowwazicos.png"],
      logo: "https://www.google.com/s2/favicons?domain=flowwaz.com&sz=128",
      videoUrl: null,
      category: "web",
      technologies: ["React", "Responsive UI", "Performance", "SEO"],
      gradient: "from-sky-500 to-blue-700",
      liveUrl: "https://flowwaz.com/",
      githubUrl: "https://github.com/bgasimzade99",
      delay: 0.45,
      features: ["Corporate layout", "Responsive design", "Fast load", "Brand-focused"],
      badge: "new"
    },
    {
      id: 7,
      title: "Inspirationights",
      description:
        "Editorial-style website for Inspirationights—modern typography, gallery-friendly sections, and smooth browsing on all devices.",
      image:
        "https://dummyimage.com/800x500/1e1b4b/c4b5fd.png&text=Inspirationights",
      galleryImages: ["/inpspiration2.png"],
      logo: "https://www.google.com/s2/favicons?domain=inspirationights.com&sz=128",
      videoUrl: null,
      category: "web",
      technologies: ["React", "TypeScript", "Animation", "SEO"],
      gradient: "from-violet-500 to-fuchsia-600",
      liveUrl: "https://inspirationights.com/",
      githubUrl: "https://github.com/bgasimzade99",
      delay: 0.5,
      features: ["Editorial layout", "Modern UI", "Mobile-first", "Content-ready"],
      badge: "hot"
    },
    {
      id: 8,
      title: "Umay Kuyumculuk",
      description:
        "Jewelry sector website for Umay Kuyumculuk—trust-led visuals, product-focused sections, and a professional customer journey.",
      image:
        "https://dummyimage.com/800x500/292524/d4af37.png&text=Umay+Kuyumculuk",
      galleryImages: ["/umayi.png"],
      logo: "https://www.google.com/s2/favicons?domain=umaykuyumculuk.org&sz=128",
      videoUrl: null,
      category: "web",
      technologies: ["React", "Corporate site", "Accessibility", "SEO"],
      gradient: "from-amber-600 to-yellow-800",
      liveUrl: "https://umaykuyumculuk.org/",
      githubUrl: "https://github.com/bgasimzade99",
      delay: 0.55,
      features: ["Brand trust", "Product showcase", "Bilingual-ready", "Contact flows"],
      badge: "new"
    }
  ];

  const getModalGallery = (project: ProjectItem | undefined): string[] | null => {
    if (!project) return null;
    if (project.images?.length) return project.images;
    if (project.galleryImages?.length) return project.galleryImages;
    return null;
  };

  const filteredProjects = projects.filter(project => {
    // All: hide BGFocus & BGDev Website to reduce clutter (still available under other filters)
    if (activeFilter === 'all') {
      return project.id !== 1 && project.id !== 3;
    }

    if (activeFilter === 'mobile') {
      return project.category === 'mobile';
    }

    if (activeFilter === 'aiPowered') {
      return AI_POWERED_IDS.has(project.id);
    }

    if (activeFilter === 'productivity') {
      return project.category === 'web';
    }

    return false;
  });

  // Video control functions (unused but kept for future use)
  // const toggleVideo = (projectId: number) => {
  //   const video = videoRefs.current[projectId];
  //   if (!video) return;

  //   if (playingVideo === projectId) {
  //     video.pause();
  //     setPlayingVideo(null);
  //   } else {
  //     // Pause all other videos
  //     Object.values(videoRefs.current).forEach(v => {
  //       if (v && !v.paused) v.pause();
  //     });
      
  //     video.play();
  //     setPlayingVideo(projectId);
  //   }
  // };

  const toggleMute = (projectId: number) => {
    const video = videoRefs.current[projectId];
    if (!video) return;

    video.muted = !video.muted;
    if (video.muted) {
      setMutedVideos(prev => new Set(prev).add(projectId));
    } else {
      setMutedVideos(prev => {
        const newSet = new Set(prev);
        newSet.delete(projectId);
        return newSet;
      });
    }
  };

  // Modal functions
  const openVideoModal = (projectId: number) => {
    setModalVideo(projectId);
    // Pause all other videos
    Object.values(videoRefs.current).forEach(v => {
      if (v && !v.paused) v.pause();
    });
    setPlayingVideo(null);
  };

  const closeVideoModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setModalVideo(null);
  };

  // Image gallery functions
  const nextImage = (projectId: number) => {
    const project = projects.find(p => p.id === projectId);
    const gallery =
      project?.images?.length ? project.images : project?.galleryImages;
    if (gallery?.length) {
      const currentIndex = currentImageIndex[projectId] || 0;
      const nextIndex = (currentIndex + 1) % gallery.length;
      setCurrentImageIndex(prev => ({ ...prev, [projectId]: nextIndex }));
    }
  };

  const prevImage = (projectId: number) => {
    const project = projects.find(p => p.id === projectId);
    const gallery =
      project?.images?.length ? project.images : project?.galleryImages;
    if (gallery?.length) {
      const currentIndex = currentImageIndex[projectId] || 0;
      const prevIndex =
        currentIndex === 0 ? gallery.length - 1 : currentIndex - 1;
      setCurrentImageIndex(prev => ({ ...prev, [projectId]: prevIndex }));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return Globe;
      case 'mobile': return Smartphone;
      case 'ecommerce': return ShoppingCart;
      default: return Code2;
    }
  };

  const modalProject =
    modalVideo != null ? projects.find((p) => p.id === modalVideo) : undefined;
  const modalGallery = getModalGallery(modalProject);

  return (
    <section id="projects" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-primary-50 border border-primary-200 rounded-full text-sm font-medium text-primary-700 mb-6"
          >
            <Code2 className="w-4 h-4 mr-2" />
            Our Projects
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 px-4 sm:px-0"
          >
            Our
            <br />
            <span className="gradient-text">Portfolio</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            From corporate web experiences to mobile apps and intelligent tools, we deliver
            reliable, modern solutions aligned with your business goals.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/50 backdrop-blur-sm border border-white/30 text-gray-700 hover:bg-white/70'
              }`}
            >
              <Filter className="w-4 h-4 mr-2 inline" />
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => {
              const CategoryIcon = getCategoryIcon(project.category);
              
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className="glass-card rounded-3xl overflow-hidden h-full hover:shadow-2xl transition-all duration-500 border border-white/30 hover:border-white/50">
                    {/* Project Video */}
                    <div 
                      className="relative h-48 overflow-hidden cursor-pointer"
                      onClick={() => openVideoModal(project.id)}
                    >
                      {/* Video Element */}
                      {project.videoUrl ? (
                        <video
                          ref={(el) => { videoRefs.current[project.id] = el; }}
                          className="w-full h-full object-cover"
                          muted={mutedVideos.has(project.id)}
                          loop
                          preload="metadata"
                          poster={project.image}
                          onError={(e) => {
                            console.log(`Video failed to load: ${project.videoUrl}`);
                            // Hide video controls if video fails to load
                            const target = e.target as HTMLVideoElement;
                            target.style.display = 'none';
                          }}
                        >
                          <source src={project.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : project.images ? (
                        /* Image Gallery */
                        <div className="relative w-full h-full">
                          <AnimatePresence mode="wait">
                            <motion.img
                              key={currentImageIndex[project.id] || 0}
                              src={project.images[currentImageIndex[project.id] || 0]}
                              alt={`${project.title} - Image ${(currentImageIndex[project.id] || 0) + 1}`}
                              className="w-full h-full object-cover"
                              initial={{ opacity: 0, x: 50 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -50 }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                          </AnimatePresence>
                          
                          {/* Image Navigation */}
                          {project.images.length > 1 && (
                            <>
                              <motion.button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  prevImage(project.id);
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                              >
                                <ChevronLeft className="w-5 h-5 text-white" />
                              </motion.button>
                              
                              <motion.button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  nextImage(project.id);
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                              >
                                <ChevronRight className="w-5 h-5 text-white" />
                              </motion.button>
                              
                              {/* Image Indicators */}
                              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {project.images.map((_, index) => (
                                  <motion.button
                                    key={index}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setCurrentImageIndex(prev => ({ ...prev, [project.id]: index }));
                                    }}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                      (currentImageIndex[project.id] || 0) === index
                                        ? 'bg-white' 
                                        : 'bg-white/50 hover:bg-white/70'
                                    }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                  />
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                      
                      {/* Fallback Image for when video fails to load */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <div className="text-center text-white">
                          {project.logo ? (
                            <img 
                              src={project.logo} 
                              alt={`${project.title} Logo`}
                              className="w-24 h-24 mx-auto mb-4 opacity-90 object-contain rounded-2xl"
                            />
                          ) : (
                            <CategoryIcon className="w-16 h-16 mx-auto mb-4 opacity-60" />
                          )}
                          <p className="text-sm opacity-80">Video Preview</p>
                        </div>
                      </div>
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>

                      {project.badge && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                          className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-lg ring-2 ring-white/30 ${
                            project.badge === 'hot'
                              ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                              : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white'
                          }`}
                        >
                          {project.badge === 'hot' ? 'Hot' : 'New'}
                        </motion.div>
                      )}
                      
                      {/* Video Controls Overlay */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        {project.videoUrl ? (
                          <>
                            {/* Play/Pause Button */}
                            <motion.button
                              onClick={(e) => {
                                e.stopPropagation();
                                openVideoModal(project.id);
                              }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                            >
                              {playingVideo === project.id ? (
                                <Pause className="w-6 h-6 text-white" />
                              ) : (
                                <Play className="w-6 h-6 text-white" />
                              )}
                            </motion.button>
                            
                            {/* Mute/Unmute Button */}
                            <motion.button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleMute(project.id);
                              }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                            >
                              {mutedVideos.has(project.id) ? (
                                <VolumeX className="w-5 h-5 text-white" />
                              ) : (
                                <Volume2 className="w-5 h-5 text-white" />
                              )}
                            </motion.button>
                            
                            {/* Fullscreen Button */}
                            <motion.button
                              onClick={(e) => {
                                e.stopPropagation();
                                openVideoModal(project.id);
                              }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                            >
                              <Maximize2 className="w-5 h-5 text-white" />
                            </motion.button>
                          </>
                        ) : (
                          /* Image-only projects show only view button */
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              openVideoModal(project.id);
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          >
                            <Eye className="w-6 h-6 text-white" />
                          </motion.button>
                        )}
                        
                        {/* External Links */}
                        <motion.a
                          href={project.liveUrl}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </motion.a>
                      </div>
                      
                      {/* Video Indicator */}
                      {project.videoUrl && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 }}
                          className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1"
                        >
                          <Play className="w-3 h-3" />
                          <span>VIDEO</span>
                        </motion.div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {project.title}
                        </h3>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`p-2 bg-gradient-to-r ${project.gradient} rounded-lg`}
                        >
                          <CategoryIcon className="w-4 h-4 text-white" />
                        </motion.div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Video Info — only when a reel exists */}
                      {project.videoUrl && (
                        <div className="mb-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Play className="w-4 h-4 text-primary-600" />
                            <span className="text-sm font-semibold text-gray-700">Mockup Video Available</span>
                          </div>
                          <p className="text-xs text-gray-500 mb-3">
                            Hover over the video to play and explore the project features
                          </p>
                        </div>
                      )}

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Features:</h4>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.features?.map((feature, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              className="px-2 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
                            >
                              {feature}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-3">
                        <motion.button
                          onClick={() => openVideoModal(project.id)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium py-2 px-4 rounded-lg text-center transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                          <Eye className="w-4 h-4" />
                          <span>{project.videoUrl ? 'View Video' : 'View Project'}</span>
                        </motion.button>
                        
                        <motion.a
                          href={project.githubUrl}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-300 flex items-center justify-center"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="glass-card p-12 rounded-3xl max-w-4xl mx-auto"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              Let's Build Your Project
            </motion.h3>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Let's develop your AI-powered mobile app or web project together. 
              Create modern solutions with React Native, Firebase, and AI integrations.
            </motion.p>
            
            <motion.a
              href="#contact"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 inline-flex items-center justify-center group text-lg"
            >
              Start Project
              <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl mx-4 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 bg-gray-800 border-b border-gray-700">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {modalProject?.title}
                  </h3>
                  <p className="text-gray-400 mt-1">
                    {modalProject?.description}
                  </p>
                </div>
                <motion.button
                  onClick={closeVideoModal}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </motion.button>
              </div>

              {/* Video Player */}
              <div className="relative bg-black">
                {modalProject?.videoUrl ? (
                  <video
                    ref={modalVideoRef}
                    className="w-full h-auto max-h-[70vh]"
                    controls
                    autoPlay
                    muted={false}
                    loop
                  >
                    <source src={modalProject.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : modalGallery ? (
                  /* Image / gallery modal (card `images` or modal-only `galleryImages`) */
                  <div className="relative w-full h-[70vh] bg-gray-800">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex[modalVideo] || 0}
                        src={modalGallery[currentImageIndex[modalVideo] || 0]}
                        alt={`${modalProject?.title} - Image ${(currentImageIndex[modalVideo] || 0) + 1}`}
                        className="w-full h-full object-contain"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                    </AnimatePresence>
                    
                    {/* Modal Image Navigation */}
                    {modalGallery.length > 1 && (
                      <>
                        <motion.button
                          onClick={() => prevImage(modalVideo)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/70 hover:bg-black/90 rounded-full transition-colors"
                        >
                          <ChevronLeft className="w-6 h-6 text-white" />
                        </motion.button>
                        
                        <motion.button
                          onClick={() => nextImage(modalVideo)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/70 hover:bg-black/90 rounded-full transition-colors"
                        >
                          <ChevronRight className="w-6 h-6 text-white" />
                        </motion.button>
                        
                        {/* Modal Image Indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                          {modalGallery.map((_, index) => (
                            <motion.button
                              key={index}
                              onClick={() => setCurrentImageIndex(prev => ({ ...prev, [modalVideo]: index }))}
                              className={`w-3 h-3 rounded-full transition-colors ${
                                (currentImageIndex[modalVideo] || 0) === index
                                  ? 'bg-white' 
                                  : 'bg-white/50 hover:bg-white/70'
                              }`}
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="w-full h-[70vh] flex items-center justify-center bg-gray-800">
                    <img
                      src={modalProject?.image}
                      alt={modalProject?.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-gray-800 border-t border-gray-700">
                <div className="flex flex-wrap gap-2 mb-4">
                  {modalProject?.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-500/20 text-primary-400 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={modalProject?.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium py-3 px-6 rounded-lg text-center transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Visit Project</span>
                  </motion.a>
                  <motion.a
                    href={modalProject?.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;