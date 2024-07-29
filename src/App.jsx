import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PhotoGallery from "./components/PhotoGallery";

const App = () => {
  const images = [
    {
      src: "https://via.placeholder.com/800x400?text=Slide+1",
      alt: "Description 1",
      caption: "Caption 1",
    },
    {
      src: "https://via.placeholder.com/800x400?text=Slide+1",
      alt: "Description 2",
      caption: "Caption 2",
    },
    {
      src: "https://via.placeholder.com/800x400?text=Slide+1",
      alt: "Description 2",
      caption: "Caption 2",
    },
    {
      src: "https://via.placeholder.com/800x400?text=Slide+1",
      alt: "Description 2",
      caption: "Caption 2",
    },
    {
      src: "https://via.placeholder.com/800x400?text=Slide+1",
      alt: "Description 2",
      caption: "Caption 2",
    },
    {
      src: "https://via.placeholder.com/800x400?text=Slide+1",
      alt: "Description 2",
      caption: "Caption 2",
    },
    {
      src: "https://via.placeholder.com/800x400?text=Slide+1",
      alt: "Description 2",
      caption: "Caption 2",
    },
    {
      src: "https://via.placeholder.com/800x400?text=Slide+1",
      alt: "Description 2",
      caption: "Caption 2",
    },
  ];

  return (
    <>
      <Navbar />
      <Carousel />
      <PhotoGallery images={images} />
      <Footer />
    </>
  );
};

export default App;
