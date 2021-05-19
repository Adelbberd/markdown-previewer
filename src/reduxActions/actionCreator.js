const actionCreator = (payload) => {
	return {
		type: 'CHANGE',
		payload,
	};
};

export default actionCreator;
