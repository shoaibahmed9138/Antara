import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

const MerchantDashboard = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Welcome to Antara app.</Header>
    <Paragraph>Get all you customer Information here</Paragraph>
    <Button
      mode="outlined"
      onPress={() =>
        navigation.reset({
          index: 2,
          routes: [{ name: 'StartScreen' }],
        })
      }
    >
      Logout
    </Button>
  </Background>
)

export default MerchantDashboard
