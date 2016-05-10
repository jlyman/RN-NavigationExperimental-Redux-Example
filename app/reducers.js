import { NavigationExperimental } from 'react-native';

const {
	Reducer: NavigationReducer
} = NavigationExperimental;

import { combineReducers } from 'redux';

const initialNavState = {
	key: 'MainNavigation',
	index: 0,
	children: [
		{ key: 'First' }
	]
};

const navigationState = NavigationReducer.StackReducer({
	initialState: initialNavState,
	getPushedReducerForAction: (action) => {
		if (action.type === 'push') {
			return (_, action) => action.state
		}

		return null
	}
});

const appReducers = combineReducers({
	navigationState
});

export default appReducers;
