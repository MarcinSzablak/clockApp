import React,{ useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const SmallClock = (props) =>{
    const clockOptions = {hour:'numeric', minute:'numeric', timeZone:props.timeZone}
    const dataOptions = {weekday:'long', timeZone:props.timeZone}
    const [clock, setClock] = useState(new Date().toLocaleString('pl-PL', clockOptions));
    const [data, setData] = useState(new Date().toLocaleString('pl-Pl', dataOptions))
    var city = props.timeZone.slice(props.timeZone.indexOf('/'))
    city = city.substring(1)
    city = city.replace('_', ' ')

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setClock(new Date().toLocaleString('pl-PL', clockOptions));
        },1000);
        return()=>clearInterval(intervalId);
    },[]);
    
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setData(new Date().toLocaleString('pl-PL', dataOptions));
        },1000);
        return()=>clearInterval(intervalId);
    },[]);

    return(
        <Pressable onPress={props.onPress}>
            <View style={styles.container}>
                <View style={styles.dumb}>
                    <Text style={[styles.dataText,{fontSize:hp('2.4%')}]}>{city}</Text>
                    <Text style={styles.dataText}>{data}</Text>
                </View>
                <View style={styles.clock}>
                    <Text style={styles.clockText}> {clock}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'300%',
        flexWrap:'wrap',
        flexDirection:'row',
        backgroundColor:'#DAF5FF',
        marginBottom:hp('1.5%'),
        padding:hp('1%'),
        width:wp('70%'),
        borderRadius:wp('2%'),
    },
    dumb:{
        flexDirection:'column',
        justifyContent:'center',
        width:'50%',
        textAlign:'center',
    },
    clock:{
        paddingRight:'',
        alignItems:'flex-end',
        justifyContent:'center',
        width:'50%',
    },
    clockText:{
        color:'#B1B1B1',
        fontSize:hp('4%'),
        fontWeight:'600'
    },
    dataText:{
        color:'#B1B1B1',
        fontWeight:'600'
    },
})

export default SmallClock;
