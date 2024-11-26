import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import { Routes } from './src/routes';
//import 'react-native-gesture-handler';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
      
  );
}