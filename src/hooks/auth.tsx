import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

export interface IUserProps {
  id: string;
  name: string;
  email: string;
  cpf: string;
  rg: string;
  birthday: string;
  phone: string;
  avatar?: {
    url?: string;
  };
  address: {
    zipcode: number;
    street: string;
    street_number: number;
    neighborhood: string;
    city: string;
    state: string;
  };
}

interface AuthState {
  token: string;
  // user: {
  //   [key: string]: string;
  // };
  user: IUserProps;
}

interface UserCredentials {
  formData: object;
}

interface AuthContextData {
  user: IUserProps;
  signIn(credentials: UserCredentials): Promise<void>;
  signUp(credentials: UserCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('Projectsell:token');
    const user = localStorage.getItem('Projectsell:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ formData }) => {
    const { email, password } = formData;
    const response = await api.post('/sessions', { email, password });
    const { token, user } = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;

    localStorage.setItem('Projectsell:token', token);
    localStorage.setItem('Projectsell:user', JSON.stringify(user));

    setData({ user, token });
  }, []);

  const signUp = useCallback(async ({ formData }) => {
    const {
      name,
      email,
      password,
      cpf,
      rg,
      birthday,
      phone,
      zipcode,
      street,
      street_number,
      neighborhood,
      city,
      state,
    } = formData;

    await api.post('/users', {
      name,
      email,
      password,
      cpf,
      rg,
      birthday,
      phone,
      zipcode,
      street,
      street_number,
      neighborhood,
      city,
      state,
    });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('Projectsell:token');
    localStorage.removeItem('Projectsell:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('');
  }

  return context;
}

export { AuthProvider, useAuth };
