import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[2]}px;
  width: ${p => p.theme.space[8]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.md};
  background-color: ${p => p.theme.colors.backgroundSecondary};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;
