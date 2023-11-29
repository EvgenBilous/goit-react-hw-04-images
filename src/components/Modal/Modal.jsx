import { useState, useEffect } from 'react';

const Modal = ({ src, alt, closeModal }) => {
  const [overlayClick, setOverlayClick] = useState(true);
  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  const handleEscape = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  });
  return (
    <div onClick={handleOverlayClick} className="Overlay">
      <div className="Modal">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};
export default Modal;
