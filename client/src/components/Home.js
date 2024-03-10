import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import './Home.css'; // Import your CSS file for styling

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "taj.jpg",
    "temple.jpg",
    "dance.jpg",
    "holi.jpg",
    "food.jpg",
  ];

  const changeSlide = (increment) => {
    const newIndex = (currentSlide + increment + slides.length) % slides.length;
    setCurrentSlide(newIndex);
  };

  useEffect(() => {
    // Automatically change slide every 5 seconds
    const intervalId = setInterval(() => {
      changeSlide(1);
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div>
      &nbsp;
      &nbsp;
      <img src={"IMG.JPG.jpg"} alt="logo"></img>
      <center>
        <div className="welcome-container">
          <p className="welcome-text">
            <h1>Welcome</h1>
          </p>
        </div>
      </center>

      <Typography variant="h4" mt={4}>
        Indian culture is deeply rooted in a rich history that spans thousands of years and is characterized by its diversity, traditions, and values. When it comes to the management system in India, it is influenced by this cultural background, societal norms, and the country's economic and business landscape.
      </Typography>

      <div className="slideshow-container">
        <div className="slides">
          {slides.map((slide, index) => (
            <img key={index} src={slide} style={{ display: index === currentSlide ? 'block' : 'none' }} alt={`slide-${index}`} />
          ))}
        </div>
        <a className="prev" onClick={() => changeSlide(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => changeSlide(1)}>
          &#10095;
        </a>
      </div>
    </div>
  );
};

export default Home;
