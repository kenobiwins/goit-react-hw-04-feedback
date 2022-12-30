import PropTypes from 'prop-types';
import { StatisticsPercentage } from './Statistics.styled';

export const Statistics = ({
  bad,
  neutral,
  good,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      {/* {Object.entries(states).map((el, i) => {
        return (
          <li key={i}>
            {el[0]}: {el[1]}
          </li>
        );
      })} */}
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>total: {total}</li>
      <StatisticsPercentage>
        Positive feedback: {positivePercentage}%
      </StatisticsPercentage>
    </ul>
  );
};

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
