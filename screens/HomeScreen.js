import { View, Text, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Clock from './components/clock';

const HomeScreen = () =>{
    const mainClockOptions = {hour:'numeric', minute:'numeric', second:'numeric', hour12:false, timeZone:'Europe/Warsaw'};
    const mainDataOptions = {weekday:'long', year:'numeric', month:'long', day:'numeric', timeZone:'Europe/Warsaw'}
    return(
        <View style={styles.mainComponent}>
            <Clock options={mainClockOptions} styles={[styles.clock, styles.mainClock]}/>
            <Clock options={mainDataOptions} styles={[styles.clock]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainComponent:{
        flex: 1,
        backgroundColor: '#B0DAFF',
        alignItems:'center'
    },
    clock:{
        color:'white',
    },
    mainClock:{
        fontWeight: '600',
        fontSize:wp('15%'),
        marginTop:hp('5%')
    }
})

export default HomeScreen;