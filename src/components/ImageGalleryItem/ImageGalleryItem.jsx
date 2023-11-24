import Modal from 'components/Modal/Modal';
import { Component } from 'react';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => {
      return { showModal: !prevState.showModal };
    });
  };

  render() {
    const { image } = this.props;
    return (
      <li className="ImageGalleryItem">
        <img
          onClick={this.toggleModal}
          className="ImageGalleryItem-image"
          src={image.webformatURL}
          alt={image.tags}
        />
        {this.state.showModal && (
          <Modal
            src={image.largeImageURL}
            alt={image.tags}
            closeModal={this.toggleModal}
          />
        )}
      </li>
    );
  }
}
