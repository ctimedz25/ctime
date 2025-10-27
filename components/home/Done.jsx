"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const API_KEY = "AIzaSyD3XIE_ma3OxA8T9eOLzYwWGt5Kxyu7KVo";
const CHANNEL_ID = "UCy4T6HGV6M0AN1fQfAcp0DA";

export default function VideoLibrary() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
        );
        const data = await response.json();
        const videoItems = data.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
        }));
        setVideos(videoItems);
        if (videoItems.length > 0) {
          setSelectedVideo(videoItems[0].id);
        }
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    }

    fetchVideos();
  }, []);

  return (
    <section className="mx-auto max-w-4xl my-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-white ">
        Vidéothèque
      </h2>

      {selectedVideo && (
        <div
          className="relative overflow-hidden rounded-xl shadow-xl"
          style={{ paddingBottom: "56.25%", height: 0 }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${selectedVideo}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
            title="YouTube video player"
          />
        </div>
      )}

<div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
  {videos?.map((video, index) => (
    <div
      key={video.id || index} // Utilisation d'un index si video.id est absent
      className={`relative cursor-pointer rounded-lg overflow-hidden transition-transform duration-300 ${
        selectedVideo === video.id ? "ring-4 ring-red-500 scale-105" : "hover:scale-105"
      }`}
      onClick={() => setSelectedVideo(video.id)}
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <span className="text-white font-bold text-sm">▶ {video.title}</span>
      </div>
    </div>
  ))}
</div>



      <div className="mt-6 text-center">
        <Link href={`https://www.youtube.com/channel/${CHANNEL_ID}`} target="_blank">
          <button className="px-6 py-2 bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-500 transition duration-200 transform hover:scale-105">
            Voir plus de vidéos
          </button>
        </Link>
      </div>
    </section>
  );
}
