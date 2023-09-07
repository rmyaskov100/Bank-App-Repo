import React from 'react'
import { Button } from 'react-native'
import { colors } from '../../constants'
import { logout } from '../utils/firebase'

const Logout = () => {
	return <Button title='Logout' color={colors.TEXT_GRAY} onPress={logout} />
}

export default Logout
