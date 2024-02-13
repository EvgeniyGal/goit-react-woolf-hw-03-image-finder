import StyledSection from './StyledSection';

export default function Section({ title, children }) {
  return (
    <StyledSection>
      <h1>{title}</h1>
      {children}
    </StyledSection>
  );
}
