import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'


function ToggleTheme() {
	const state = useContext(ThemeContext)
	// const setTheme = props.setTheme;
	return (
		<div className="theme-switch">
			<input type="checkbox" id="switch" 
			onChange={() => {
				state.setTheme(
					state.theme.type
				)
				// setTheme({theme: "light"})
			}}/>
			<label htmlFor="switch"></label>
		</div>
	)
}

export default ToggleTheme