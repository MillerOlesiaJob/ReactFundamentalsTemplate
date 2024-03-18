// Module 3.
// * add two new buttons: update and delete'. Use icons from 'src/assets/...'.
// * remove course from the store by 'delete' button click
// * no functionality for 'update' button for now
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-3/home-task/components#coursecard-component

// Module 4.
// * show 'delete' and 'update' buttons only for ADMIN user
// * make delete request by 'delete' button click
// * use 'deleteCourseService' from 'src/services.js' and 'deleteCourseThunk' thunk from 'src/store/thinks/coursesThunk.js'
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-4/home-task/components#coursecard-component

// Module 5:
// * proposed cases for unit tests:
//   ** CourseCard should display title.
//   ** CourseCard should display description.
//   ** CourseCard should display duration in the correct format.
//   ** CourseCard should display authors list.
//   ** CourseCard should display created date in the correct format.

import { getCourseDuration, formatCreationDate } from "../../../../helpers";
import { Button } from "../../../../common/Button/Button";
import { useNavigate } from "react-router-dom";

import { ReactComponent as DeleteIcon } from "../../../../assets/deleteButtonIcon.svg";
import { ReactComponent as EditIcon } from "../../../../assets/editButtonIcon.svg";

import styles from "./styles.module.css";

export const CourseCard = ({ course, handleShowCourse, authorsList }) => {
  // write your code here
  const navigate = useNavigate();

  let authorsToShow = [];
  course.authors.forEach((element) => {
    authorsList.forEach((el) => {
      if (element === el.id) {
        authorsToShow.push(" " + el.name + ",");
      }
    });
  });

  return (
    <div className={styles.cardContainer} data-testid="courseCard">
      <div className={styles.cardText}>
        <h2>{course.title}</h2>
        <p>{course.description}</p>
      </div>
      <div className={styles.cardDetails}>
        <p>
          <b>Authors: </b>
          {authorsToShow}
        </p>
        <p>
          <b>Duration:</b>
          <span>{getCourseDuration(course.duration)}</span>
        </p>
        <p>
          <b>Created: </b>
          <span>{formatCreationDate(course.creationDate)}</span>
        </p>
        <div className={styles.buttonsContainer}>
          <Button
            buttonText={"Show course"}
            handleClick={() => {
              // handleShowCourse(course.id);
              navigate(`courses/${course.id}`);
            }}
          />
          {/* <Link to={`courses/${course.id}`}>hh</Link> */}
          <Button data-testid={"deleteCourse"} icon={<DeleteIcon />} />
          <Button data-testid={"updateCourse"} icon={<EditIcon />} />
        </div>
      </div>
    </div>
  );
};
