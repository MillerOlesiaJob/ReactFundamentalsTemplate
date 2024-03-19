// Module 2.
// * uncomment this component (ctrl + a => ctrl + /)
// * add functionality to create new course with:
//   ** title
//   ** description
//   ** duration (user enters in minutes, you should map in format «hh:mm»)
//   ** existing authors (use 'authorsList' prop)
//   ** new created author (create field and button, update 'authorsList')
//   ** user should be able to remove author from the course
//   ** add validation to the fields
//   ** add new course to the 'coursesList' and navigate to the '/courses' page => new course should be in the courses list
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-2/home-task/components#add-new-course

// Module 3.
// * save new course to the store. Use action 'saveCourse' from 'src/store/slices/coursesSlice'
// * save new author to the store. Use action 'saveAuthor' from 'src/store/slices/authorsSlice'
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-3/home-task/components#add-new-course

// Module 4.
// * render this component only for ADMIN user
// * in this module you should separate functionality for this component:
//   ** create mode:
//     * form for the course creation should be opened by 'courses/add' route by 'ADD NEW COURSE' button click (as before)
//     * make a request to save new course
//     * use 'createCourse' service from 'src/services.js' and 'createCourseThunk' thunk from 'src/store/thinks/coursesThunk.js'
//     * use 'createAuthor ' service from 'src/services.js' and 'createAuthorThunk' thunk from 'src/store/thinks/authorsThunk.js'
//     * save new course to the store after success response
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-4/home-task/components#add-new-course
//   ** update mode:
//     * form should be opened by route '/courses/update/:courseId' route by 'update' button click
//     * appropriate forms field should be prefilled with course's info
//     * user should have ability to modify course information in the fields and change authors list
//     * make a request to save updated course
//     * use 'updateCourseService' from 'src/services.js' and 'updateCourseThunk' thunk from 'src/store/thinks/coursesThunk.js'
//     save updated course to the store after success response.
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-4/home-task/components#update-course

// Module 5:
// * proposed cases for unit tests:
//   ** CourseForm should show authors lists (all and course authors).
//   **  CourseForm 'Create author' button click should call dispatch.
//   **  CourseForm 'Add author' button click should add an author to the course authors list.
//   **  CourseForm 'Delete author' button click should delete an author from the course list.

import styles from "./styles.module.css";
import { Input } from "../../common/Input/Input";
import React, { useState } from "react";
import { formatCreationDate, getCourseDuration } from "../../helpers";
import { Button } from "../../common/Button/Button";
import { AuthorItem, CreateAuthor } from "./components";

export const CourseForm = ({ authorsList, createCourse, createAuthor }) => {
  //write your code here

  const [formState, setFormState] = useState({
    title: "",
    duration: "",
    description: "",
  });

  const setTitle = (title) => {
    setFormState((prevState) => ({ ...prevState, title }));
  };

  const setDescription = (duration) => {
    setFormState((prevState) => ({ ...prevState, duration }));
  };

  const setDuration = (description) => {
    setFormState((prevState) => ({ ...prevState, description }));
  };

  return (
    <div className={styles.container}>
      <h2>Course Edit/Create Page</h2>

      <form>
        <Input
          placeholderText={"Input text"}
          labelText={"Title"}
          onChange={(e) => setTitle(e.target.value)}
          // style={getErrorInputStyle("email")}
        />
        <label>
          Description
          <textarea
            className={styles.description}
            data-testid="descriptionTextArea"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <div className={styles.infoWrapper}>
          <div>
            <div className={styles.duration}>
              <Input
                placeholderText={"Input text"}
                labelText={"Duration"}
                onChange={(e) => setDuration(e.target.value)}
                // style={getErrorInputStyle("email")}
              />
              <p>{getCourseDuration()}</p>
            </div>
            <h2>Authors</h2>
            <CreateAuthor onCreateAuthor={() => createAuthor} />
            <div className={styles.authorsContainer}>
              <h3>Authors List</h3>
              <ul style={{ listStyle: "none" }}>
                {authorsList.map((author) => (
                  <li key={author.id}>
                    <AuthorItem author={author} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.courseAuthorsContainer}>
            <h2>Course authors</h2>
            // use 'map' to display course autors. Reuse 'AuthorItem' component
            for each author
            <p className={styles.notification}>List is empty</p> // display this
            paragraph if there are no authors in the course
          </div>
        </div>
      </form>

      <div className={styles.buttonsContainer}>
        <Button buttonText={"CANCEL"} />
        <Button buttonText={"Create course"} />
      </div>
    </div>
  );
};
