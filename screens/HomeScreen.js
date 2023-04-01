import { View, FlatList, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Clock from './components/clock';
import SmallClock from "./components/smallClocks";

const HomeScreen = ({navigation}) =>{
    const mainClockOptions = {hour:'numeric', minute:'numeric', second:'numeric', hour12:false, timeZone:'Europe/Warsaw'};
    const mainDataOptions = {weekday:'long', year:'numeric', month:'long', day:'numeric', timeZone:'Europe/Warsaw'}
    const timeZones = [
        'US/Samoa', 'US/Hawaii', 'America/Adak', 'US/Alaska',
        'US/Pacific', 'America/Mexico_City', 'US/Central','US/Eastern', 
        'Canada/Atlantic', 'America/Noronha','Atlantic/Cape_Verde', 'Africa/Dakar',
        'Europe/London', 'Europe/Warsaw', 'Europe/Moscow', 'Europe/Samara', 
        'Asia/Oral', 'Asia/Omsk', 'Asia/Krasnoyarsk', 'Asia/Shanghai', 
        'Asia/Yakutsk', 'Australia/Brisbane', 'Australia/Sydney', 'Asia/Anadyr',
    ]
    return(
        <View style={styles.mainComponent}>
            <Clock options={mainClockOptions} styles={[styles.clock, styles.mainClock]}/>
            <Clock options={mainDataOptions} styles={[styles.clock, styles.mainData]}/>
            <FlatList
                style={styles.list}
                data={timeZones}
                renderItem={({item}) => 
                    <SmallClock 
                        onPress={() => navigation.navigate('Clock',{
                            timeZone: item
                        })}
                        timeZone={item}
                        styles={styles.clock}
                    />
                }
            />
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
        fontWeight: '600',
    },
    mainClock:{
        fontSize:wp('15%'),
        marginTop:hp('5%')
    },
    mainData:{
        fontSize:wp('5%'),
    },
    list:{
        marginTop:hp('2%')
    }
})

export default HomeScreen;