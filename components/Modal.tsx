import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Video } from '../types';

interface ModalProps {
  video: Video | null;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ video, isOpen, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div 
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-50 bg-black/50 hover:bg-brand-red text-white p-2 rounded-full transition-colors backdrop-blur-md border border-white/20"
      >
        <X size={32} />
      </button>

      {/* Video Container */}
      <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center pointer-events-none">
         <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 pointer-events-auto">
            {video.id ? (
                <iframe 
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&origin=${window.location.origin}`} 
                    title={video.title}
                    className="w-full h-full bg-black"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            ) : (
                <div className="w-full h-full flex items-center justify-center bg-black text-white">
                    <p>Vídeo não disponível</p>
                </div>
            )}
         </div>
      </div>
    </div>
  );
};

export default Modal;