import { connect } from 'react-redux';

import ThirdScreen from '../components/ThirdScreen';
import { navigatePop } from '../actions';

const mapStateToProps = (state) => {
	return {
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigatePop())
			dispatch(navigatePop())
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ThirdScreen);
