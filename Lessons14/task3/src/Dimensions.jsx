import React, { useState, useEffect } from 'react';

const Dimensions = () => {
  const [dimensions, setDimension] = useState({
    width: null,
    heigth: null,
  })

  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    setDimension({ width: innerWidth, heigth: innerHeight });
    const handleResize = e => {
      const { innerHeight, innerWidth } = e.target;
      setDimension({ width: innerWidth, heigth: innerHeight });
    }
    window.addEventListener('resize', handleResize);
  }, []);

  const { width, heigth } = dimensions;
  return <div class="dimensions">{`${width}px - ${heigth}px`}</div>;
};

export default Dimensions;
