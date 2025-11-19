import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import { Video } from '../types';

interface VideoCarouselProps {
  videos: Video[];
  onSelectVideo: (video: Video) => void;
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos, onSelectVideo }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 320; // Approximate width of a card + gap
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-12 mt-8 group pb-8">
      {/* Left Button */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 text-white hover:bg-white/20 rounded-full transition-all opacity-70 hover:opacity-100"
        aria-label="Scroll Left"
      >
        <ChevronLeft size={48} strokeWidth={2.5} />
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto no-scrollbar py-4 px-2 snap-x snap-mandatory"
      >
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => onSelectVideo(video)}
            className="relative flex-none w-72 md:w-80 aspect-video bg-black/40 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group/card border-2 border-transparent hover:border-white/50 snap-center"
          >
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-full h-full object-cover opacity-80 group-hover/card:opacity-100 transition-opacity"
            />
            
            {/* Play Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
              <PlayCircle className="text-white w-12 h-12" />
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
              <p className="text-white text-sm font-semibold line-clamp-1 drop-shadow-md">
                {video.title}
              </p>
            </div>
            
            {/* Selection indicator bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-lightRed to-transparent opacity-0 group-hover/card:opacity-100"></div>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 text-white hover:bg-white/20 rounded-full transition-all opacity-70 hover:opacity-100"
        aria-label="Scroll Right"
      >
        <ChevronRight size={48} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default VideoCarousel;