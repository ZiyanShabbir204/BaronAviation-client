import { useState, useEffect } from "react";

function ResponsiveVideo() {
  const [videoWidth, setVideoWidth] = useState("100%");
  const [key, setKey] = useState(0);

  //   useEffect(() => {
  //     function handleResize() {
  //       const screenWidth = window.innerWidth;

  //       if (screenWidth >= 1440) {
  //         setVideoWidth("1000px");
  //       } else if (screenWidth >= 500) {
  //         setVideoWidth("500px");
  //       } else {
  //         setVideoWidth("300px");
  //       }

  //       // Update the key to force iframe re-render
  //       setKey((prevKey) => prevKey + 1);
  //     }

  //     handleResize(); // Set initial width
  //     window.addEventListener("resize", handleResize);

  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);

  useEffect(() => {
    // Debounce function to set video width only after resizing stops
    const handleResize = () => {
      clearTimeout(window.resizeTimeout);

      window.resizeTimeout = setTimeout(() => {
        // Update the key to force iframe re-render
        setKey((prevKey) => prevKey + 1);
      }, 300); // 300ms delay after user stops resizing
    };

    window.addEventListener("resize", handleResize);

    // Set initial width on mount
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <iframe
          key={key} // Force re-render on resize
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/-EwLqTInwcI?si=SN_Z5GYSmeSwhGE6"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default ResponsiveVideo;