import ImageGalleryItem from './ImageGalleryItem';

export default function ImageGallery({ galleryPhotos, onModalOpen }) {
  return (
    <ul className="ImageGallery">
      {galleryPhotos.map(photo => (
        <ImageGalleryItem
          key={photo.webformatURL}
          photoData={photo}
          onModalOpen={onModalOpen}
        />
      ))}
    </ul>
  );
}
