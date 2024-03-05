import React, { useState } from "react";

import styles from "./App.module.css";
import { Header, Courses, CourseInfo } from "./components";
import { mockedAuthorsList, mockedCoursesList } from "./constants";

// Module 1:
// * use mockedAuthorsList and mockedCoursesList mocked data
// * add next components to the App component: Header, Courses and CourseInfo
// * pass 'mockedAuthorsList' and 'mockedCoursesList' to the Courses and CourseInfo components

// Module 2:
// * use mockedAuthorsList and mockedCoursesList mocked data
// * wrap your App with BrowserRouter in src/index.js
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-2/home-task/components#add-the-router-to-the-app-component

// Module 3:
// * wrap your App with Redux Provider in src/index.js
// * remove 'mockedAuthorsList' and 'mockedCoursesList' constants amd import and their use throughout the project
// * get courses and authors from the server. Use courses/all and authors/all GET requests.
// * save courses and authors to the store. Use 'setCourses' and 'setAuthors' actions from appropriate slices here 'src/store/slices'
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-3/home-task/components#app-component

// Module 4:
// * rewrite old GET requests /courses/all with 'getCoursesThunk' from 'src/store/thunks/coursesThunk.js' using getCourses service from 'src/services.js'.
// * rewrite old GET requests /authors/all with 'getAuthorsThunk' from 'src/store/thunks/authorsThunk.js' using getAuthors service from 'src/services.js'.
// * wrap 'CourseForm' in the 'PrivateRoute' component

function App() {
  // write your code here
  const [handleCourse, setComponent] = useState(false);
  const [onBack, setOnBack] = useState(false);

  console.log(handleCourse);
  const clickEvent = handleCourse.clickValue;
  const selectedCourseId = handleCourse.courseId;

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        {clickEvent ? (
          <CourseInfo
            authorsList={mockedAuthorsList}
            coursesList={mockedCoursesList}
            showCourseId={selectedCourseId}
          />
        ) : (
          <Courses
            authorsList={mockedAuthorsList}
            coursesList={mockedCoursesList}
            handleShowCourse={(handleCourse) => setComponent(handleCourse)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
