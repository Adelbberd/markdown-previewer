// Event listner
const rootReducer = (state = '', action) => {
	switch (action.type) {
		case 'CHANGE':
			return action.payload;
		default:
			return state;
	}
};

export default rootReducer;
