import { ThunkDispatch } from 'redux-thunk';
import { getCourses } from '../../services';
import { setCourses } from '../slices/coursesSlice';

export const updateCourseThunk = () => {};

export const deleteCourseThunk = () => {};

export const createCourseThunk = () => {};

export const getCoursesThunk = () => {
	return async (dispatch: ThunkDispatch<any, any, any>) => {
		const { result } = await getCourses();
		dispatch(setCourses(result))
	};
};
