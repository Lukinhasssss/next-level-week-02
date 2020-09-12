import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import giveClassesBgImage from '../../assets/images/give-classes-background.png'

import styles from './styles'

function GiveClasses() {
    const navigation = useNavigation()

    function handleNavigateToBack() {
        navigation.goBack()
    }

    return (
        <View style={ styles.container } >
            <ImageBackground resizeMode="contain" source={ giveClassesBgImage } style={ styles.content } >
                <Text style={ styles.title }>
                    Quer ser um Proffy?
                </Text>
                <Text style={ styles.description }>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton onPress={ handleNavigateToBack } style={ styles.okButton }>
                <Text style={ styles.okButtonText }>Tudo bem</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses

/*
    ImageBackground:
        -- Funciona do mesmo jeito que o Image mas diferente do Image o ImageBackground aceita componentes filhos dentro dele, ou seja, ele aceita conteúdo dentro dele
        -- Todo ImageBackground precisa receber um tamanho se não a aplicação da erro

*/