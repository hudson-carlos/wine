import { ReactNode } from 'react';
import { Provider } from '../context/userContext';
import Header from './header';

type typeProps = {
  children: ReactNode | JSX.Element | JSX.Element[];
}

export default function Layout({children }: typeProps) {
  return (
    <Provider>
      <>
        <Header />
        {children}
      </>
    </Provider>
  );
}