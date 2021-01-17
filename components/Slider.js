import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Slider = ({ photos = [], ...props }) => {
  const [, setCurrentSlide] = useState(0);
  const variant = useBreakpointValue({ base: 800, md: 600 });

  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    duration: 500,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <Box position="relative" {...props}>
      <Box ref={sliderRef} className="keen-slider">
        {photos.map((photo, index) => (
          <Box
            key={"image-" + index}
            className="keen-slider__slide"
            d="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={photo.slider_image.url}
              width="1500"
              height={variant === 800 ? 800 : 600}
              className="simage"
              quality="100"
              alt={"Slider Image - " + index}
              priority={true}
            />
          </Box>
        ))}
      </Box>
      {slider && (
        <>
          <ChevronLeftIcon
            w="50px"
            h="50px"
            position="absolute"
            top="50%"
            transform="translateY(-50%)"
            left="5px"
            cursor="pointer"
            color="#eb0028"
            onClick={(e) => {
              e.stopPropagation();
              slider.prev();
            }}
          />
          <ChevronRightIcon
            w="50px"
            h="50px"
            position="absolute"
            top="50%"
            transform="translateY(-50%)"
            color="#eb0028"
            left="auto"
            right="5px"
            cursor="pointer"
            onClick={(e) => {
              e.stopPropagation();
              slider.next();
            }}
          />
        </>
      )}
    </Box>
  );
};

export default Slider;
