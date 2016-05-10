import { connect } from 'react-redux';

import SecondScreen from '../components/SecondScreen';
import { navigatePush } from '../actions';

const mapStateToProps = (state) => {
	return {
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigatePush('Third'))
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SecondScreen);
