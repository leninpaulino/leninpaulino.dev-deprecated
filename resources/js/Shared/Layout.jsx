import React, { Fragment } from 'react';
import NavBar from './NavBar';

export default function Layout({ children }) {
  return (
    <div className="container">
      <NavBar />
      {children}
    </div>
  );
}
