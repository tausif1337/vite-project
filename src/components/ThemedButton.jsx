import styled from 'styled-components';

const ThemedButton = styled.button`
    background-color: ${({ theme }) => theme.dark.backgroundColor};
    color: ${({ theme }) => theme.dark.color};
`;

export default ThemedButton;