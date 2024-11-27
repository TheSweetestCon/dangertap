import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import { Routes } from './src/routes';
import {AuthProvider} from './src/global/AuthContext/AuthGlobal'
//import 'react-native-gesture-handler';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
      
  );
}