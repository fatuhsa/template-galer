const PhotoGallery = ({ images }) => {
  return (
    <div className="py-8 px-4 mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-center">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
