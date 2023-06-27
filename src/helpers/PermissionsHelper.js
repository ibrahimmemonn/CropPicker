import {Platform} from 'react-native';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';

export const getCameraPermission = async () => {
  return new Promise((resolve, reject) => {
    let permission =
      Platform.OS == 'android'
        ? PERMISSIONS.ANDROID.CAMERA
        : PERMISSIONS.IOS.CAMERA;
    request(permission)
      .then(result => {
        if (result == RESULTS.GRANTED) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
