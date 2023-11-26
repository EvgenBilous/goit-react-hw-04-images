import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';

const ImageGalleryItem = props => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <li className="ImageGalleryItem">
      <img
        onClick={toggleModal}
        className="ImageGalleryItem-image"
        src={props.image.webformatURL}
        alt={props.image.tags}
      />
      {showModal && (
        <Modal
          src={props.image.largeImageURL}
          alt={props.image.tags}
          closeModal={toggleModal}
        />
      )}
    </li>
  );
};

export default ImageGalleryItem;
