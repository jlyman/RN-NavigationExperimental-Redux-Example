import React, {
	PropTypes
} from 'react';

import {
	TouchableOpacity,
	Text,
	StyleSheet
} from 'react-native';

const NavButton = (props) => {
	return (
		<TouchableOpacity style={styles.button} onPress={props.buttonHandler}>
			<Text style={styles.label}>Go to {props.destLabel} Page</Text>
		</TouchableOpacity>
	)
};

NavButton.propTypes = {
	destLabel: PropTypes.string.isRequired,
	buttonHandler: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	button: {
		padding: 15,
		backgroundColor: '#3C5773',
		alignSelf: 'stretch'
	},
	label: {
		color: '#F4F4E9',
		textAlign: 'center'
	}
});

export default NavButton;
