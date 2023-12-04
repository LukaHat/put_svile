import React from "react";
import Slider from "react-slick";
import { SektorKreativneIndustrije } from "./SektorKreativneIndustrije/SektorKreativneIndustrije";
import { useTranslation } from "react-i18next";

const KruznaKreativnost = () => {
  const { t } = useTranslation();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    "/assets/slider/01 - Arhitektura.png",
    "/assets/slider/02 - Audiovizualna.png",
    "/assets/slider/03 - Glazba.png",
    "/assets/slider/04 - Izvedbene umjetnosti.png",
    "/assets/slider/05 - Knjiga, nakladništvo.png",
    "/assets/slider/06 - Mediji.png",
    "/assets/slider/07 - Oglašavanje.png",
    "/assets/slider/08 - Primijenjene umjetnosti.png",
    "/assets/slider/09 - Računalne igre, novi mediji.png",
    "/assets/slider/10 - Vizualne umjetnosti.png",
    "/assets/slider/11 - Dizajn.png",
    "/assets/slider/12 - Baština.png",
  ];

  return (
    <div
      className="kruzna-kreativnost-box"
      id="kruzna-kreativnost-box"
      name="kruzna-kreativnost-box"
    >
      <h2 className="kruzna-kreativnost-header">{t("creativity")}</h2>
      <div className="slider-box">
        <p className="slider-text">{t("creativity-description")}</p>
        <Slider {...settings} className="slider">
          {images.map((image, index) => (
            <div key={index} className="image-holder">
              <SektorKreativneIndustrije src={process.env.PUBLIC_URL + image} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default KruznaKreativnost;
