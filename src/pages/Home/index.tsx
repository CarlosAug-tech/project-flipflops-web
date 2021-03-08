import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import BannerContainer from '../../components/BannerContainer';
import ProductSlide from '../../components/ProductSlide';

import { Container, Content, ProductCase } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <BannerContainer />
      <Content>
        <ProductCase>
          <div>
            <h3>Tênis Esportivos</h3>
            <Link to="">
              Ver mais
              <FiChevronsRight />
            </Link>
          </div>
          <ProductSlide category="Esportivo" />
        </ProductCase>
        <ProductCase>
          <div>
            <h3>Tênis Clássicos</h3>
            <Link to="">
              Ver mais
              <FiChevronsRight />
            </Link>
          </div>
          <ProductSlide category="Classico" />
        </ProductCase>
      </Content>
    </Container>
  );
};

export default Home;
