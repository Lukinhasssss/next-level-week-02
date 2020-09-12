import React, { ReactNode } from 'react'
import { View, Text, Image } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

import styles from './styles'

interface PageHeaderProps {
    title: string;
    headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children, headerRight }) => {
    const navigation = useNavigation()

    function handleGoBack() {
        navigation.navigate('Landing')
    }

    return (
        <View style={ styles.container }>
            <View style={ styles.topBar }>
                <BorderlessButton onPress={ handleGoBack }>
                    <Image source={ backIcon } resizeMode="contain" />
                </BorderlessButton>

                <Image source={ logoImg } resizeMode="contain" />
            </View>

            <View style={ styles.header }>
                <Text style={ styles.title }>{ title }</Text>
                { headerRight }
            </View>

            { children }
        </View>
    )
}

export default PageHeader

/*
    BorderlessButton:
        - É utilizado para botão sem fundo (background) diferente do RectButton

    ReactNode:
        - Significa que eu posso receber um componente como propriedade

*/