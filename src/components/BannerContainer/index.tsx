import React, { useCallback, useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import bannerStatic from './bannerData';

import { Container, ChevronButton, ImageElement } from './styles';

interface BannerProps {
  id: string;
  banner_image: {
    url: string;
  };
}

const BannerContainer: React.FC = () => {
  const [slides, setSlides] = useState<BannerProps[]>([]);
  const [current, setCurrent] = useState(0);
  const lenght = slides.length > 0 ? slides.length : bannerStatic.length;

  const loadSlides = useCallback(async () => {
    const response = await api.get('/banners');
    const data = await response.data.map((banner: object) => ({
      ...banner,
    }));
    setSlides(data);
  }, []);

  useEffect(() => {
    loadSlides();
  }, [loadSlides]);

  const nextSlide = useCallback(() => {
    setCurrent(current === lenght - 1 ? 0 : current + 1);
  }, [current]);

  const prevSlide = useCallback(() => {
    setCurrent(current === 0 ? lenght - 1 : current - 1);
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    if (current === lenght) {
      setCurrent(0);
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [current, slides]);

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }

  console.log(slides ? 'existe' : 'não exists');

  return (
    <Container>
      {slides.length > 0
        ? slides.map((banner, index) => (
            <ImageElement
              key={banner.id}
              src={banner.banner_image.url}
              alt=""
              isActived={index === current}
              isActivedReverse={index < current}
            />
          ))
        : bannerStatic.map((banner, index) => (
            <ImageElement
              key={banner.id}
              src={banner.banner_image.url}
              alt=""
              isActived={index === current}
              isActivedReverse={index < current}
            />
          ))}
      <ChevronButton type="button" onClick={prevSlide}>
        <FiChevronLeft size={40} />
      </ChevronButton>
      <ChevronButton type="button" onClick={nextSlide}>
        <FiChevronRight size={40} />
      </ChevronButton>
    </Container>
  );
};

export default BannerContainer;
