import React from 'react'
import { ScrollView } from 'react-native'
import { Container, P } from '../Styled'
import styled from 'styled-components'

import Navbar from './Navbar'

const ProfileOptions = ({ navigation, logout }) => (
    <Container>
        <Navbar
            back
            leftIcon="arrow-left"
            title="Options"
            navigation={navigation}
        />
        <ScrollView>
            <Group>
                <Title>Account</Title>

                <Text onPress={() => navigation.navigate('EditProfile')}>
                    Edit profile
                </Text>
                <Text>Change password</Text>
            </Group>

            <Group>
                <Title>Lorem</Title>

                <Text>Lorem Ipsum</Text>
                <Text>Lorem Ipsum</Text>
                <Text>Lorem Ipsum</Text>
            </Group>

            <ColorText onPress={() => logout()}>Logout</ColorText>
        </ScrollView>
    </Container>
)

export default ProfileOptions

const Group = styled.View`
    width: 100%;
    padding: 15px;
    border-bottom-width: 1;
    border-color: lightgray;
`
const Title = styled.Text`
    font-family: montserratMedium;
    font-size: 18;
    padding-top: 5px;
    padding-bottom: 10px;
`
const Text = styled.Text`
    padding-top: 15px;
    padding-bottom: 15px;
    font-family: montserratRegular;
    font-size: 14;
`
const ColorText = styled(Text)`
    padding-left: 15px;
    color: #4286f4;
`
