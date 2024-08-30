import { Button, StyleSheet, Text, View } from 'react-native';
import Titulo from './src/components/title/Title';
import From from './src/components/form/resultimc/From';

export default function App() {
  
  
  return (
    <View style={styles.container}>
      <Titulo />
      <From />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12E08E',
    paddingTop: 50,
    borderRadius: 30,
  },
});
