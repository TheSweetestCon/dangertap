import {Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View} from 'react-native'
import React, { useState } from 'react'

export default function App(){
  const [click,setClick] = useState(false);
  const {username,setUsername} =  useState("");
  const {password,setPassword} =  useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("./src/assets/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>
        Danger Tap!
      </Text>
      <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder='Email' value={username} onChangeText={setUsername} autoCorrect={false}
        autoCapitalize='none' />
        <TextInput style={styles.input} placeholder='Senha' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
        autoCapitalize='none'/>
      </View>
      <View style={styles.rememberView}>
        <View style={styles.switch}>
          <Switch  value={click} onValueChange={setClick} trackColor={{true : "#ff2d55" , false : "gray"}} />
            <Text style={styles.rememberText}>Lembrar</Text>
        </View>
        <View>
          <Pressable onPress={() => Alert.alert("Forget Password!")}>
            <Text style={styles.forgetText}>Esqueceu a senha?</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={() => Alert.alert("Login Successfuly!")}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
      </View>
      <Text style={styles.footerText}>Não tem uma conta?<Text style={styles.signup}>  Criar</Text></Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    
  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 40,
    color: "#ff2d55"
  },
  inputView:{
    gap: 15,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 15
  },
  input:{
    height: 50,
    paddingHorizontal: 20,
    borderColor: "#ff2d55",
    borderWidth: 1,
    borderRadius: 40
  },
  rememberView:{
    width: "100%",
    paddingHorizontal: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 15
  },
  switch:{
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center"
    
  },
  rememberText:{
    fontSize: 13
  },
  forgetText:{
    fontSize: 13,
    color: "#6b6b6b"
  },
  button:{
    backgroundColor: "#ff2d55",
    height: 45,
    borderColor: "#ff2d55",
    borderWidth: 1,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  }, 
  buttonView:{
    width:"100%",
    paddingHorizontal: 90
  },
  footerText : {
    textAlign: "center",
    color : "gray",
    fontSize : 13,
    marginTop: 15
  },
  signup : {
    color : "#ff2d55",
    fontSize : 13
  }
})