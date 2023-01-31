import { mutatorAction } from 'satcheljs';
import { getBoardStore } from '../store';

export const toggleSignUpModalAction = mutatorAction(
	'TOGGLE_SIGNUP_MODAL',
	(isOpen: boolean) => {
		getBoardStore().openSignUpModal = isOpen;
	},
);
