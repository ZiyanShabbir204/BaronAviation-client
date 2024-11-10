import ModalVideoComponent from "@/components/common/ModalVideo";

import { useEffect, useState } from "react";

export default function YoutubeVideo({ videoId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Debounce function to set video width only after resizing stops
    const handleResize = () => {
      clearTimeout(window.resizeTimeout);

      window.resizeTimeout = setTimeout(() => {
        // Update the key to force iframe re-render
        setKey((prevKey) => prevKey + 1);
      }, 500); // 300ms delay after user stops resizing
    };

    window.addEventListener("resize", handleResize);

    // Set initial width on mount
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <iframe
      key={key} // Force re-render on resize
      width="100%"
      height="500"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
