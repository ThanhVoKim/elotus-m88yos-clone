import { getBoardStore } from '../store';

export const getOpenSignUpModalSelector = () => {
	const { openSignUpModal } = getBoardStore();
	return openSignUpModal;
};
