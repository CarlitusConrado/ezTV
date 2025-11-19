import React, { useState, useEffect } from 'react';
import { Play, Maximize2 } from 'lucide-react';
import { Video } from '../types';

interface MainPlayerProps {
  video: Video;
  onExpand: () => void;
}

const MainPlayer: React.FC<MainPlayerProps> = ({ video, onExpand }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Reset playing state when video changes so we show the thumbnail again
  useEffect(() => {
    setIsPlaying(false);
  }, [video.id]);

  return (
    <div className="flex flex-col items-center z-10 relative w-full max-w-4xl mx-auto px-4">
      
      {/* Main Video Container - Clean monitor style without internal decorations */}
      <div className="group relative w-full aspect-video bg-black rounded-2xl shadow-2xl overflow-hidden border-4 border-white/10">
        
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&origin=${window.location.origin}`}
            title={video.title}
            className="w-full h-full bg-black"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <div 
            className="w-full h-full relative cursor-pointer bg-black"
            onClick={() => setIsPlaying(true)}
          >
            <img 
              src={video.thumbnailUrl} 
              alt={video.title} 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            {/* Play Button Centered */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-brand-red/90 transition-colors duration-300 shadow-lg ring-4 ring-white/30">
                <Play className="w-8 h-8 text-white ml-1 fill-white" />
              </div>
            </div>
          </div>
        )}

        {/* Corner Expand Icon - Triggers the Modal */}
        <div className="absolute top-4 right-4 z-20">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onExpand();
            }}
            className="bg-black/60 hover:bg-brand-red text-white p-2 rounded-lg backdrop-blur-sm transition-colors duration-200 shadow-lg group-hover:opacity-100 opacity-80"
            title="Expandir para tela cheia"
          >
             <Maximize2 size={20} />
          </button>
        </div>
      </div>

      {/* Title Below */}
      <div className="mt-6 text-center max-w-2xl">
        <h2 className="text-white text-xl md:text-2xl font-bold tracking-tight drop-shadow-md">
            {video.title || "Selecione um vídeo"}
        </h2>
        <p className="text-white/70 mt-2 text-sm font-light">
            {video.description}
        </p>
      </div>
    </div>
  );
};

export default MainPlayer;