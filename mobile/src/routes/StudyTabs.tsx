import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from '@expo/vector-icons'

import TeacherList from "../pages/Teacher List"
import Favorites from "../pages/Favorites"

const { Navigator, Screen } = createBottomTabNavigator()

function StudyTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64 // Para as abas ficarem um pouquinho maiores
                },

                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },

                iconStyle: {
                    flex: 0, // Para retirar do icone a capacidade de ocupar o maior espaço possível
                    width: 20,
                    height: 20
                },

                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16
                },

                inactiveBackgroundColor: '#FAFAFC',
                activeBackgroundColor: '#EBEBF5',

                inactiveTintColor: '#C1BCCC',
                activeTintColor: '#32264D'
            }}
        >
            <Screen
                name="TeacherList"
                component={ TeacherList }
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="ios-easel" size={ size } color={ focused ? '#8257E5' : color } />
                        )
                    }
                }}
                />
            <Screen
                name="Favorites"
                component={ Favorites }
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="ios-heart" size={ size } color={ focused ? '#8257E5' : color } />
                        )
                    }
                }}
                />
        </Navigator>
    )
}

export default StudyTabs

/*
    tabBarOptions:
        - Serve para alterar os estilos da barra de navegação

    elevation:
        - É a propriedade de sombras no Android. elevation: 0 --> remove as sombras

    shadowOpacity:
        - É a propriedade de sombras no IOS

    tabStyle:
        - É a estilização de cada uma das tabs

    labelStyle:
        - Para alterar o texto dentro das tabs

    inactiveBackgroundColor:
        - A cor de fundo da aba quando ela não estiver selecionada

    activeBackgroundColor:
        - A cor de fundo da aba quando ela estiver selecionada

    inactiveTintColor:
        - Cor do texto quando a aba não estiver selecionada

    tabBarLabel:
        - É o texto que a Screen (tela) vai ter na aba

    focused:
        - Quando a tab está selecionada

*/