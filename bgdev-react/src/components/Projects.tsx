import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Eye,
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
  ChevronRight,
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
  liveUrl: string;
  features: string[];
  badge?: ProjectBadge;
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
    { id: 'mobile', label: 'Mobile app' },
    { id: 'aiPowered', label: 'AI powered' },
    { id: 'productivity', label: 'Web' },
  ];

  const AI_POWERED_IDS = new Set<number>([1, 2, 5, 6]);

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: 'BGFocus',
      description: 'AI-powered productivity management platform. Focus sessions, task management, and an AI assistant.',
      image: '/bdevprot.jpg',
      logo: '/bgfocus11.png',
      videoUrl: '/videos/BGFocus1.mp4',
      category: 'mobile',
      technologies: ['React Native', 'TypeScript', 'ChatGLM API', 'Firebase', 'Expo'],
      liveUrl: 'https://www.linkedin.com/posts/bgdev_bgfocus-bgdevofficial-productivity-activity-7378494330514206720-_ZfK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADqF_l8B1tSMmcre7IshTRtCc2J0A1qujwM',
      features: ['AI chat assistant', 'Focus sessions', 'Real-time analytics', 'Cross-platform'],
    },
    {
      id: 2,
      title: 'BGResume',
      description: 'GPT-4 powered CV and proposal generator, built for ATS optimization and career development.',
      image: '/bdevprot.jpg',
      logo: '/bgresum.png',
      videoUrl: '/videos/BGResume.mp4',
      category: 'ai',
      technologies: ['React Native', 'GPT-4 API', 'Firebase', 'TypeScript'],
      liveUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7372560507460943872',
      features: ['GPT-4 integration', 'ATS optimization', 'Professional templates', 'Voice input'],
    },
    {
      id: 3,
      title: 'BGDev Website',
      description: 'Our own corporate site, built with React, TypeScript, and Tailwind CSS.',
      image: '/bdevprot.jpg',
      logo: '/logo.png',
      images: ['/bdevprot.jpg', '/bgdevwb1.png', '/bgdevwb3.jpg'],
      videoUrl: null,
      category: 'web',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://www.bgdev.dev',
      features: ['Responsive design', 'Fast, minimal UI', 'Smooth motion', 'SEO optimized'],
    },
    {
      id: 4,
      title: 'Asnates JSK',
      description: 'Corporate website for Asnates JSK with a clean, professional layout and a modern UI.',
      image: '/mainana.png',
      logo: '/mainana.png',
      images: ['/mainana.png', '/asnatesikk1.png', '/asnatesikk2.png', '/asnatesikk3.png'],
      videoUrl: null,
      category: 'web',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://asnatesjsk.lv/',
      features: ['Responsive design', 'Modern UI', 'Fast performance', 'SEO optimized'],
    },
    {
      id: 5,
      title: 'Convertonix',
      description: 'AI-powered file converter supporting 100+ formats with privacy-first, browser-based conversion.',
      image: '/convert1.png',
      logo: '/convert1.png',
      images: ['/convert1.png', '/convert2.png', '/convert3.png', '/convert4.png'],
      videoUrl: null,
      category: 'web',
      technologies: ['React', 'TypeScript', 'AI integration', 'Browser-based processing'],
      liveUrl: 'https://convertonix.com/',
      features: ['100+ file formats', 'Smart processing', 'Privacy-first', 'Browser-based'],
    },
    {
      id: 6,
      title: 'Flowwaz',
      description: 'Corporate web presence for Flowwaz with a clear structure, responsive layout, and brand-forward design.',
      image: '/flowwazicos.png',
      logo: 'https://www.google.com/s2/favicons?domain=flowwaz.com&sz=128',
      videoUrl: null,
      category: 'web',
      technologies: ['React', 'Responsive UI', 'Performance', 'SEO'],
      liveUrl: 'https://flowwaz.com/',
      features: ['Corporate layout', 'Responsive design', 'Fast load', 'Brand-focused'],
      badge: 'new',
    },
    {
      id: 7,
      title: 'Inspirationights',
      description: 'Editorial-style website with modern typography, gallery-friendly sections, and smooth browsing.',
      image: '/inspiration2.png',
      logo: 'https://www.google.com/s2/favicons?domain=inspirationights.com&sz=128',
      videoUrl: null,
      category: 'web',
      technologies: ['React', 'TypeScript', 'Animation', 'SEO'],
      liveUrl: 'https://inspirationights.com/',
      features: ['Editorial layout', 'Modern UI', 'Mobile-first', 'Content-ready'],
      badge: 'hot',
    },
    {
      id: 8,
      title: 'Umay Kuyumculuk',
      description: 'Jewelry sector website with trust-led visuals, product-focused sections, and a professional customer journey.',
      image: '/umayi.png',
      logo: 'https://www.google.com/s2/favicons?domain=umaykuyumculuk.org&sz=128',
      videoUrl: null,
      category: 'web',
      technologies: ['React', 'Corporate site', 'Accessibility', 'SEO'],
      liveUrl: 'https://umaykuyumculuk.org/',
      features: ['Brand trust', 'Product showcase', 'Bilingual-ready', 'Contact flows'],
      badge: 'new',
    },
  ];

  const getModalGallery = (project: ProjectItem | undefined): string[] | null => {
    if (!project) return null;
    if (project.images?.length) return project.images;
    if (project.galleryImages?.length) return project.galleryImages;
    return null;
  };

  const filteredProjects = projects.filter((project) => {
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

  const toggleMute = (projectId: number) => {
    const video = videoRefs.current[projectId];
    if (!video) return;

    video.muted = !video.muted;
    if (video.muted) {
      setMutedVideos((prev) => new Set(prev).add(projectId));
    } else {
      setMutedVideos((prev) => {
        const newSet = new Set(prev);
        newSet.delete(projectId);
        return newSet;
      });
    }
  };

  const openVideoModal = (projectId: number) => {
    setModalVideo(projectId);
    Object.values(videoRefs.current).forEach((v) => {
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

  const nextImage = (projectId: number) => {
    const project = projects.find((p) => p.id === projectId);
    const gallery = project?.images?.length ? project.images : project?.galleryImages;
    if (gallery?.length) {
      const currentIndex = currentImageIndex[projectId] || 0;
      const nextIndex = (currentIndex + 1) % gallery.length;
      setCurrentImageIndex((prev) => ({ ...prev, [projectId]: nextIndex }));
    }
  };

  const prevImage = (projectId: number) => {
    const project = projects.find((p) => p.id === projectId);
    const gallery = project?.images?.length ? project.images : project?.galleryImages;
    if (gallery?.length) {
      const currentIndex = currentImageIndex[projectId] || 0;
      const prevIndex = currentIndex === 0 ? gallery.length - 1 : currentIndex - 1;
      setCurrentImageIndex((prev) => ({ ...prev, [projectId]: prevIndex }));
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web':
        return Globe;
      case 'mobile':
        return Smartphone;
      case 'ecommerce':
        return ShoppingCart;
      default:
        return Code2;
    }
  };

  const modalProject = modalVideo != null ? projects.find((p) => p.id === modalVideo) : undefined;
  const modalGallery = getModalGallery(modalProject);

  return (
    <section id="projects" className="section-padding bg-ink-950 border-t border-white/10">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <p className="label text-brand-300/80 mb-4">Work</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 text-balance">
            Selected <span className="text-gradient-brand">projects</span>
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
            From corporate web experiences to mobile apps and AI-powered tools, we deliver
            reliable, modern solutions aligned with the business behind them.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-brand-gradient text-white shadow-brand-glow'
                  : 'border border-white/15 text-neutral-400 hover:text-white hover:border-brand-300/30'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => {
              const CategoryIcon = getCategoryIcon(project.category);

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="group panel panel-hover overflow-hidden flex flex-col"
                >
                  <div
                    className="relative h-48 overflow-hidden cursor-pointer bg-ink-900"
                    onClick={() => openVideoModal(project.id)}
                  >
                    {project.videoUrl ? (
                      <video
                        ref={(el) => {
                          videoRefs.current[project.id] = el;
                        }}
                        className="w-full h-full object-cover"
                        muted={mutedVideos.has(project.id)}
                        loop
                        preload="metadata"
                        poster={project.image}
                        onError={(e) => {
                          const target = e.target as HTMLVideoElement;
                          target.style.display = 'none';
                        }}
                      >
                        <source src={project.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : project.images ? (
                      <div className="relative w-full h-full">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentImageIndex[project.id] || 0}
                            src={project.images[currentImageIndex[project.id] || 0]}
                            alt={`${project.title} image ${(currentImageIndex[project.id] || 0) + 1}`}
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                          />
                        </AnimatePresence>

                        {project.images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                prevImage(project.id);
                              }}
                              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 rounded-full transition-colors"
                            >
                              <ChevronLeft className="w-4 h-4 text-white" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                nextImage(project.id);
                              }}
                              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 rounded-full transition-colors"
                            >
                              <ChevronRight className="w-4 h-4 text-white" />
                            </button>
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                              {project.images.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex((prev) => ({ ...prev, [project.id]: index }));
                                  }}
                                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                    (currentImageIndex[project.id] || 0) === index ? 'bg-white' : 'bg-white/40'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    ) : (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    )}

                    {project.badge && (
                      <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-brand-gradient text-white">
                        {project.badge === 'hot' ? 'Hot' : 'New'}
                      </div>
                    )}

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                      {project.videoUrl ? (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openVideoModal(project.id);
                            }}
                            className="p-3.5 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                          >
                            {playingVideo === project.id ? (
                              <Pause className="w-5 h-5 text-white" />
                            ) : (
                              <Play className="w-5 h-5 text-white" />
                            )}
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMute(project.id);
                            }}
                            className="p-3 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                          >
                            {mutedVideos.has(project.id) ? (
                              <VolumeX className="w-4 h-4 text-white" />
                            ) : (
                              <Volume2 className="w-4 h-4 text-white" />
                            )}
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openVideoModal(project.id);
                            }}
                            className="p-3 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                          >
                            <Maximize2 className="w-4 h-4 text-white" />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openVideoModal(project.id);
                          }}
                          className="p-3.5 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                        >
                          <Eye className="w-5 h-5 text-white" />
                        </button>
                      )}

                      <a
                        href={project.liveUrl}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </a>
                    </div>

                    {project.videoUrl && (
                      <div className="absolute top-3 left-3 bg-black/60 border border-white/20 text-white px-2 py-1 rounded-full text-[10px] font-medium flex items-center gap-1">
                        <Play className="w-3 h-3" />
                        VIDEO
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                      <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center">
                        <CategoryIcon className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <p className="text-sm text-neutral-400 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 border border-white/10 text-neutral-400 text-[11px] font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => openVideoModal(project.id)}
                      className="mt-auto w-full bg-brand-gradient text-white font-semibold py-2.5 px-4 rounded-full text-sm text-center transition-transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      {project.videoUrl ? 'Watch' : 'View'}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="panel p-8 sm:p-12 text-center mt-16">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Let's build your project
          </h3>
          <p className="text-neutral-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Bring an AI-powered app or web platform to life with React Native, Firebase,
            and modern AI integrations.
          </p>
          <a href="#contact" className="btn-primary group">
            Start a project
            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {modalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm px-4"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl bg-ink-900 border border-white/10 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-semibold text-white">{modalProject?.title}</h3>
                  <p className="text-neutral-500 text-sm mt-1">{modalProject?.description}</p>
                </div>
                <button
                  onClick={closeVideoModal}
                  className="p-2 border border-white/15 hover:border-white/30 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              <div className="relative bg-black">
                {modalProject?.videoUrl ? (
                  <video ref={modalVideoRef} className="w-full h-auto max-h-[70vh]" controls autoPlay loop>
                    <source src={modalProject.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : modalGallery ? (
                  <div className="relative w-full h-[70vh] bg-ink-900">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex[modalVideo] || 0}
                        src={modalGallery[currentImageIndex[modalVideo] || 0]}
                        alt={`${modalProject?.title} image ${(currentImageIndex[modalVideo] || 0) + 1}`}
                        className="w-full h-full object-contain"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    </AnimatePresence>

                    {modalGallery.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(modalVideo)}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/70 hover:bg-black/90 rounded-full transition-colors"
                        >
                          <ChevronLeft className="w-5 h-5 text-white" />
                        </button>
                        <button
                          onClick={() => nextImage(modalVideo)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/70 hover:bg-black/90 rounded-full transition-colors"
                        >
                          <ChevronRight className="w-5 h-5 text-white" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
                          {modalGallery.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex((prev) => ({ ...prev, [modalVideo]: index }))}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                (currentImageIndex[modalVideo] || 0) === index ? 'bg-white' : 'bg-white/40'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="w-full h-[70vh] flex items-center justify-center bg-ink-900">
                    <img src={modalProject?.image} alt={modalProject?.title} className="max-w-full max-h-full object-contain" />
                  </div>
                )}
              </div>

              <div className="p-6 border-t border-white/10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {modalProject?.technologies?.map((tech) => (
                    <span key={tech} className="px-3 py-1 border border-white/10 text-neutral-400 text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={modalProject?.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-brand-gradient text-white font-semibold py-3 px-6 rounded-full text-center transition-transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit project
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
