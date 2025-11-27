import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'black' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="construcao"
        options={{
          title: 'Construção',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="construction" color={color} />,
          headerShown: false,
        }}/>
         <Tabs.Screen
        name="iclinacao"
        options={{
          title: '  Inclinação',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="slope-downhill" color={color} />,
          headerShown: false,
        }}/>
         <Tabs.Screen
        name="localizacao"
        options={{
          title: ' Localização',
          tabBarIcon: ({ color }) => <Entypo size={28} name="location-pin" color={color} />,
          headerShown: false,
        }}/>
         <Tabs.Screen
        name="dentro"
        options={{
          title: 'Dentro',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="church" color={color} />,
          headerShown: false,
        }}/>
        
      <Tabs.Screen
        name="aboutme"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) => <Ionicons name="people" size={24} color="black" />,
           headerShown: false,
        }}/>
        
      
      
    </Tabs>
  
  );
} 
