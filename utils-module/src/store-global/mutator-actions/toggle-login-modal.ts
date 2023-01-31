import { mutatorAction } from 'satcheljs';
import { getBoardStore } from '../store';

export const toggleLoginModalAction = mutatorAction(
	'TOGGLE_LOGIN_MODAL',
	(isOpen: boolean) => {
		getBoardStore().openLoginModal = isOpen;
	},
);
