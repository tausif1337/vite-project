import {ThemeProvider} from 'styled-components';
import ThemedButton from './components/ThemedButton';
import GlobalStyled from './components/GlobalStyled';

export default function App() {

  const myTheme = {
    dark: {
      backgroundColor: 'black',
      color: 'white',
    },
    light: {
      backgroundColor: 'white',
      color: 'black',
    },
  }



  return (
    <div>
      <ThemeProvider theme={myTheme}>
          <GlobalStyled />
          <ThemedButton>Click me</ThemedButton>
      </ThemeProvider>
    </div>
  );
}