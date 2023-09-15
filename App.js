import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import TextComponent from './components/TextComponent'
import styles from './styles/AppStyle'

const App = () => {

  const [state, setState] = useState('Trạng thái của ứng dụng');

  updateState = () => {
    if(state=='Trạng thái của ứng dụng'){
      setState('The state is updated');
    }else{
      setState('Trạng thái của ứng dụng');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TextComponent 
          text={state}
          press={updateState}
        />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.redBox}></TouchableOpacity>
        <TouchableOpacity style={styles.blueBox}></TouchableOpacity>
        <TouchableOpacity style={styles.blackBox}></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default App