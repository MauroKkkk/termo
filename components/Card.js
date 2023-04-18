import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native-web';
import Palavra from './Palavra';

export default function Card() {
 return (
   <View style={styles.Container}>
        <View style={styles.Layout}>
        <Palavra/>
        <Palavra/>
        <Palavra/>
        <Palavra/>
        <Palavra/>
        <Palavra/>
        </View>
   </View>
  );
}


const styles = StyleSheet.create({
    Container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    Layout:{
        width: "85%",
        height: '60%',
    },
})