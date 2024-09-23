'use client';
import * as Styles from './feedback.styles';
import {feedbackData} from '../candidateTypes';

const FeedbackList = (
  { data }: {
    data: feedbackData[],
    setData: (key: string, value: any) => void
  }
) => {

  return (
    <Styles.container>
      {data.map((feedback) =>
        <Styles.feedbackContainer>
          <Styles.feedback>
            <Styles.feedbackTitle>
              {feedback.feedbackTitle} - {feedback.userName}
            </Styles.feedbackTitle>
            <Styles.feedbackBody>
              {feedback.feedbackBody}
            </Styles.feedbackBody>
          </Styles.feedback>
        </Styles.feedbackContainer>
      )}
    </Styles.container>
  );
};

export default FeedbackList;
