export const createUser = async (formState) => {
  // write your code here
  const url = "http://localhost:4000/register";
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formState),
  });
  const data = await response.json();
  console.log(data);
};

export const login = async (formState) => {
  const url = "http://localhost:4000/login";
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formState),
  });
  return await response.json();
};

export const getCourses = async () => {
  // write your code here
};

export const getAuthors = async () => {
  // write your code here
};

export const getCurrentUser = async () => {
  // write your code here
};

export const updateCourseService = async () => {
  // write your code here
};

export const logout = async () => {
  // write your code here
};

export const deleteCourseService = async () => {
  // write your code here
};

export const createCourse = async () => {
  // write your code here
};

export const createAuthor = async () => {
  // write your code here
};
