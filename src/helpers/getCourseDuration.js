export const getCourseDuration = (duration) => {
  // write your solution here
  var hours = Math.floor(duration / 60);
  var minutes = duration % 60;
  let result = "";

  // padding zero if hours or minutes are less than 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  result =
    hours === 1 || minutes < 1
      ? hours + ":" + minutes + " hour"
      : hours + ":" + minutes + " hours";

  return result;
};
