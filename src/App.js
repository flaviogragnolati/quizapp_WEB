import { Button } from '@material-ui/core';
import { useMemo } from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar/NavBar';
import { ThemeWrapper } from './styles/ThemeWrapper';
import customTheme from './styles/ThemeWrapper/customTheme';
import { useThemeMode } from './styles/useThemeMode';

const StyledContainer = styled.div`
  background: ${(p) => p.theme.palette.background.paper};
  height: 64px;
  border: 1px solid ${(p) => p.theme.palette.divider};
`;
function App() {
  const [theme, toggleTheme] = useThemeMode();
  // let themeMode = theme === 'light' ? customTheme('light') : customTheme('dark');

  let themeMode = useMemo(() => customTheme(theme), [theme]);

  return (
    <ThemeWrapper theme={themeMode}>
      <div className="App">
        <NavBar toggleTheme={toggleTheme} />
        <StyledContainer>
          <h1>Test</h1>
          <h2>Test</h2>
          <p>Even more Test</p>
          <Button variant="contained" color="secondary">
            GOLA
          </Button>
          <Button variant="contained" color="primary">
            adsasd
          </Button>
        </StyledContainer>
      </div>
    </ThemeWrapper>
  );
}

export default App;
