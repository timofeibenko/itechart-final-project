import React, { FunctionComponent, useRef, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import store from '../redux/store';
import questionStore from '../redux/hooks/useQuestionStore';

import Header from '../components/smart/Header';
import Questions from '../components/smart/Questions';
import Spinner from '../components/dumb/Spinner';
import ContentContainer from '../components/dumb/ContentContainer';

import { HEADER_HEIGHT } from '../components/constants';
import { RootState } from '../common/config/interfaces';

const HomeContainer = styled.div`
  height: calc(100% - ${HEADER_HEIGHT});
  background: #ffffff;
`;

const Home: FunctionComponent = (): JSX.Element => {
  const initQuestionsState = useSelector(
    (state: RootState) => state.questionsState
  );
  const questionsState = useRef(initQuestionsState);
  questionsState.current = initQuestionsState;

  useEffect(() => {
    store.dispatch(questionStore());
  }, []);

  return (
    <>
      {questionsState.current.loading ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <ContentContainer>
            <HomeContainer>
              <Questions questionsState={questionsState} withUserName />
            </HomeContainer>
          </ContentContainer>
        </>
      )}
    </>
  );
};

export default Home;
