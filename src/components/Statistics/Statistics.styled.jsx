import styled from 'styled-components';

export const StatisticsPercentage = styled.li`
color:${p => (p.children[1] >= 50 ? p.theme.colors.green : p.theme.colors.red)}}
`;
