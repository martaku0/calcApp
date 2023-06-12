import { StyleSheet, Text, View, Button } from 'react-native';
import MyButton from './components/MyButton.js';
import { useState } from 'react';
import { Dimensions } from 'react-native';

export default function App() {

  const [operation, setOperation] = useState("")
  const [result, setResult] = useState("")
  const [orientation, setOrientation] = useState(true)

  const isPortrait = () => {
      let dim = Dimensions.get('screen');
      return dim.height >= dim.width;
  };

  Dimensions.addEventListener("change", () => {
    console.log(orientation)

    setOrientation(isPortrait())
 })

  function goOperation(op){
    switch(op){
      case '=':
        console.log('equal')
        break;
      case 'DEL':
        setOperation(operation.slice(0, -1))
        break;
      case 'C':
        setOperation("")
        setResult("")
        break;
      case ',':
      setOperation(operation + '.')
      break;
      default:
        setOperation(operation + op)
        break;
    }
  }

  function equalAll(){
    try{
      setResult(eval(operation))
    }
    catch{
      setResult("error")
    }
  }
  
  function equalSpecial(op){
    switch(op){
      case 'pow':
        try{
          setResult(Math.pow(eval(operation),2))
        }
        catch{
          setResult("error")
        }
        break;
      case 'sqrt':
        try{
          setResult(Math.sqrt(eval(operation)))
        }
        catch{
          setResult("error")
        }
        break;
      case 'sin':
        try{
          setResult(Math.sin(eval(operation)))
        }
        catch{
          setResult("error")
        }
        break;
      case 'cos':
        try{
          setResult(Math.cos(eval(operation)))
        }
        catch{
          setResult("error")
        }
        break;
      default:
        setResult("error")
        break;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.operationView}>
        <Text style={styles.opTxt}>{operation}</Text>
        <Text style={styles.resultTxt}>{result}</Text>
      </View>
      <View style={styles.buttons}>
        <MyButton func={goOperation} op="1" txtStyle={styles.txtBtn} style={orientation ? styles.btn : styles.btn2}/>
        <MyButton func={goOperation} op="2" txtStyle={styles.txtBtn} style={orientation ? styles.btn : styles.btn2}/>
        <MyButton func={goOperation} op="3" txtStyle={styles.txtBtn} style={orientation ? styles.btn : styles.btn2}/>
        <MyButton func={goOperation} op="4" txtStyle={styles.txtBtn} style={orientation ? styles.btn : styles.btn2}/>
        <MyButton func={goOperation} op="5" txtStyle={styles.txtBtn} style={orientation ? styles.btn : styles.btn2}/>
        {orientation ? "" :<MyButton func={equalSpecial} op="pow" txtStyle={styles.txtBtn} style={styles.btn2}/>}
        <MyButton func={goOperation} op="6" txtStyle={styles.txtBtn} style={orientation ? styles.btn : styles.btn2}/>
        <MyButton func={goOperation} op="7" txtStyle={styles.txtBtn} style={orientation ? styles.btn : styles.btn2}/>
        <MyButton func={goOperation} op="8" txtStyle={styles.txtBtn} style={orientation ? styles.btn : styles.btn2}/>
        <MyButton func={goOperation} op="9" txtStyle={styles.txtBtn} style={orientation ? styles.btn : styles.btn2}/>
        <MyButton func={goOperation} op="0" txtStyle={styles.txtBtn} style={orientation ? styles.btn : styles.btn2}/>
        {orientation ? "" :<MyButton func={equalSpecial} op="sqrt" txtStyle={styles.txtBtn} style={styles.btn2}/>}
        <MyButton func={goOperation} op="+" txtStyle={styles.txtBtn} style={orientation ? styles.btn : styles.btn2}/>
        <MyButton func={goOperation} op="-" txtStyle={styles.txtBtn} style={orientation ? styles.btn : styles.btn2}/>
        <MyButton func={goOperation} op="*" txtStyle={styles.txtBtn} style={orientation ? styles.btn : styles.btn2}/>
        <MyButton func={goOperation} op="/" txtStyle={styles.txtBtn} style={orientation ? styles.btn : styles.btn2}/>
        <MyButton func={goOperation} op="," txtStyle={styles.txtBtn} style={orientation ? styles.btn : styles.btn2}/>
        {orientation ? "" :<MyButton func={equalSpecial} op="sin" txtStyle={styles.txtBtn} style={styles.btn2}/>}
        <MyButton func={equalAll} op="=" txtStyle={styles.txtBtn} style={orientation ? styles.btn : styles.btn2}/>
        <MyButton func={goOperation} op="(" txtStyle={styles.txtBtn} style={orientation ? styles.btn : styles.btn2}/>
        <MyButton func={goOperation} op=")" txtStyle={styles.txtBtn} style={orientation ? styles.btn : styles.btn2}/>
        <MyButton func={goOperation} op="C" txtStyle={styles.txtBtn} style={orientation ? styles.btn : styles.btn2}/>
        <MyButton func={goOperation} op="DEL" txtStyle={styles.txtBtn} style={orientation ? styles.btn : styles.btn2}/>
        {orientation ? "" :<MyButton func={equalSpecial} op="cos" txtStyle={styles.txtBtn} style={styles.btn2}/>}
      </View>
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
  operationView: {
    backgroundColor: '#000',
    width: '100%',
    flex: 0.4,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  buttons: {
    backgroundColor: 'gray',
    width: '100%',
    flex: 0.6,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  btn: {
    backgroundColor: '#404040',
    width: "20%",
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1
  },
  btn2: {
    backgroundColor: '#404040',
    width: "16.6666666%",
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1
  },
  txtBtn: {
    color: 'white',
    fontSize: 30,
  },
  opTxt: {
    color: "white",
    textAlign: 'right',
    width: '100%',
    fontSize: 40,
    padding: 10
  },
  resultTxt: {
    backgroundColor: "#1f1f1f",
    color: "white",
    textAlign: 'right',
    width: '100%',
    fontSize: 40,
    padding: 10
  }
});
