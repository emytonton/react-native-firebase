import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useEffect, useState } from "react";
import {db} from './src/firebasaConnection'
import {doc, getDoc, onSnapshot, setDoc, collection, addDoc} from 'firebase/firestore'
export default function fire(){

  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();
  const [cargo, setCargo] = useState();
  const [showForm, setShowForm] = useState(true);


  useEffect (() => {
  async function getDados() {
  }
    getDados();
  }, [])

   async function register(){
    
    await addDoc(collection(db,"users"),{
      nome: nome,
      idade: idade,
      cargo: cargo 
    })
    .then( () => {
      console.log("CADASTRADO COM SUCESSO"),
      setIdade("")
      setNome("")
      setCargo("")
    })
    .catch((err) => {
      console.log("err")
    })
  }

   function esconder (){
      setShowForm(!showForm);
   }


  return(
    <View style = {{alignItems: 'center', marginTop: 200}}>
      {showForm && (
          <View> 
          <Text style = {{fontSize: 20}}> Nome: {nome}</Text>

          <TextInput
          style = {{ fontSize: 16, marginBottom: 20, marginTop: 20, borderWidth: 1,}}
          placeholder="Digite seu nome aqui..."
          value={nome}
          onChangeText={(text) => setNome(text)}
          >
          </TextInput>



          <TextInput
          style = {{ fontSize: 16, marginBottom: 20, marginTop: 20, borderWidth: 1,}}
          placeholder="Digite sua idade aqui..."
          value={idade}
          onChangeText={(text) => setIdade(text)}
          >
          </TextInput>



          <TextInput
          style = {{ fontSize: 16, marginBottom: 20, marginTop: 20, borderWidth: 1,}}
          placeholder="Digite seu cargo aqui..."
          value={cargo}
          onChangeText={(text) => setCargo(text)}
          >
          </TextInput>

          <TouchableOpacity style ={{alignItems: 'center', marginTop: 20}} onPress={register}>
            <Text style = {{backgroundColor: "pink", padding: 8, color : 'white', width: 100, borderRadius: 8, textAlign: 'center'}}> Adicionar </Text>
          </TouchableOpacity>

          
            </View>
          )}

          <TouchableOpacity style ={{alignItems: 'center', marginTop: 20}} onPress={esconder}>
            <Text style = {{backgroundColor: "pink", padding: 8, color : 'white', width: 100, borderRadius: 8, textAlign: 'center'}}> 

            {showForm ? "Esconder formulario" : "Abrir Formulario"}    
              
           </Text>
          </TouchableOpacity>

          

    </View>
  )
}