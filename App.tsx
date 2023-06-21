import theme from '@theme/index';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { StatusBar } from 'react-native';

import Groups from './src/screens/Groups';
import { Players } from '@screens/Players';
import { NewGroups } from '@screens/NewGroup';
import { Loading } from '@components/Loading';

export default function App() {
  const [ fontsLoaded ] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
     {fontsLoaded ? <Groups/> : <Loading/>}
    </ThemeProvider>
  );
}
