import React,{ useState, useEffect } from 'react';
import { View, Text, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const ClockScreen = ({route}) =>{
    const clockOptions = {hour:'numeric', minute:'numeric', second:'numeric', hour12:false, timeZone:route.params.timeZone}
    const dataOptions ={weekday:'long',year:'numeric',month:'long',day:'numeric', timeZone:route.params.timeZone};

    const [clock, setClock] = useState(new Date().toLocaleString('pl-PL', clockOptions));
    const [data, setData] = useState(new Date().toLocaleString('pl-PL', dataOptions))

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
        <View style={styles.main}>
            <Text style={[styles.clock, styles.mainClock]}>{clock}</Text>
            <Text style={[styles.clock, styles.timeZone]}>{route.params.timeZone}</Text>
            <Text style={[styles.clock, ]}>{data}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor: '#B0DAFF',
        textAlign:'center'
    },
    clock:{
        color:'white',
        fontWeight: '600',
    },
    mainClock:{
        fontSize:wp('15%'),
    },
    timeZone:{
        marginTop:hp('-1%'),
        fontSize:wp('7%'),
    }
})

export default ClockScreen;