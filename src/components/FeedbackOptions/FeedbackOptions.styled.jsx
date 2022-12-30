import styled from 'styled-components';

export const Button = styled.button`
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  font-weight: 500;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.md};
  cursor: pointer;
  text-transform: capitalize;
  transition: transform 250ms linear, background-color 250ms linear;

  :first-child {
    margin-left: auto;
  }
  :last-child {
    margin-right: auto;
  }

  :hover {
    transform: scale(1.1);
    background-color: ${p => p.theme.colors.accent};
  }
`;
