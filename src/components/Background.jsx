import styled from 'styled-components';

const Background = styled.body`
    background-color: ${({ theme }) => theme.dark.backgroundColor};
    color: ${({ theme }) => theme.dark.color};
    align-items: center;
    justify-content: center;
`;

export default Background;