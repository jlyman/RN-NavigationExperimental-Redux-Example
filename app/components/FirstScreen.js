import React, {
	PropTypes
} from 'react';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import NavButton from './NavButton';

const FirstScreen = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>First Screen</Text>

			<NavButton destLabel="Second" buttonHandler={props.onButtonPress} />
		</View>
	)
};

FirstScreen.propTypes = {
	onButtonPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2F9CB2',
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 24,
		fontWeight: '500',
		color: '#ffffff',
		marginBottom: 30
	}
});

export default FirstScreen;
