export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl?: string; // Optional real video URL, usually mocked
  duration: string;
  views: string;
}