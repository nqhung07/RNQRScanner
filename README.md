# RNQRScanner
A mini App scan QR code

- This App use the libraries bellow:

* react-native-qrcode-scanner
* react-navigation
* react-native-camera

First, install the react-native-camera library:

$ npm install --save react-native-camera

Then link the library with the native platform:

$ react-native link react-native-camera

Follow https://react-native-community.github.io/react-native-camera/docs/installation

- next installation:

$ npm install --save react-native-qrcode-scanner

Then link the library:

$ react-native link react-native-qrcode-scanner

- Add in android/app/src/main/AndroidManifest.xml
<uses-permission android:name="android.permission.VIBRATE"/>

- Add in android/app/build.gradle

android {
...
    defaultConfig {
    ...
        missingDimensionStrategy 'react-native-camera', 'general'
    }
}

- React Native Permissions: 
$ npm install --save react-native-permissions @react-native-community/async-storage

- After this, make sure to add the required permissions. Weâ€™ll link these with the native platform, so use the following command:

$ react-native link react-native-permissions

- Finally, weâ€™ll need to navigate between screens, so install the react-navigation library

$ yarn add react-navigation

$ yarn add react-native-reanimated react-native-gesture-handler react-native-screens@^1.0.0-alpha.23

* Add android/build.gradle
buildscript {
    ext {
       ...
        supportLibVersion = "28.0.3"
    }