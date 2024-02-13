import StyledStatistics from './StyledStatistics';
import { calcColor } from 'components/helpers/calculateColor';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <StyledStatistics>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p style={{ color: calcColor(positivePercentage) }}>
        Positive feedback: {positivePercentage}%
      </p>
    </StyledStatistics>
  );
}
