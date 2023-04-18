import React, {useState} from 'react';
import { View, StyleSheet, TextInput } from 'react-native-web';

export default function Palavra() {
    const [word, setWord] = useState("");
 return (
    <View style={{flexDirection: "row", justifyContent: "space-around"}}>
        <View style={styles.Input}>
            <TextInput 
                maxLength={1} 
                style={{height:50, fontSize: 48, textAlign: "center", color:"#fafaff", padding:0, fontFamily: 'sans-serif', fontWeight: 600, borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0,}} 
                value={word} onChangeText={(text) => setWord(text.toUpperCase())}
            />
        </View>
        <View style={styles.Input}>
            <TextInput 
                maxLength={1} 
                style={{height:50, fontSize: 48, textAlign: "center", color:"#fafaff", padding:0, fontFamily: 'sans-serif', fontWeight: 600, borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0,}} 
                value={word} onChangeText={(text) => setWord(text.toUpperCase())}
            />
        </View>
        <View style={styles.Input}>
            <TextInput 
                maxLength={1} 
                style={{height:50, fontSize: 48, textAlign: "center", color:"#fafaff", padding:0, fontFamily: 'sans-serif', fontWeight: 600, borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0,}} 
                value={word} onChangeText={(text) => setWord(text.toUpperCase())}
            />
        </View>
        <View style={styles.Input}>
            <TextInput 
                maxLength={1} 
                style={{height:50, fontSize: 48, textAlign: "center", color:"#fafaff", padding:0, fontFamily: 'sans-serif', fontWeight: 600, borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0,}} 
                value={word} onChangeText={(text) => setWord(text.toUpperCase())}
            />
        </View>
        <View style={styles.Input}>
            <TextInput 
                maxLength={1} 
                style={{height:50, fontSize: 48, textAlign: "center", color:"#fafaff", padding:0, fontFamily: 'sans-serif', fontWeight: 600, borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0,}} 
                value={word} onChangeText={(text) => setWord(text.toUpperCase())}
            />
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
    Input:{
        height: 65,
        width: 68,
        borderWidth: 5,
        borderRadius: 10,
        borderStyle: "solid",
        borderColor: "#4c4347",
        marginBottom: 3,
    }
})