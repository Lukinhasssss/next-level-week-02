import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import styles from './styles'

function Favorites() {
    const [ favorites, setFavorites ] = useState([])

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => { // response é o retorno do meu banco de dados
            if (response) { // Se vier alguma coisa no response...
                const favoritedTeachers = JSON.parse(response)

                setFavorites(favoritedTeachers)
            }
        })
    }

    useFocusEffect(() => { // Executa toda vez que a tela entrar em foco (quando uma tab estiver selecionada)
        loadFavorites()
    })

    return (
        <View style={ styles.container }>
            <PageHeader title="Meus proffys favoritos" />

            <ScrollView
            style={ styles.teacherList }
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 24
            }}
            >
                { favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={ teacher.id }
                            teacher={ teacher }
                            favorited
                        />
                    )
                }) }
            </ScrollView>
        </View>
    )
}

export default Favorites