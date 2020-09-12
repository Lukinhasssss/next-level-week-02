import React, { useState } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import api from '../../services/api'

import styles from './styles'
import { useFocusEffect } from '@react-navigation/native'

function TeacherList() {
    const [ teachers, setTeachers ] = useState([])
    const [ favorites, setFavorites ] = useState<number[]>([])
    const [ isFiltersVisible, setIsFiltersVisible ] = useState(false)

    const [ subject, setSubject ] = useState('')
    const [ week_day, setWeekDay ] = useState('')
    const [ time, setTime ] = useState('')

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => { // response é o retorno do meu banco de dados
            if (response) { // Se vier alguma coisa no response...
                const favoritedTeachers = JSON.parse(response)
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => { // Aqui eu terei um array de Ids de professores
                    return teacher.id
                })

                setFavorites(favoritedTeachersIds)
            }
        })
    }

    useFocusEffect(() => {
        loadFavorites()
    })

    function handletoggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible)
    }

    async function handleFiltersSubmit() {
        loadFavorites()

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        })

        setIsFiltersVisible(false) // Para fechar depois de filtrar
        setTeachers(response.data)
    }

    return (
        <View style={ styles.container }>
            <PageHeader
                title="Proffys disponíveis"
                headerRight={(
                    <BorderlessButton onPress={ handletoggleFiltersVisible }>
                        <Feather name="filter" size={20} color="#FFF" />
                    </BorderlessButton>
                )}>
                { isFiltersVisible && (
                    <View style={ styles.searchForm }>
                        <Text style={ styles.label }>Matéria</Text>
                        <TextInput
                            style={ styles.input }
                            value={ subject }
                            onChangeText={ text => setSubject(text) }
                            placeholder="Qual a matéria?"
                            placeholderTextColor="#C1BCCC"
                            />

                        <View style={ styles.inputGroup }>
                            <View style={ styles.inputBlock }>
                                <Text style={ styles.label }>Dia da semana</Text>
                                <TextInput
                                    style={ styles.input }
                                    value={ week_day }
                                    onChangeText={ text => setWeekDay(text) }
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="#C1BCCC"
                                />
                            </View>

                            <View style={ styles.inputBlock }>
                                <Text style={ styles.label }>Horário</Text>
                                <TextInput
                                    style={ styles.input }
                                    value={ time }
                                    onChangeText={ text => setTime(text) }
                                    placeholder="Qual o horário?"
                                    placeholderTextColor="#C1BCCC"
                                />
                            </View>
                        </View>

                        <RectButton onPress={ handleFiltersSubmit } style={ styles.submitButton }>
                            <Text style={ styles.submitButtonText }>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
            style={ styles.teacherList }
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 24
            }}
            >
                {/* { teachers.map(teacher => <TeacherItem />) } */}
                { teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={ teacher.id }
                            teacher={ teacher }
                            favorited={ favorites.includes(teacher.id) }
                        />)
                })}
            </ScrollView>
        </View>
    )
}

export default TeacherList

/*

    Eu importo a ScrollView de dentro do 'react-native'

    contentContainerStyle:
        - Aplica estilos no conteúdo da minha ScrollView

    useEffect():
        - Para disparar alguma função assim que o componente for exibido em tela
        - Recebe uma função que é qual função será disparada e recebe um array que significa quando ela será disparada
        - Se eu deixar o array vazio ela vai ser disparada uma vez só no começo do componente
        - Se eu passar uma variável no array então toda vez que ela mudar a função será disparada

*/