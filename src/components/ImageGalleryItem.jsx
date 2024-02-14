export default function ImageGalleryItem({
  onModalOpen,
  photoData: { webformatURL, id },
}) {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        onClick={() => onModalOpen(id)}
        alt="Gallery item"
      />
    </li>
  );
}
