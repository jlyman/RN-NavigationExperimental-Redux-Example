// *** Action Types ***
export const NAV_PUSH = 'push';
export const NAV_POP = 'back';


// *** Action Creators ***
// The following action creators were derived from NavigationStackReducer
export function navigatePush(state) {
	state = typeof state === 'string' ? { key: state } : state
	return {
		type: NAV_PUSH,
		state
	}
};

export function navigatePop() {
	return {
		type: NAV_POP
	}
};
