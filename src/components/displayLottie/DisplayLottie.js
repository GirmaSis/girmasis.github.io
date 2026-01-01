import React from "react";
import Lottie from "lottie-react";

export default function DisplayLottie({ animationData, className, style }) {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
    />
  );
}
