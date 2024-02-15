import { Component } from 'react';

export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydownESC);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydownESC);
  }

  handleDropDownClick = event => {
    const { onModalClose } = this.props;
    if (event.target.classList.contains('Overlay')) {
      onModalClose();
    }
  };

  handleKeydownESC = event => {
    const { onModalClose } = this.props;
    if (event.key === 'Escape') {
      onModalClose();
    }
  };

  render() {
    const { url } = this.props;
    return (
      <div onClick={this.handleDropDownClick} className="Overlay">
        <div className="Modal">
          <img src={url} alt="Gallery item" />
        </div>
      </div>
    );
  }
}
