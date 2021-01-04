import React, { useState } from 'react'

export const ThemeContext = React.createContext({
	theme: {
		type: 'light',
		primary: 'white',
		text: 'black'
	},
	setTheme: () => {}
})

export const ThemeContextProvider = props => {
	const theme = {
		light: {
			type: 'light',
			primary: 'lightgray',
			secondary: 'silver',
			navbar: 'rgba(245, 245, 245, 0.8)',
			text: '#101010',
			textShadow: '1px 1px 1px black',
			border: '#101010',
			slantPrimary: 'lightgray',
			slantSecondary: 'silver',
			LinksColorBg: 'silver',
			LinksColorBorder: 'black',
			LinksText: 'black',
			LinkHoverBg: '#00d8ff',
			BoxShadow: '0px 0px 5px black',
		},
		dark: {
			type: 'dark',
			primary: 'rgb(25, 25, 25)',
			secondary: 'rgb(35, 35, 35)',
			navbar: 'rgba(10, 10, 10, 0.8)',
			text: 'antiquewhite',
			textShadow: '1px 1px 1px black',
			border: 'antiquewhite',
			slantPrimary: 'rgb(25, 25, 25)',
			slantSecondary: 'rgb(35, 35, 35)',
			LinksColorBg: 'rgb(25, 25, 25)',
			LinksColorBorder: '#00d8ff',
			LinksText: '#00d8ff',
			LinkHoverBg: 'black',
			BoxShadow: '0px 0px 5px #00d8ff'
		},
	}

	const setTheme = type => {
		setState({...state, theme: type === 'dark' ? theme.light : theme.dark})
	}

	const initState = {
		theme: theme.dark,
		setTheme: setTheme
	}

	const [state, setState] = useState(initState)

	return (
		<ThemeContext.Provider value={state}>
			{props.children}
		</ThemeContext.Provider>
	)
}
