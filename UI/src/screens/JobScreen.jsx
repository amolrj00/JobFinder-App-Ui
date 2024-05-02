import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const JobScreen = () => {
    return (
        <>
            <StatusBar translucent backgroundColor='transparent' />
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View>
                    <Image source={require('../../assets/office.jpg')} style={{ width: '100%', height: 300, resizeMode: 'cover' }} />
                    <View style={{ backgroundColor: '#fff', position: 'absolute', 
                    width: 70, height: 70, alignSelf: 'center', bottom: -35, borderRadius: 30 }}>
                        <Image source={require('../../assets/google_banner.png')} 
                        style={{ width: '90%', height: '90%',position: 'absolute',alignSelf: 'center'}} />
                    </View>

                    
                </View>
                <View style={{marginTop: 30, justifyContent: 'centers', alignItems: 'center',}}>
                    <Text style={{fontSize: 24, fontWeight: '600'}}>Security Engineering Manager</Text>
                    <Text  style={{fontSize: 16, fontWeight: '300'}}>California, USA</Text>

                    </View>

                <View style={{padding: 10,}}>
                <Text  style={{fontSize: 20, fontWeight: '600', marginBottom:10}}>Responsibilities</Text>
                <Text>{`Experience in Secure Development Lifecycle and Shift Left with a Security by design methodology.`}</Text>
                <Text>{`Experience in working on AWS WAF platform`}</Text>
                </View> 
                <View style={{padding: 16,}}>
                <Text  style={{fontSize: 20, fontWeight: '600', marginBottom:10}}>Qualifications</Text>
                <Text>{`Bachelor/ Masters degree IT/ Computer science or a related field of study.`}</Text>
                </View> 
                <View style={{padding: 16,}}>
                <Text  style={{fontSize: 20, fontWeight: '600', marginBottom:10}}>Skills Needed</Text>
                <Text>{`Linux, SQL, Jenkins, Kubernets, AWS`}</Text>
                </View> 
                
                <View style={{ flexDirection: 'row', padding:16, position: 'absolute', bottom: 0}}>
                <TouchableOpacity style={{flex:1, marginRight:16,justifyContent: 'center',alignItems: 'center', 
                    backgroundColor: '#3F6CDF', padding: 16, borderRadius: 16}}>
                <Text style={{color: '#fff'}}>Apply Job</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: '#3F6CDF',padding: 16, borderRadius: 16}}>
                <Ionicons name='chatbox-ellipses-outline' size={24} color='#fff'/>
                </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

export default JobScreen;
