import {useState} from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import {AntDesign, MaterialIcons} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const InputBox = () => {
    const [newMessage, setNewMessage] = useState('');

  const onSend = () => {
        console.warn('Sending a new message:', newMessage);

        setNewMessage('');
    };


    
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
        {/* Icon */}
        <AntDesign name='plus' size={20} color="royalblue" />

        {/* Text Input */}
        <TextInput 
        value={newMessage} 
        onChangeText={setNewMessage} 
        style={styles.input} 
        placeholder="Type here..." />

        {/* Icon */}
        <MaterialIcons onPress={onSend} style={styles.send} name='send' size={16} color="white" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    //Commented out because I don't need this color for now => backgroundColor: 'whitesmoke',
    padding: 7,
    paddingHorizontal: 10,
    marginTop: -50,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,

    borderRadius: 50,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    backgroundColor: 'royalblue',
    padding: 7,
    borderRadius: 15,
    overflow: 'hidden',
  },
});  

export default InputBox;