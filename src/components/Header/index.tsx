import React from 'react';
import { Link } from 'react-router-dom';
import { FaArchive, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { useAuth } from '../../hooks/auth';

import Cart from './_cart';
import { ILocationProfileProps } from '../../pages/Profile';

import Logo from '../Logo';
import avatarNoImage from '../../assets/Images/avatarNoImage.png';

import { Container, Content, NavMenu } from './styles';

interface HeaderProps extends ILocationProfileProps {
  isHome?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isHome, isOrder, isAccount }) => {
  const { user, signOut } = useAuth();

  return (
    <Container isHome={isHome}>
      <Content>
        <Logo />
        <NavMenu>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {user ? (
              <>
                <li>
                  <div>
                    <img src={avatarNoImage} alt="avatar" />
                    <div>
                      <Link
                        to={{
                          pathname: '/profile',
                          state: {
                            isAccount: true,
                          },
                        }}
                      >
                        Meu Perfil
                        <FaUserCircle size={16} />
                      </Link>
                      <Link
                        to={{
                          pathname: '/profile',
                          state: {
                            isOrder: true,
                          },
                        }}
                      >
                        Meus Pedidos
                        <FaArchive size={16} />
                      </Link>
                      <Link to="" onClick={signOut}>
                        Logout
                        <FaSignOutAlt size={16} />
                      </Link>
                    </div>
                  </div>
                </li>
                <Cart />
              </>
            ) : (
              <>
                <li>
                  <Link to="/register">Cadastro</Link>
                </li>
                <li>
                  <Link to="/auth">Login</Link>
                </li>
              </>
            )}
          </ul>
        </NavMenu>
      </Content>
    </Container>
  );
};

export default Header;
