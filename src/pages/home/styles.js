import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
    inputCep:{
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 10,
        padding: 5,
        width: wp('90%'),
        textAlign: 'center',
    },
    botaobuscar:{
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 10,
        padding: 10,
        margin: 5,
        width: wp('90%'),
        backgroundColor: "rgb(138, 5, 190)",
    },
    botaotexto:{
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
    },
    header:{
        backgroundColor: "rgb(138, 5, 190)",
        height:hp('10%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoheader:{
        color: '#fff',
        fontSize: hp('3.5%'),
        fontWeight: 'bold',
    },
    logo:{
        resizeMode: "contain",
        height:hp('50%'),
    },
    dados:{
        flex:1,
        borderWidth: 1,
        width:wp("90%"),
        padding: 5,
        borderRadius:10,
    },
    loading:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width:wp("90%"),
    }
});

export default Styles;
