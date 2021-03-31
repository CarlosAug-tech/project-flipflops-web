import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import Product from './Product';

import { Container, Content, SlideChevron, ChevronButton } from './styles';

export interface ProductsContainerProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: {
    url: string;
  };
  category: {
    name: string;
  };
}

interface ProductSlide {
  category: string;
}

const ProductSlide: React.FC<ProductSlide> = ({ category }) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState<ProductsContainerProps[]>([]);

  const [isVisiblePrev, setIsVisiblePrev] = useState(false);
  const [isVisibleNext, setIsVisibleNext] = useState(true);

  let index = 0;
  let containerWidth = refContainer.current?.offsetWidth;

  const loadPropducts = useCallback(async () => {
    const response = await api.get(`/products/category/${category}`);

    const data = response.data.rows.map((product: ProductsContainerProps) => ({
      ...product,
      price: formatPrice(product.price),
    }));

    setProducts(data);
  }, []);

  useEffect(() => {
    loadPropducts();
  }, [loadPropducts]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      containerWidth = refContainer.current?.offsetWidth;
    });
  }, [containerWidth]);

  const nextSlide = useCallback(() => {
    index++;
    setIsVisiblePrev(true);
    if (refContent.current && containerWidth) {
      refContent.current.style.transform = `translateX(-${
        index * containerWidth
      }px)`;
    }
    if (refContent.current && containerWidth) {
      const teste = index * containerWidth;

      if (refContent.current.offsetWidth - teste < containerWidth) {
        setIsVisibleNext(false);
      }
    }
  }, [containerWidth]);

  const prevSlide = useCallback(() => {
    index--;
    setIsVisibleNext(true);
    if (refContent.current && containerWidth) {
      refContent.current.style.transform = `translateX(-${
        index * containerWidth
      }px)`;
    }

    if (index === 0) {
      setIsVisiblePrev(false);
    }
  }, [containerWidth]);

  return (
    <Container ref={refContainer}>
      <Content ref={refContent}>
        {products.length > 0 ? (
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <span>
            Não foi adicionado nenhum produto nesta categoria no momento!
          </span>
        )}
      </Content>
      <SlideChevron>
        <ChevronButton
          type="button"
          className={isVisiblePrev ? 'show' : 'hide'}
          isVisiblePrev={isVisiblePrev}
          onClick={prevSlide}
        >
          <FiChevronLeft size={25} />
        </ChevronButton>
        <ChevronButton
          type="button"
          className={isVisibleNext ? 'show' : 'hide'}
          isVisibleNext={isVisibleNext}
          onClick={nextSlide}
        >
          <FiChevronRight size={25} />
        </ChevronButton>
      </SlideChevron>
    </Container>
  );
};

export default ProductSlide;
