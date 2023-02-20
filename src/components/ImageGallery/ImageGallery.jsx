import  { PropTypes } from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyle } from './ImageGallery.styled';

export const ImageGallery = ({ imageItem }) => {
  return (
    <ImageGalleryStyle >
      {imageItem.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        );
      })}
    </ImageGalleryStyle>
  );
};
ImageGallery.propTypes = {
  imageItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    }),
  ),
};