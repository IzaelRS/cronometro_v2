import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function App() {

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [customInterval, setCustomInterval] = useState();

  const startTimer = () => {
    setCustomInterval(
      setInterval(() => {
        changeTime();
      }, 1000)
    );
  };

  const stopTimer = () => {
    if (customInterval) {
      clearInterval(customInterval);
    }
  };

  const clear = () => {
    stopTimer();
    setSeconds(0);
    setMinutes(0);
  };


  const changeTime = () => {
    setSeconds((prevState) => {
      if (prevState + 1 == 60) {
        setMinutes(minutes + 1);
        return 0;
      }
      return prevState + 1;

    })
  };

  return (
    <View style={styles.container}>

      <Image
        source={require('./src/img/cronometro.png')}
        style={styles.img}
      />


      <Text style={styles.timer}>
        {minutes < 10 ? '0' + minutes : minutes}
        :
        {seconds < 10 ? '0' + seconds : seconds}


      </Text>


      {/* button*/}
      <View style={styles.areabtn}>

        <TouchableOpacity
          style={styles.button}
          onPress={stopTimer}
        >
          <FontAwesome name="hand-stop-o" color={'#9adcfa'} size={40} />
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.button}
          onPress={startTimer}
        >
          <Feather name="play" color={'#e91e63'} size={40} />
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.button}
          onPress={clear}
        >
          <Feather name="x" color={'#c0bdbc'} size={40} />
        </TouchableOpacity>

      </View>


    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#585455',
  },

  img: {
    tintColor: '#8b123b',
  },

  timer: {
    marginTop: -140, // 0.0
    color: '#b0a8ab',
    fontSize: 45,
    fontWeight: 'bold'
  },

  areabtn: {
    marginTop: 100,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

}) 