import LazyLoad from 'react-lazy-load';

export default function ImageGalleryItem({
  onModalOpen,
  photoData: { webformatURL, id },
}) {
  return (
    <li className="ImageGalleryItem">
      <LazyLoad>
        <img
          className="ImageGalleryItem-image"
          src={webformatURL}
          onClick={() => onModalOpen(id)}
          alt="Gallery item"
        />
      </LazyLoad>
    </li>
  );
}
