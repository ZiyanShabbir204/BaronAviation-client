import ModalVideo from "react-modal-video";

export default function ModalVideoComponent({ isOpen, setIsOpen, videoId }) {
  return (
    <ModalVideo
      channel="youtube"
      isOpen={isOpen}
      videoId={videoId}
      onClose={() => setIsOpen(false)}
    />
  );
}
