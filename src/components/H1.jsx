import styled from 'styled-components';

const H1 = styled.h1`
    color: ${({ color }) => color === 'primary' ? 'blue' : color === 'warning' ? 'yellow' : 'red'};
`;

export default H1;