import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

const Root = createStackNavigator()

import { NavigationContainer, useNavigation } from '@react-navigation/native'
import IndexScreen from './src/screens/indexScreen'
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import {Feather, EvilIcons} from '@expo/vector-icons';
import EditScreen from './src/screens/EditScreen';


const App = () => {

  // const navigation = useNavigation();

  return ( 
    <Provider>
    <NavigationContainer documentTitle='Blog'>
      <Root.Navigator initialRouteName='Index'
      screenOptions={{
        headerTitle:'Blog'
      }}
      >
        <Root.Screen name="Index" component={IndexScreen} 
        options={({navigation}) => ({
          headerRight: () =>  (<Feather name='plus' size={30} 
          onPress={() => navigation.navigate('Create')}
          />)
        })}
        />
        <Root.Screen name="Show" component={ShowScreen}
        options={({route, navigation}) => ({
          headerRight: () =>  (<EvilIcons name='pencil' size={40} 
          onPress={() => navigation.navigate('Edit', {id: route.params.id})}
          />)
        })}
        />
        <Root.Screen name="Create" component={CreateScreen} />
        <Root.Screen name="Edit" component={EditScreen} />
        
      </Root.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App