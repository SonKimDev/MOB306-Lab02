import { StyleSheet } from "react-native"

const AppStyle = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#eef6f8',
    },
    top:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottom:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    redBox:{
      height: 100,
      width: 100,
      backgroundColor: 'red',
    },
    blueBox:{
      height: 100,
      width: 100,
      backgroundColor: 'blue',
    },
    blackBox:{
      height: 100,
      width: 100,
      backgroundColor: 'black',
    },
  })

export default AppStyle;