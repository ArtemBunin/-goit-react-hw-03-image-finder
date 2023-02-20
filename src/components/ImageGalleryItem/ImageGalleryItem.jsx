import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImageItem, ImageItemImage } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

// export const ImageGalleryItem =({tags,webformatURL,})=>{
//     return (<ImageItem >
//     <ImageItemImage src={webformatURL} alt={tags}/>
//   </ImageItem>)
// }

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toogleModal = () => {
    this.setState(pevState => ({ showModal: !pevState.showModal }));
  };
  render() {
    const {tags,webformatURL,largeImageURL } = this.props;
    const {showModal}=this.state
    return (
      <>
        <ImageItem>
          <ImageItemImage src={webformatURL} onClick={this.toogleModal} alt={tags} />
        </ImageItem>
        {showModal && (
          <Modal
            closeModal={this.toogleModal}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        )}
      </>
    );
  }
}
ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
