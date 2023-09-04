import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  const [lower, setLower] = useState('')
  const [upper, setUpper] = useState('')

  const calculate = (age) => {
    const resultLower = (220 - age) * 0.65
    const resultUpper = (220 - age) * 0.85
    setLower(resultLower.toFixed(0))
    setUpper(resultUpper.toFixed(0))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
      placeholder='Enter age'
      keyboardType='numeric'
      value={age}
      onChangeText={(text) => {
        setAge(text)
        calculate(text)
      }}
      />
      <Text style={styles.field}>Hr limits</Text>
      <Text style={styles.field}>{lower} - {upper}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  field: {
    marginBottom: 10,
    marginTop: 10,
  },
});
