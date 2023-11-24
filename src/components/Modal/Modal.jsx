import { Component } from 'react';

export default class Modal extends Component {
  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  handleEscape = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  componentDidMount = () => {
    document.addEventListener('keydown', this.handleEscape);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleEscape);
  };

  render() {
    const { src, alt } = this.props;
    return (
      <div onClick={this.handleOverlayClick} className="Overlay">
        <div className="Modal">
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}
