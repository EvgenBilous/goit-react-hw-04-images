// import Modal from 'components/Modal/Modal';
// import { useState } from 'react';

// // export default class ImageGalleryItem extends Component {
// //   state = {
// //     showModal: false,
// //   };

// //   toggleModal = () => {
// //     this.setState(prevState => {
// //       return { showModal: !prevState.showModal };
// //     });
// //   };

// //   render() {
// //     const { image } = this.props;
// //     return (
// //       <li className="ImageGalleryItem">
// //         <img
// //           onClick={this.toggleModal}
// //           className="ImageGalleryItem-image"
// //           src={image.webformatURL}
// //           alt={image.tags}
// //         />
// //         {this.state.showModal && (
// //           <Modal
// //             src={image.largeImageURL}
// //             alt={image.tags}
// //             closeModal={this.toggleModal}
// //           />
// //         )}
// //       </li>
// //     );
// //   }
// // }

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
