import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import {db} from './src/firebasaConnection'
import {doc, getDoc, onSnapshot} from 'firebase/firestore'
export default function fire(){

  const [nome, setNome] = useState("Carregando")

  useEffect (() => {
  async function getDados() {
    onSnapshot(doc(db,"users", "1"), (doc) => {
      setNome(doc.data()?.nome)

    })
   

  }
    getDados();
  }, [])

  return(
    <View>
      <Text> Nome: {nome}</Text>
    </View>
  )
}