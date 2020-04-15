import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import styles from './styles';
import Exibir_Dados from '../../components/Exibir_Dados';

class index extends Component {
  constructor(props) {
    super(props);
    let visivel = false;
    this.state = {
        data: [],
        cep: null,
        visible: false,
        loading: false,
    };
  }

  BuscarCep(){
    this.setState({
      loading: true,
      data: [],
    });

    let url = "https://viacep.com.br/ws/";
    url = url + this.state.cep + "/json/";
    if(this.state.cep == null){
      Alert.alert(
        "Buscar CEP",
        "O campo do CEP está vazio!",
      );
      this.setState({
        loading: false,
        visible: false,
      });
    }else{
      fetch(url)
      .then((resposta)=>resposta.json())
      .then((dados)=>{
        if(dados.erro){
          Alert.alert(
            "Buscar CEP",
            "CEP Inválido!",
          );
          this.setState({
            loading: false,
            visible: false,
          });
        }else{
          this.setState({
            data: dados,
            loading: false,
            visible: true,
          });
        }
      }).catch(function(error){
        Alert.alert(
          "Buscar CEP",
          "CEP Inválido!",
        );
        this.setState({
          loading: false,
          visible: false,
        });
      });
      
    }
  }

  render() {
    return (
      <>
      <View style={styles.header}>
        <Text style={styles.textoheader}>Buscar CEP</Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../../assets/images/icone-roxo.png')}/>
          <TextInput style={styles.inputCep} placeholder={"Digite o seu CEP"} value={this.state.cep} onChangeText={cep => this.setState({cep: cep})} keyboardType={"numeric"} require></TextInput>
          <TouchableOpacity onPress={()=>{
            this.BuscarCep();
          }} style={styles.botaobuscar}>
            <Text style={styles.botaotexto}>Buscar CEP</Text>
          </TouchableOpacity>
          <Exibir_Dados data={this.state.data} visible={this.state.visible} loading={this.state.loading}></Exibir_Dados>
        </View>
        
      </ScrollView>
      </>
    );
  }
}

export default index;
