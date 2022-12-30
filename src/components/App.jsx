import { useState } from 'react';

import { Container } from '../BaseStyles/BaseStyles.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';

export const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { bad, neutral, good } = feedbacks;

  const handleClick = e => {
    const key = e.target.textContent;
    return setFeedbacks(
      prevState => {
        return {
          ...prevState,
          [key]: prevState[key] + 1,
        };
      },
      [feedbacks]
    );
  };

  const countTotalFeedback = () => {
    const total = Object.values(feedbacks).reduce((acc, el) => {
      acc += el;
      return acc;
    }, 0);

    if (total) {
      return total;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const possitiveValue = [feedbacks].reduce((acc, el) => {
      acc += el['good'];
      return acc;
    }, 0);

    const result = (possitiveValue / total) * 100;
    if (!result) {
      return feedbacks.good;
    }
    return Math.round(result);
  };

  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(feedbacks)}
          onLeaveFeedback={handleClick}
        />
      </Section>

      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <NotificationMessage message={'There is no feedback'} />
        )}
      </Section>
    </Container>
  );
};
