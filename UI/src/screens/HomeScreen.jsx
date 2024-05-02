import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView , Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const HomeScreen = ({ route, navigation }) => {
    return (
        <View style={{ flex: 1, marginTop: 0 }}> 
            <View style={{
                flex: 0.18,
                backgroundColor: '#3F6cdf',
                padding: 16,
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 32,
                }}>
                    <View>
                        <Text style={{
                            color: '#fff',
                        }}>Hello</Text>
                        <Text style={{
                            color: '#fff',
                            fontSize: 24,
                            fontWeight: '600'  
                        }}>
                            Amol Jadhav</Text> 
                    </View>
                    <Ionicons name='notifications-outline' size={24} color= '#fff'/>
                </View>

                <View style={{
                    backgroundColor:'#fff',
                    padding: 12,
                    borderRadius: 16,
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: -25,
                    width: 350,
                    alignSelf: 'center'

                }}> 
                    <Ionicons name='search' size={24} color= '#171716'/>
                    <TextInput placeholder='searchjob, company, etc.'
                    placeholderTextColor={'#171716'}
                    style={{
                        marginLeft: 8,
                        flex: 1,
                    }}/>
                </View>
            </View>

            <View style={{
                flex: 0.82,
                padding: 16,
            }}>
            <Text style={{
                marginVertical:32,
                fontSize:24,
                fontWeight: '600',
                marginBottom:20
            }}>Recommendations</Text>

            <View style={{height: 200, }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{
                backgroundColor: '#fff',
                padding: 16,
                borderRadius: 16,
                width: 300,
                marginRight: 16
            }}>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
            <AntDesign name="facebook-square" size={24} color="#3F6cdf" />
            <View style={{ marginLeft: 8}}>
            <Text style={{fontSize: 16, fontWeight: '600'}}>FaceBook</Text>
            <Text  style={{fontSize: 12, fontWeight: '400'}}>California, USA</Text>

            </View>
           
            </View>

            <Ionicons name='bookmark-outline' size={24} color={'#000'}/>

            
            </View>
            <Text style={{marginTop:16, fontSize: 18, fontWeight: '600'}}>Ui Designer</Text>
            <Text style={{fontSize: 12, fontWeight: '400'}}>Senior + Remote + Fulltime</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, justifyContent:'space-between'}}>
            <TouchableOpacity style={{backgroundColor: '#3F6CDF',padding: 12, borderRadius: 16}}>
            <Text style={{ color: '#fff'}}>Apply Now</Text>

            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: '500'}}>$100k/Year</Text>
            </View>


            
            </View>


            
            
            
            
            






            <View style={{
                backgroundColor: '#fff',
                padding: 16,
                borderRadius: 16,
                width: 300,
                marginRight: 16
            }}>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
            <FontAwesome name="pinterest-square" size={24} color="#ed0347" />
            <View style={{ marginLeft: 8}}>
            <Text style={{fontSize: 16, fontWeight: '600'}}>WhatsApp</Text>
            <Text  style={{fontSize: 12, fontWeight: '400'}}>Menlo Park, USA</Text>

            </View>
           
            </View>

            <Ionicons name='bookmark-outline' size={24} color={'#000'}/>

            
            </View>
            <Text style={{marginTop:16, fontSize: 18, fontWeight: '600'}}>Ui Designer</Text>
            <Text style={{fontSize: 12, fontWeight: '400'}}>Senior + Remote + Fulltime</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, justifyContent:'space-between'}}>
            <TouchableOpacity style={{backgroundColor: '#3F6CDF',padding: 12, borderRadius: 16}}>
            <Text style={{ color: '#fff'}}>Apply Now</Text>

            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: '500'}}>$80k/Year</Text>
            </View>


            
            </View>





            <View style={{
                backgroundColor: '#fff',
                padding: 16,
                borderRadius: 16,
                width: 300,
                marginRight: 16
            }}>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
            <FontAwesome5 name="whatsapp-square" size={24} color="#2e8411" />
            <View style={{ marginLeft: 8}}>
            <Text style={{fontSize: 16, fontWeight: '600'}}>WhatsApp</Text>
            <Text  style={{fontSize: 12, fontWeight: '400'}}>San Francisco, USA</Text>

            </View>
           
            </View>

            <Ionicons name='bookmark-outline' size={24} color={'#000'}/>

            
            </View>
            <Text style={{marginTop:16, fontSize: 18, fontWeight: '600'}}>Ui Designer</Text>
            <Text style={{fontSize: 12, fontWeight: '400'}}>Senior + Remote + Fulltime</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, justifyContent:'space-between'}}>
            <TouchableOpacity style={{backgroundColor: '#3F6CDF',padding: 12, borderRadius: 16}}>
            <Text style={{ color: '#fff'}}>Apply Now</Text>

            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: '500'}}>$120k/Year</Text>
            </View>


            
            </View>



            
            </ScrollView>
            </View>

            <Text style={{ marginVertical: 32, fontSize: 24, fontWeight: '600', marginBottom: 10, marginTop: 15}}>Recent Job List</Text>

            <ScrollView  showsVerticalScrollIndicator={false}>

            <TouchableOpacity style={{ backgroundColor: '#fff', padding:16, borderRadius: 16, marginBottom: 16}}
            onPress={() => navigation.navigate('Job')}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>

            <Image source={require('../../assets/Google.png')} style={{ width: 25, height: 25 }} />

            <View style={{ marginLeft: 8}}>
            <Text style={{ fontSize: 16, fontWeight: '600'}}>Security Engineering Manager</Text>
            <Text style={{fontSize: 12, fontWeight: '400'}}>Senior + Remote + Fulltime</Text>
            </View>

            </View>
            <Ionicons name='bookmark-outline' size={24} color={'#000'}/>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, justifyContent: 'space-between'}}>
            <Text style={{ fontSize: 18, fontWeight: '500'}}>$200k/Year</Text>
            <Text style={{ fontSize: 12, fontWeight: '400'}}>12 Minutes Ago</Text>


            </View>
            
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: '#fff', padding:16, borderRadius: 16, marginBottom: 16}}
            onPress={() => navigation.navigate('Job')}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>

            <AntDesign name="apple1" size={24} color="black" />

            <View style={{ marginLeft: 8}}>
            <Text style={{ fontSize: 16, fontWeight: '600'}}>Mobile App Developer</Text>
            <Text style={{fontSize: 12, fontWeight: '400'}}>Junior + Remote + Fulltime</Text>
            </View>

            </View>
            <Ionicons name='bookmark-outline' size={24} color={'#000'}/>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, justifyContent: 'space-between'}}>
            <Text style={{ fontSize: 18, fontWeight: '500'}}>$50k/Year</Text>
            <Text style={{ fontSize: 12, fontWeight: '400'}}>1 Day Ago</Text>


            </View>
            
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: '#fff', padding:16, borderRadius: 16, marginBottom: 16}}
            onPress={() => navigation.navigate('Job')}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>

            <Image source={require('../../assets/amazon.png')} style={{ width: 25, height: 25 }} />

            <View style={{ marginLeft: 8}}>
            <Text style={{ fontSize: 16, fontWeight: '600'}}>Cloud Customer Engineer, AI/ML</Text>
            <Text style={{fontSize: 12, fontWeight: '400'}}>Junior + Remote + Fulltime</Text>
            </View>

            </View>
            <Ionicons name='bookmark-outline' size={24} color={'#000'}/>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, justifyContent: 'space-between'}}>
            <Text style={{ fontSize: 18, fontWeight: '500'}}>$90k/Year</Text>
            <Text style={{ fontSize: 12, fontWeight: '400'}}>20 Hours Ago</Text>


            </View>
            
            </TouchableOpacity>


            <TouchableOpacity style={{ backgroundColor: '#fff', padding:16, borderRadius: 16, marginBottom: 16}}
            onPress={() => navigation.navigate('Job')}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>

            <FontAwesome name="cc-mastercard" size={24} color="#EA4335" />
            <View style={{ marginLeft: 8}}>
            <Text style={{ fontSize: 16, fontWeight: '600'}}>DataBase Administrator</Text>
            <Text style={{fontSize: 12, fontWeight: '400'}}>Fresher</Text>
            </View>

            </View>
            <Ionicons name='bookmark-outline' size={24} color={'#000'}/>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, justifyContent: 'space-between'}}>
            <Text style={{ fontSize: 18, fontWeight: '500'}}>$30k/Year</Text>
            <Text style={{ fontSize: 12, fontWeight: '400'}}>10 Hours Ago</Text>


            </View>
            
            </TouchableOpacity>
            </ScrollView>
            </View>
        </View>
    );
}

export default HomeScreen;
