import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  --s: 100px; /* control the size */
  --c1: #aaccb1;
  --c2: #d3e2b6;

  background: conic-gradient(at 25% 25%, #0000 75%, var(--c1) 0) 0
      calc(3 * var(--s) / 4),
    conic-gradient(#0000 75%, var(--c2) 0) calc(var(--s) / -8)
      calc(5 * var(--s) / 8),
    conic-gradient(at 25% 75%, var(--c1) 25%, var(--c2) 0);
  background-size: var(--s) var(--s);
`;

export default StyledSection;
