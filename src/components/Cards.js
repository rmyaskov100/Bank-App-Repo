import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { useAuth } from '../useAuth'
import { colors, styles } from '../../constants'

import { onSnapshot, collection, query, where } from 'firebase/firestore'
import { db } from '../utils/firebase'

// const cards = [
// 	{
// 		id: 'wefwef',
// 		number: '4562 1122 4595 7852',
// 		type: 'Mastercard',
// 		balance: 92510,
// 	},
// 	{
// 		id: 'ewe',
// 		number: '4562 1222 4595 7852',
// 		type: 'Maestro',
// 		balance: 8234,
// 	},
// 	{
// 		id: 'wew34',
// 		number: '4562 1132 4595 7852',
// 		type: 'Visa',
// 		balance: 12452,
// 	},
// ]

const Cards = ({ cards }) => {
	const { user } = useAuth()

	return (
		<View
			style={{
				marginTop: 50,
				position: 'relative',
				height: 290,
				overflow: 'hidden',
			}}
		>
			{cards.map((card, idx) => (
				<View
					key={card.id}
					style={{
						backgroundColor: colors.ACCENT,
						borderRadius: 30,
						padding: 20,
						position: idx !== 0 ? 'absolute' : 'relative',
						top: idx === 1 ? 14 : idx === 2 ? 33 : 0,
						left: idx === 1 ? 5 : idx === 2 ? 5 : 0,
						width: '100%',
						zIndex: idx === 1 ? 2 : idx === 2 ? 1 : 3,
						shadowColor: 'black',
						transform: [
							{
								rotate: idx === 1 ? '10deg' : idx === 2 ? '18deg' : '0',
							},
						],
						...styles.boxShadow,
					}}
				>
					<Image source={require('../images/credit-card-chip.png')} />
					<Text style={{ color: 'white', fontSize: 24, marginVertical: 20 }}>
						{card.number}
					</Text>
					<View
						style={{
							...styles.flexDefault,
						}}
					>
						<View>
							<Text
								style={{
									color: 'white',
									textTransform: 'uppercase',
									fontSize: 10,
									marginBottom: 6,
								}}
							>
								Card holder
							</Text>
							<Text style={{ color: 'white', fontSize: 16 }}>{user.email}</Text>
						</View>
						<View style={{ width: 69 }}>
							<Image
								source={require(`../images/Mastercard.png`)}
								style={{
									width: 69,
									height: 63,
								}}
							/>
						</View>
					</View>
				</View>
			))}
		</View>
	)
}

export default Cards
