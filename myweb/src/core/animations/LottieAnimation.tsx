import React from 'react';
import Lottie from 'react-lottie';

type LottieAnimationProps = {
  animationData: any,
  height?: number,
  width?: number,
};

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData, height = 400, width = 400 }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={height} width={width} />;
};

export default LottieAnimation;
