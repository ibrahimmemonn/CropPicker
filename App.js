import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getCameraPermission} from './src/helpers/PermissionsHelper';

function App() {
  const uploadPhoto = async () => {
    let permission = await getCameraPermission();
    if (permission) {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
      });
    }
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <TouchableOpacity
        onPress={uploadPhoto}
        style={{
          padding: 20,
          borderColor: '#AAAAAA',
          marginTop: 100,
          borderWidth: 1,
          borderStyle: 'dashed',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{color: '#AAAAAA'}}> Upload Photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
