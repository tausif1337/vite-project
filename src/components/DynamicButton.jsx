import styled from 'styled-components';

const DynamicButton = styled.button`

    background-color: ${({ color }) => color === 'primary' ? 'blue' : color === 'warning' ? 'yellow' : 'red'};
    color: ${({ color }) => color === 'primary' ? 'white' : color === 'warning' ? 'black' : 'white'};

`;

export default DynamicButton;