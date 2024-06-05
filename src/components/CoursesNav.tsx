import { CoursesNavProps } from '../types';

import styles from './styles.module.scss';

export const CoursesNav = ({ navLinks, onClick, active }: CoursesNavProps) => {
  return (
    <ul className={styles.nav_link_wrapper}>
      {navLinks.map((link) => (
        <li
          key={link}
          className={styles.nav_link}
          data-active={active === link}
          onClick={() => onClick(link)}>
          {link}
        </li>
      ))}
    </ul>
  );
};

CoursesNav.displayName = 'CoursesNav';
