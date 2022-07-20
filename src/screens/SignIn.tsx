import { useState } from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

import { Heading, Icon, VStack, useTheme } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';

import Logo from '../assets/logo_primary.svg';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function SignIn(){

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { colors } = useTheme();

  function handleSubmit() {
    if(!email || !password) {
      return Alert.alert('Entar', 'Informe email e senha!');
    }

    setIsLoading(true);

    auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error => {
      console.log(error)
      setIsLoading(false);

      if(error.code) {
        return Alert.alert('Error', 'E-mail ou Senha inválido!');
      }

      return Alert.alert('Error', 'Não foi possível acessar')

    }))

  }

  return (
    <VStack flex={1} alignItems='center' bg='gray.600' px={8} pt={24} >
        <Logo />

        <Heading color={'gray.100'} fontSize='xl' mt={12} mb={6}>
          Acesse sua conta
        </Heading>

        <Input
          placeholder='E-mail'
          mb={4}
          InputLeftElement={
            <Icon ml={4} as={ <Envelope color={colors.gray[300]} /> } />
          }
          onChangeText={setEmail}
        />

        <Input
          placeholder='Senha'
          InputLeftElement={
            <Icon ml={4} as={ <Key color={colors.gray[300]} /> } />
          }
          mb={8}
          secureTextEntry
          onChangeText={setPassword}
        />

        <Button
          title='Entrar'
          w='full'
          onPress={() => handleSubmit()}
          isLoading={isLoading}
        />
    </VStack>
  );
}
