import React,{ useState, useEffect } from 'react';
import { Text } from 'react-native';

const Clock = (props) =>{
    const [clock, setClock] = useState(new Date().toLocaleTimeString('pl-PL', props.options));

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setClock(new Date().toLocaleTimeString('pl-PL', props.options));
        },1000);
        return()=>clearInterval(intervalId);
    },[]);

    return(
        <Text style={props.styles}>{clock}</Text>
    )
}

export default Clock;
