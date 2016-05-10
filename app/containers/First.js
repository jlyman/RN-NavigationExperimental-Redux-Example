import { connect } from 'react-redux';

import FirstScreen from '../components/FirstScreen';
import { navigatePush } from '../actions';

const mapStateToProps = (state) => {
	return {
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigatePush('Second'))
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FirstScreen);
