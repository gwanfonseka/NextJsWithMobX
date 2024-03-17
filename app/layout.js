import Header from '@/components/Header/Header';
import './globals.css';
import { StoreProvider } from './storeProvider';
// import { Provider } from 'mobx-react';
// import store from '@/lib/store';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
