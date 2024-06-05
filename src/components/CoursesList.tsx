import { CoursesListProps } from '../types';

import styles from './styles.module.scss';

export const CoursesList = ({ coursesList }: CoursesListProps) => {
  return (
    <ul className={styles.courses_list_wrapper}>
      {coursesList.map((course) => (
        <li key={course.id} className={styles.course_item_card}>
          <div
            className={styles.course_item_img_wrapper}
            style={{ backgroundColor: course.bgColor }}>
            <img src={course.image} alt={course.name} className={styles.course_item_img} />
          </div>
          <div className={styles.course_item_title_wrapper}>
            <h3 className={styles.course_item_title}>{course.name}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
};

CoursesList.displayName = 'CoursesList';
