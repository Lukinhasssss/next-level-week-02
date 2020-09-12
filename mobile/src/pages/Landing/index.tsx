import React, { useEffect, useState } from 'react'
import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import api from '../../services/api'

import styles from './styles'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

function Landing() {
    // const { navigate } = useNavigation() É possível fazer dessa forma fazendo uma desestruturação para utilizar somente a função navigate
    const navigation = useNavigation()
    const [ totalConnections, setTotalConnections ] = useState(0)

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data

            setTotalConnections(total)
        })
    }, [])

    function handleNavigateToGiveClassesPage() {
        navigation.navigate('GiveClasses')
    }

    function handleNavigateToStudyPages() {
        navigation.navigate('Study')
    }

    return (
        <View style={ styles.container }>
            <Image source={ landingImg } style={ styles.banner } />

            <Text style={ styles.title }>
                Seja bem vindo, {'\n'}
                <Text style={ styles.titleBold }>O que deseja fazer?</Text>
            </Text>

            <View style={ styles.buttonsContainer }>
                <RectButton onPress={ handleNavigateToStudyPages } style={[styles.button, styles.buttonPrimary]}>
                    <Image source={ studyIcon } />

                    <Text style={ styles.buttonText }>Estudar</Text>
                </RectButton>

                <RectButton onPress={ handleNavigateToGiveClassesPage } style={[styles.button, styles.buttonSecondary]}>
                    <Image source={ giveClassesIcon } />

                    <Text style={ styles.buttonText }>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={ styles.totalConnections }>
                Total de { totalConnections } conexões já realizadas {' '}
                <Image source={ heartIcon } />
            </Text>
        </View>
    )
}

export default Landing

/*

    TouchableOpacity:
        - Botão que quando eu clico em cima dele ele dá uma leve perda de opacidade

    onPress:
        - Em dispositivos mobile não tem clique de mouse então o onClick é substituido por onPress

    RectButton:
        - // Adapta o efeito do 'click' ao sistema operacional que o usuário estiver utilizando. Onde está RectButton era TouchableOpacity
*/