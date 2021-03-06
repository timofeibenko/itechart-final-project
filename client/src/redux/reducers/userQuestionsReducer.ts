import {
  SET_USER_QUESTION_DATA_ERROR,
  SET_USER_QUESTION_DATA_LOADING,
  SET_USER_QUESTION_DATA_SUCCESS,
} from '../actions';
import { IQuestionsState } from '../../common/config/interfaces';

const initState: Record<string, boolean | string | Record<string, any>> = {
  loading: false,
  error: '',
  data: [],
};

export default (
  state = initState,
  action: { type: string; payload: any }
): typeof initState => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_QUESTION_DATA_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_USER_QUESTION_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: [...payload],
      };
    }
    case SET_USER_QUESTION_DATA_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    default:
      return state;
  }
};
