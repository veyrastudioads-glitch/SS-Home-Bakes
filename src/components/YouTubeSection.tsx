import React, { useRef, useState, useEffect } from "react";
import { businessConfig } from "../config/business";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  RotateCcw,
  Sparkles,
  Heart,
  MessageCircle,
} from "lucide-react";
import { InstagramIcon } from "./BrandIcons";
import assets from "../assets";

export const YouTubeSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>("0:00");
  const [duration, setDuration] = useState<string>("0:20");
  const [showControls, setShowControls] = useState<boolean>(true);

  // Auto-play on mount (muted is required by most browsers for autoplay)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, []);

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    const current = video.currentTime;
    const total = video.duration || 20;
    setProgress((current / total) * 100);
    setCurrentTime(formatTime(current));
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    setDuration(formatTime(video.duration));
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * (video.duration || 20);
  };

  const handleRestart = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play();
    setIsPlaying(true);
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const whatsappInquiryUrl = `https://wa.me/${businessConfig.whatsappInternational}?text=${encodeURIComponent(
    "Hi SS Home Bakes, I just watched your 'Behind The Bakes' video! I'd love to enquire about your fresh bakes and order treats."
  )}`;

  return (
    <section id="behind-the-bakes" className="py-20 sm:py-28 bg-gradient-to-b from-cream-50 via-cream-100/70 to-cream-50 relative overflow-hidden border-t border-b border-cocoa-600/10">
      {/* Decorative Ambient Background Blurs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-caramel-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200/90 border border-caramel-400/40 text-xs text-chocolate-900 font-semibold tracking-wider uppercase shadow-warm-xs">
            <Sparkles className="w-3.5 h-3.5 text-caramel-600 animate-pulse" />
            <span>Behind The Scenes • Real Kitchen</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-chocolate-950 tracking-tight">
            Behind The Bakes
          </h2>

          <p className="text-sm sm:text-base text-chocolate-800/80 leading-relaxed font-normal">
            "See the moments behind the treats." Experience the authentic swirl, rich chocolate pour, and patient care poured into every batch.
          </p>
        </div>

        {/* 2-Column Split: Editorial Video Reel Showcase + Kitchen Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Phone / Reel Frame with the Real Video */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
              {/* Outer Golden Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-caramel-400/30 via-amber-500/20 to-chocolate-700/30 rounded-[3rem] blur-2xl -z-10 opacity-75 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Reel Device / Card Container */}
              <div
                ref={containerRef}
                onMouseEnter={() => setShowControls(true)}
                className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden bg-chocolate-950 border-[5px] border-caramel-400/50 shadow-2xl shadow-chocolate-950/40 select-none group"
              >
                {/* HTML5 Native Video Sourced from assest/behind the bakes.mp4 */}
                <video
                  ref={videoRef}
                  src={assets.video}
                  poster={assets.specialBox}
                  playsInline
                  loop
                  muted={isMuted}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onClick={togglePlay}
                  className="w-full h-full object-cover cursor-pointer"
                />

                {/* Subtle Top Gradient for Badges */}
                <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-chocolate-950/80 via-chocolate-950/40 to-transparent pointer-events-none" />

                {/* Top Badge: Kitchen Location Pill */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between text-cream-50 z-20">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-chocolate-900/85 backdrop-blur-md border border-caramel-400/40 text-[11px] font-medium tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Live Bake • Fresh Kitchen</span>
                  </div>

                  {/* Audio Mute/Unmute Quick Pill */}
                  <button
                    onClick={toggleMute}
                    type="button"
                    className="p-2 rounded-full bg-chocolate-900/85 hover:bg-caramel-600/90 text-cream-100 border border-caramel-400/40 transition-all hover:scale-110 shadow-lg cursor-pointer"
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                    title={isMuted ? "Tap to unmute" : "Tap to mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-caramel-300" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-emerald-400" />
                    )}
                  </button>
                </div>

                {/* Large Center Play / Pause Indicator (shows when paused or briefly on click) */}
                {!isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-chocolate-950/45 cursor-pointer z-20 transition-opacity duration-300"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-caramel-500/90 text-chocolate-950 flex items-center justify-center shadow-gold-glow hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 fill-chocolate-950 ml-1" />
                    </div>
                  </div>
                )}

                {/* Unmute Prompt Banner if video is playing muted */}
                {isMuted && isPlaying && (
                  <div
                    onClick={toggleMute}
                    className="absolute top-16 inset-x-6 z-20 text-center cursor-pointer"
                  >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-chocolate-900/90 border border-caramel-400/50 text-[11px] text-caramel-200 shadow-lg hover:bg-chocolate-850 hover:text-cream-50 transition-colors">
                      <VolumeX className="w-3.5 h-3.5 text-caramel-300" />
                      <span>Tap anywhere for sound</span>
                    </span>
                  </div>
                )}

                {/* Bottom Gradient Overlay for Controls */}
                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-chocolate-950/95 via-chocolate-950/60 to-transparent pointer-events-none" />

                {/* Custom Interactive Player Controls Bar */}
                <div
                  className={`absolute bottom-3 inset-x-3 z-30 transition-opacity duration-300 ${
                    showControls ? "opacity-100" : "opacity-90"
                  }`}
                >
                  <div className="p-3 rounded-2xl bg-chocolate-900/85 backdrop-blur-md border border-caramel-400/30 text-cream-50 space-y-2">
                    
                    {/* Scrubber / Progress Bar */}
                    <div
                      onClick={handleSeek}
                      className="w-full h-1.5 bg-chocolate-700/80 rounded-full overflow-hidden cursor-pointer group/bar relative"
                    >
                      <div
                        className="h-full bg-gradient-to-r from-caramel-400 to-amber-300 rounded-full transition-all duration-150 relative"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    {/* Controls Row */}
                    <div className="flex items-center justify-between pt-0.5 text-xs text-cream-100">
                      
                      {/* Left: Play/Pause + Time */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={togglePlay}
                          type="button"
                          className="p-1 rounded-lg hover:bg-chocolate-800 text-caramel-300 hover:text-cream-50 transition-colors cursor-pointer"
                          aria-label={isPlaying ? "Pause" : "Play"}
                        >
                          {isPlaying ? (
                            <Pause className="w-4 h-4 fill-current" />
                          ) : (
                            <Play className="w-4 h-4 fill-current" />
                          )}
                        </button>

                        <button
                          onClick={handleRestart}
                          type="button"
                          className="p-1 rounded-lg hover:bg-chocolate-800 text-cream-200/80 hover:text-cream-50 transition-colors cursor-pointer"
                          aria-label="Replay video"
                          title="Restart from beginning"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>

                        <span className="text-[11px] font-mono text-cream-200/90 pl-1">
                          {currentTime} / {duration}
                        </span>
                      </div>

                      {/* Right: Fullscreen Button */}
                      <button
                        onClick={toggleFullscreen}
                        type="button"
                        className="p-1 rounded-lg hover:bg-chocolate-800 text-cream-200/80 hover:text-cream-50 transition-colors cursor-pointer"
                        aria-label="Toggle Fullscreen"
                        title="Fullscreen"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Editorial Details & Action Cards */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Title & Authentic Storytelling */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-caramel-700 tracking-wider uppercase">
                Handmade Daily • Baked Fresh To Order
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-chocolate-950 leading-snug">
                Made With Wholesome Ingredients & Genuine Passion
              </h3>
              <p className="text-sm sm:text-base text-chocolate-800/85 leading-relaxed font-normal">
                Every dessert featured on our menu begins right here in our home kitchen. We don't use commercial premixes or artificial shortcuts — each batch of brownies, bomboloni, and chocolate delights is crafted by hand, fresh to order.
              </p>
            </div>

            {/* 3 Kitchen Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className="p-4 rounded-2xl bg-cream-50/90 border border-caramel-300/40 shadow-warm-xs space-y-1.5 hover:shadow-warm-sm transition-shadow">
                <div className="w-8 h-8 rounded-full bg-caramel-100 flex items-center justify-center text-caramel-800 mb-2">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-sm text-chocolate-950">
                  Real Cocoa & Butter
                </h4>
                <p className="text-xs text-chocolate-700/80 leading-relaxed">
                  Rich, fudgy indulgence swirled with authentic ingredients.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-cream-50/90 border border-caramel-300/40 shadow-warm-xs space-y-1.5 hover:shadow-warm-sm transition-shadow">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 mb-2">
                  <Heart className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-sm text-chocolate-950">
                  Wheat Flour Option
                </h4>
                <p className="text-xs text-chocolate-700/80 leading-relaxed">
                  Wholesome wheat alternative available for healthier cravings.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-cream-50/90 border border-caramel-300/40 shadow-warm-xs space-y-1.5 hover:shadow-warm-sm transition-shadow">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 mb-2">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-sm text-chocolate-950">
                  Baked Fresh To Order
                </h4>
                <p className="text-xs text-chocolate-700/80 leading-relaxed">
                  Never mass-produced; prepared only upon customer confirmation.
                </p>
              </div>
            </div>

            {/* Quote Pill */}
            <div className="p-4 rounded-2xl bg-chocolate-950 text-cream-50 flex items-center gap-3 border border-caramel-400/30 shadow-warm-sm">
              <span className="text-2xl">✨</span>
              <p className="font-serif italic text-xs sm:text-sm text-cream-100">
                "{businessConfig.motto}" — Prepared with warm love and craftsmanship.
              </p>
            </div>

            {/* Direct Call-To-Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-chocolate-950 hover:bg-caramel-600 text-cream-50 font-medium text-xs sm:text-sm tracking-wide transition-all shadow-warm-sm hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>ORDER FRESH FROM THIS BATCH</span>
              </a>

              <a
                href={businessConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cream-200/90 hover:bg-cream-300/90 border border-caramel-400/50 text-chocolate-950 font-medium text-xs sm:text-sm transition-all hover:scale-[1.02]"
              >
                <InstagramIcon className="w-4 h-4 text-caramel-700" />
                <span>MORE REELS & BAKING SHORTS</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
