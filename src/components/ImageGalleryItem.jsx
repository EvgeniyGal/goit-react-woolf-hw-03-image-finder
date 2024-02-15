import LazyLoad from 'react-lazy-load';

export default function ImageGalleryItem({
  onModalOpen,
  photoData: { webformatURL, largeImageURL },
}) {
  return (
    <li className="ImageGalleryItem">
      <LazyLoad>
        <img
          className="ImageGalleryItem-image"
          src={webformatURL}
          onClick={() => onModalOpen(largeImageURL)}
          alt="Gallery item"
        />
      </LazyLoad>
    </li>
  );
}
