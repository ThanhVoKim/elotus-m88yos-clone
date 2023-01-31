import { getBoardStore } from '../store';

export const getOpenRegisterModalSelector = () => {
	const { openRegisterModal } = getBoardStore();
	return openRegisterModal;
};

export const getOpenLoginModalSelector = () => {
	const { openLoginModal } = getBoardStore();
	return openLoginModal;
};
