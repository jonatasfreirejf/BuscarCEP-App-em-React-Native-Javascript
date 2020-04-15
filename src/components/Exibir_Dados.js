import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from '../pages/home/styles';

export default class Exibir_Dados extends Component {
  constructor(props) {
    super(props);
    
  }


  render() {
    const {visible, data, loading} = this.props;
    if(loading == true){
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="rgb(138, 5, 190)" />
        </View>
      )
    }else{
      if(visible == true){
        return (
            <View style={styles.dados}>
                <Text>Cep: {data?.cep}</Text>
                <Text>Rua/Av: {data?.logradouro}</Text>
                <Text>Bairro: {data?.bairro}</Text>
                <Text>Localidade: {data?.localidade}-{data?.uf}</Text>
            </View>
        );
      }else{
        return(
          <View></View>
        )
      }
    }
  }
}
