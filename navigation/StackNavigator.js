import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import AddScreen from '../screens/AddScreen';
import EditTaskScreen from '../screens/EditTaskScreen';
import { TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: globalStyles.header,
          headerTintColor: '#fff',
          headerTitleStyle: globalStyles.headerTitle,
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={({ navigation }) => ({
            title: 'Home',
            headerRight: () => (
              <TouchableOpacity 
                style={globalStyles.TopButton}
                onPress={() => navigation.navigate('Add')}
              >
                <Text style={globalStyles.TopButtonText}> + Add</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            title: 'Details',
          }}
        />
        <Stack.Screen name="Add" component={AddScreen} />
        <Stack.Screen name="EditTask" component={EditTaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}