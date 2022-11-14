import React, { useState } from 'react';
import { Login } from './src/screens/Login';
import { StatusBar } from 'react-native';
import { Perfil } from './src/screens/Perfil';

function App() {
  return (
    <>
      <StatusBar barStyle='light-content'></StatusBar>
      <Perfil/>
    </>
  )
}

export default App
