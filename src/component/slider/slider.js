import { Carousel, Button } from 'antd';
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import React from 'react';
import './slider.css'
import { Link } from 'react-router-dom'


const contentStyle = {
  width: '85%',
  height: '380px',
  margin: '0 auto',
  marginTop: '70px',
};

const Slider = () => {
  const carouselRef = React.createRef();

  const handlePrevSlide = () => {
    carouselRef.current.prev();
  };

  const handleNextSlide = () => {
    carouselRef.current.next();
  };

  const slideImageStyle = {
    width: '100%',
    borderRadius: '15px',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="slider-container">
      <Carousel ref={carouselRef}>
        <div>
          <h3 style={contentStyle}>
            <img
              alt="Slide 1"
              style={slideImageStyle}
              src="https://www.motorionline.com/wp-content/uploads/2023/05/Fast-X-1024x450.jpg"
            />
          </h3>
          <Link to={`/0`}> 
          <button  className="button">Watch Now</button>
          </Link>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              alt="Slide 2"
              style={slideImageStyle}
              src="https://fairfieldacc.com/wp-content/uploads/2023/04/poster-horizantal.jpg"
            />
          </h3>
          <Link to={`/3`}>
          <button  className="button">Watch Now</button>
          </Link>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              alt="Slide 3"
              style={slideImageStyle}
              src="https://d3q79wa8h7wjl9.cloudfront.net/wp-content/uploads/2022/11/image003-2.jpg"
            />
          </h3>
          <Link to={`/30`}>
               <button  className="button">Watch Now</button>
          </Link>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              alt="Slide 4"
              style={slideImageStyle}
              src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/10/Gerard-Butler-and-Mike-Colter-in-Plane.jpg"
            />
          </h3>
          <Link to={`/8`}>
               <button  className="button">Watch Now</button>
          </Link>
        </div>
      </Carousel>
      <div className="slider-button1">
        <Button
          className="slider-btn prev-btn"
          onClick={handlePrevSlide}
          icon={<LeftCircleOutlined style={{fontSize:"25px"}}/>}
          size="large"
        />
      </div>
      <div className="slider-button2">
        <Button
          className="slider-btn next-btn"
          onClick={handleNextSlide}
          icon={<RightCircleOutlined style={{fontSize:"25px"}} />}
          size="large"
        />
      </div>
    </div>
  );
};

export default Slider;


