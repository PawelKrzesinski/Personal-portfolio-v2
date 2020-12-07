import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'


function ToggleTheme() {
	const state = useContext(ThemeContext)

	return (
		<div className="theme-switch">
			<input type="checkbox" id="switch" onChange={() => {state.setTheme(state.theme.type)}}/>
			<label htmlFor="switch"></label>
		</div>
	)
}

export default ToggleTheme