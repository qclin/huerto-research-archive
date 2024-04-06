import React, { useRef } from "react";
import Block from "./block";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from "../images/icons/prev-arrow.svg";
import NextArrow from "../images/icons/next-arrow.svg";

const settings = {
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
};

function Row({ fields, type }) {
  const sliderRef = useRef();

  const ArrowButton = ({ Arrow, onClick }) => (
    <button className="mx-6 my-2 focus:outline-none" onClick={onClick}>
      <Arrow />
    </button>
  );

  return (
    <dl className="h-64 border-b">
      <dt key={type} className="border-r absolute flex-shrink-0 w-32 left-0 ">
        <div className="bg-eggwash uppercase text-base px-4 border-b">
          {type}
        </div>
        <ArrowButton
          Arrow={PrevArrow}
          onClick={() => sliderRef.current.slickPrev()}
        />
        <ArrowButton
          Arrow={NextArrow}
          onClick={() => sliderRef.current.slickNext()}
        />
      </dt>
      <Slider
        {...settings}
        ref={sliderRef}
        className="h-64 inline ml-32"
        style={{ width: "calc(100vw - 8rem)" }}
      >
        {fields.map((field, index) => (
          <Block
            key={`${field.IDENTIFIER}.${index}`}
            field={field}
            media={field.MEDIA && field.MEDIA[0].data}
          />
        ))}
      </Slider>
    </dl>
  );
}

export default Row;
