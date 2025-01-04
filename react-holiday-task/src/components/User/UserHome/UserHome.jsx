import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function UserHome() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    customPaging: () => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "#fff",
          border: "1px solid #f460a6",
          padding: "6px",
          borderRadius: "50%",
        }}
      />
    ),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-30%)",
        }}
      >
        <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="slider-container"
      style={{
        position: "relative",
        width: "100%",
        overflow:"hidden"
      }}
    >
      <Slider {...settings}>

        {/* İlk Slayd */}
        <div style={{ position: "relative" }}>

          {/* Şəkil */}
          <img
            src="https://preview.colorlib.com/theme/florist/img/hero/hero-1.jpg.webp"
            alt="Slide 1"
            style={{
              width: "100%",
              objectFit: "cover",
              overflow: "hidden"
            }}
          />
          {/* Mətn */}
          <div
            style={{
              position: "absolute",
              top: "20%",
              color: "black",
              textAlign: "left",
              padding: "20px",
              transform: "translateX(10%)",

            }}
          >
            <h4 style={{ color: "gray", fontSize: "25px" }}>
              Fresh Flower & Gift Shop
            </h4>
            <h2 style={{ width: "60%", fontSize: "38px", fontWeight: "bold", margin: "10px 0", color: "black" }}>
              Making beautiful flowers a part of your life.
            </h2>
            <button
              style={{
                backgroundColor: "#f460a6",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "20px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* İkinci Slayd */}
        <div style={{ position: "relative" }}>

          {/* Şəkil */}
          <img src="https://preview.colorlib.com/theme/florist/img/hero/hero-2.jpg.webp"
            alt="Slide 2"
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />

          {/* Mətn */}
          <div
            style={{
              position: "absolute",
              top: "20%",
              color: "black",
              textAlign: "left",
              padding: "30px",
              transform: "translateX(10%)",
            }}
          >
            <h4 style={{ color: "gray", fontSize: "25px" }}>
              Fresh Flower & Gift Shop
            </h4>
            <h2 style={{ width: "60%", fontSize: "40px", fontWeight: "bold", margin: "10px 0", color: "black" }}>
              Making beautiful flowers a part of your life.
            </h2>
            <button
              style={{
                backgroundColor: "#f460a6",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "20px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Shop Now
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default UserHome;
