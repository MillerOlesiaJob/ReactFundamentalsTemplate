// This component shows information about the current chosen course.

// Module 2.
// * render component by route '/courses/:courseId'
// * use 'useParam' hook to get course id, remove prop 'showCourseId'
// * remove 'onBack' prop
// * use '<Link />' instead <Button /> component for 'BACK' button
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-2/home-task/components#course-info

// Module 3.
// * remove props 'coursesList', 'authorsList'
// * use selectors from store/selectors.js to get coursesList, authorsList from store

import React from "react";

import { formatCreationDate, getCourseDuration } from "../../helpers";
import { Button } from "../../common/Button/Button";

import styles from "./styles.module.css";
import { useParams, Link } from "react-router-dom";

// props description
// * 'coursesList' - list of all courses. You need it to get chosen course from the list
// * 'authorsList' - list of all authors. You need it to get authors' names for chosen course
// * 'showCourseId' - id of chosen course. Use it to find needed course on the 'coursesList'.
export const CourseInfo = ({
  coursesList,
  authorsList,
  onBack,
  showCourseId,
}) => {
  // write your code here
  let { courseId } = useParams();
  console.log(courseId);
  console.log(coursesList);
  const course = coursesList.find((course) => course.id === courseId);

  let authorsToShow = [];
  course.authors.forEach((element) => {
    authorsList.forEach((el) => {
      if (element === el.id) {
        authorsToShow.push(el.name);
      }
    });
  });

  return (
    <div className={styles.container} data-testid="courseInfo">
      <h1>{course.title}</h1>
      <div className={styles.courseInfo}>
        <p className={styles.description}>{course.description}</p>
        <div>
          <p>
            <b>ID: </b>
            {courseId}
          </p>
          <p>
            <b>Duration: </b>
            {getCourseDuration(course.duration)}
          </p>
          <p>
            <b>Created: </b>
            {formatCreationDate(course.creationDate)}
          </p>
          <div>
            <b>Authors</b>
            <ul className={styles.authorsList}>
              {authorsToShow.map((author, index) => (
                <li key={index}>{author}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.backButton}>
        {/* <Button buttonText={"Back"} handleClick={onBack} /> */}
        <Link to={"/courses"}>Back</Link>
      </div>
      {/* 2: use 'react-router-dom' 'Link' component for button 'Back' and remove
      'onBack' prop */}
    </div>
  );
};
