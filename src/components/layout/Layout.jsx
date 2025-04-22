// src/layout/Layout.jsx
import Header from '../header/Header';
import Sidebar from '../sidebar/sidebar/Sidebar';
import styles from './layout.module.scss';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.body}>
        <Sidebar />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;