import { useState, Children, isValidElement } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Box } from "@chakra-ui/react";

const Carousel = ({ children, ...props }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [sliderRef, slider] = useKeenSlider({
    mounted: () => setIsMounted(true),
    slidesPerView: 1,
    loop: true,
    spacing: 50,
  });

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
      {...props}
    >
      <Box
        as="button"
        onClick={slider?.prev}
        aria-label="Предыдущий слайд"
        sx={{
          position: "absolute",
          top: "50%",
          left: 4,
          transform: "translateY(-50%)",
          width: 10,
          height: 10,
          zIndex: 1,
          backgroundImage: "url('/ui/circle_chevron_left.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "50%",
          ":hover": {
            backgroundColor: "rgba(0,0,0,0.1)",
            boxShadow: "0 0 0 3px rgba(164,202,254,.45)",
            outline: "none",
          },
        }}
      ></Box>
      <Box
        as="button"
        onClick={slider?.next}
        aria-label="Следующий слайд"
        sx={{
          position: "absolute",
          top: "50%",
          right: 4,
          transform: "translateY(-50%)",
          zIndex: 1,
          width: 10,
          height: 10,
          backgroundImage: "url('/ui/circle_chevron_right.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "50%",
          ":hover": {
            backgroundColor: "rgba(0,0,0,0.1)",
            boxShadow: "0 0 0 3px rgba(164,202,254,.45)",
            outline: "none",
          },
        }}
      ></Box>
      <Box
        ref={sliderRef}
        className="keen-slider"
        sx={{
          height: "100%",
          transition: "opacity 0.15s",
          opacity: isMounted ? 1 : 0,
          // marginTop: "-10px",
        }}
      >
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${
                  child.props.className ? `${child.props.className} ` : ""
                }keen-slider__slide`,
              },
            };
          }
          return child;
        })}
      </Box>
    </Box>
  );
};

export default Carousel;
