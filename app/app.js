import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AppContainer from './containers/AppContainer'

import configureStore from './store'
const initialState = {}
const store = configureStore(initialState)

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppContainer />
			</Provider>
		)
	}
}
