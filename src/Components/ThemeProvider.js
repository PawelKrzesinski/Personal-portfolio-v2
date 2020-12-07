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
			secondary: 'Gainsboro',
			navbar: 'rgba(245, 245, 245, 0.8)',  //rgba(250, 235, 215, 0.8)
			text: '#101010',
			textShadow: '1px 1px 1px black',
			border: '#101010',
			slantPrimary: 'lightgray',
			slantSecondary: 'Gainsboro',
			LinksColorBg: 'Gainsboro',
			LinksColorBorder: 'black',
			LinksText: 'black',
			LinkHoverBg: '#00d8ff',
			BoxShadow: '2px 2px 5px black'
		},
		dark: {
			type: 'dark',
			primary: 'rgb(15, 15, 15)',
			secondary: 'rgb(25, 25, 25)',
			navbar: 'rgba(10, 10, 10, 0.8)',
			text: 'antiquewhite',
			textShadow: '2px 2px 1px black',
			border: 'antiquewhite',
			slantPrimary: 'rgb(15, 15, 15)',
			slantSecondary: 'rgb(25, 25, 25)',
			LinksColorBg: 'rgb(25, 25, 25)',
			LinksColorBorder: '#00d8ff',
			LinksText: '#00d8ff',
			LinkHoverBg: 'black',
			BoxShadow: '2px 2px 5px antiquewhite'
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
