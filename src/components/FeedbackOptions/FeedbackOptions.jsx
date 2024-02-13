import StyledList, { ColorPattern } from './StyledList';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <StyledList>
      {options.map(el => (
        <li key={el}>
          <button
            style={{ backgroundColor: ColorPattern[el] }}
            onClick={() => onLeaveFeedback(el)}
          >
            {el.charAt(0).toUpperCase() + el.slice(1)}
          </button>
        </li>
      ))}
    </StyledList>
  );
}
