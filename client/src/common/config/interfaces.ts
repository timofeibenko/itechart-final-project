import rootReducer from '../../redux/rootReducer';
import React from 'react';

export interface ISignUpUserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation?: string;
  username?: string;
  position?: string;
  experience?: number;
  languages?: (string | undefined)[];
}

export interface IUserData extends ISignUpUserData {
  questionQty: number;
  answerQty: number;
  likedAnswerQty: number;
  bestAnswerQty: number;
}

export type RootState = ReturnType<typeof rootReducer>;

export interface IQuestionsState extends React.MutableRefObject<any> {
  loading: boolean;
  data: Array<Record<string, any>>;
  error: string;
}

export interface IRoutes {
  [key: string]: Record<string, (...args: string[]) => string>;
}
