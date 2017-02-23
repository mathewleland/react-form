import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const signup = (user, success, error) => {
	$.ajax({
		method: 'POST',
		url: '/api/users',
		data: user,
		success,
		error
	});
};
