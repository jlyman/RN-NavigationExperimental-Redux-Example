import React, {
	PropTypes
} from 'react';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import NavButton from './NavButton';

const SecondScreen = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Second Screen</Text>

			<NavButton destLabel="Third" buttonHandler={props.onButtonPress} />
		</View>
	)
};

SecondScreen.propTypes = {
	onButtonPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#D690CB',
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

export default SecondScreen;
