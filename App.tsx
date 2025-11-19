import React, { useState } from 'react';
import Header from './components/Header';
import MainPlayer from './components/MainPlayer';
import VideoCarousel from './components/VideoCarousel';
import Modal from './components/Modal';
import BackgroundPattern from './components/BackgroundPattern';
import { MOCK_VIDEOS } from './constants';
import { Video } from './types';

const App: React.FC = () => {
  // Default to the first video, or use one specifically selected
  const [selectedVideo, setSelectedVideo] = useState<Video>(MOCK_VIDEOS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handler for clicking a video in the carousel
  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
    // This updates the main player. The user can then choose to play it there or expand it.
  };

  // Handler for the expand button on the main player
  const handleMainPlayerExpand = () => {
    setIsModalOpen(true);
  };

  return (
    <main className="relative min-h-screen w-full bg-brand-darkRed overflow-hidden flex flex-col">
      
      {/* Geometric Background */}
      <BackgroundPattern />

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col h-full w-full max-w-[1920px] mx-auto">
        
        <Header />

        <div className="flex-1 flex flex-col items-center justify-center pb-12 pt-4 space-y-8">
            
            {/* Highlighted Video Section */}
            <MainPlayer 
                video={selectedVideo} 
                onExpand={handleMainPlayerExpand}
            />

            {/* Carousel Section */}
            <div className="w-full">
                <VideoCarousel 
                    videos={MOCK_VIDEOS} 
                    onSelectVideo={handleVideoSelect}
                />
            </div>

        </div>

        {/* Footer / Copyright (Optional but nice for layout balance) */}
        <footer className="w-full text-center py-4 text-white/20 text-xs">
            © {new Date().getFullYear()} ezvoice. All rights reserved.
        </footer>
      </div>

      {/* Expanded View Modal */}
      <Modal 
        video={selectedVideo} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </main>
  );
};

export default App;