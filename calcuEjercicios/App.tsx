import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { plantilla } from './models/plantilla';

export default function App() {

  function calcular(horasDiarias: number[], objetivo: number): plantilla {
    const diasSemana = horasDiarias.length;
    const diasEntrenamiento = horasDiarias.filter(h => h > 0).length;
    const totalHoras = horasDiarias.reduce((suma, h) => suma + h, 0);
    const promedio = totalHoras / diasSemana;
    const objAlcansado = promedio >= objetivo;

    let calificacion = 1
    let explicacion = ''

    if (promedio < objetivo * 0.75) {
      calificacion = 1
      explicacion = 'hay que mejorar'
    } else if (promedio < objetivo) {
      calificacion = 2
      explicacion = 'cerca de la meta '
    } else {
      calificacion = 3
      explicacion = 'bien meta alcansada'
    }

    return {
      diasSemana,
      diasEntrenamiento,
      promedio,
      objAlcansado,
      calificacion,
      explicacion,
    };
  }

  const resultado = calcular([3, 0, 4.5, 0, 3, 1, 2], 2)
  console.log(resultado)


  return (
    <View style={styles.container}>
      <Text>probando</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
