export interface CoursesNavProps {
  navLinks: string[];
  active: string;
  onClick: (link: string) => void;
}

export interface CourseProps {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
}
export interface CoursesListProps {
  coursesList: CourseProps[];
}
