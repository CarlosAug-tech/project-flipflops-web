import React, { useCallback, useEffect, useState } from 'react';
import { FaList, FaUser } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

import avatarNoImage from '../../assets/Images/avatarNoImage.png';
import { useAuth } from '../../hooks/auth';

import MyAccount from './_myAccount';
import OrderView from './_orderViews';

import {
  Container,
  Content,
  ProfileMenu,
  MenuOptions,
  MenuItems,
  ProfileDetails,
} from './styles';

export interface ILocationProfileProps {
  isOrder?: boolean;
  isAccount?: boolean;
}

const Profile: React.FC = () => {
  const { user } = useAuth();

  const isOrder = useLocation<ILocationProfileProps>().state
    ? useLocation<ILocationProfileProps>().state.isOrder
    : false;
  const isAccount = useLocation<ILocationProfileProps>().state
    ? useLocation<ILocationProfileProps>().state.isAccount
    : false;

  const [isVisibleOrder, setIsVisibleOrder] = useState(
    (!isOrder && !isAccount && true) || !!isOrder || false,
  );
  const [isVisibleMyAccount, setIsVisibleMyAccount] = useState(
    !!isAccount || false,
  );

  useEffect(() => {
    if (isOrder && !isAccount) {
      setIsVisibleOrder(true);
      setIsVisibleMyAccount(false);
    } else if (!isOrder && isAccount) {
      setIsVisibleOrder(false);
      setIsVisibleMyAccount(true);
    }
  }, [isOrder, isAccount]);

  const handleChangeScreen = useCallback(
    (route: string) => {
      if (route === 'orderView') {
        setIsVisibleOrder(true);
        setIsVisibleMyAccount(false);
      } else if (route === 'myAccount') {
        setIsVisibleMyAccount(true);
        setIsVisibleOrder(false);
      }
    },
    [isVisibleMyAccount, isVisibleOrder],
  );

  return (
    <Container>
      <Content>
        <ProfileMenu>
          <img src={avatarNoImage} alt="avatar of user" />
          <strong>{user.name}</strong>
          <span>{user.email}</span>
          <MenuOptions>
            <MenuItems onClick={() => handleChangeScreen('myAccount')}>
              <FaUser size={14} />
              <span>Minha Conta</span>
            </MenuItems>
            <MenuItems onClick={() => handleChangeScreen('orderView')}>
              <FaList size={14} />
              <span>Meus Pedidos</span>
            </MenuItems>
          </MenuOptions>
        </ProfileMenu>
        <ProfileDetails>
          {isVisibleMyAccount && (
            <MyAccount isVisibleMyAccount={isVisibleMyAccount} />
          )}
          {isVisibleOrder && <OrderView isVisibleOrder={isVisibleOrder} />}
        </ProfileDetails>
      </Content>
    </Container>
  );
};

export default Profile;
