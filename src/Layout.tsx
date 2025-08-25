import React from 'react';
import Navbar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
      <ScrollToTop />
    </div>
  );
};

export default Layout;
