import { useEffect, useState } from 'react';
import { CoursesList } from './CoursesList';
import { CoursesNav } from './CoursesNav';

import { CourseProps } from '../types';
import { LoadingProgress } from './loading';
import { getCourses } from '../services';

import styles from './styles.module.scss';

const defaultNavLink = 'Все темы';

export const Courses = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<CourseProps[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [activeNavLink, setActiveNavLink] = useState<string>(defaultNavLink);

  const handleClickNav = (link: string) => {
    setActiveNavLink(link);

    if (link === defaultNavLink) {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(courses.filter((course) => course.tags.includes(link)));
    }
  };

  const fetchCourses = async () => {
    setIsLoading(true);

    try {
      const data = await getCourses();
      const tags = [defaultNavLink, ...new Set(data.flatMap((el: CourseProps) => el.tags))];

      setCourses(data);
      setFilteredCourses(data);
      setTags(tags as string[]);
    } catch (error) {
      console.log('Error: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={styles.loading_wrapper}>
          <LoadingProgress />
        </div>
      ) : (
        <div className={styles.courses_container}>
          <CoursesNav navLinks={tags} onClick={handleClickNav} active={activeNavLink} />

          <CoursesList coursesList={filteredCourses} />
        </div>
      )}
    </>
  );
};

Courses.displayName = 'Courses';
