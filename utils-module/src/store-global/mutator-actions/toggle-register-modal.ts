import { mutatorAction } from 'satcheljs';
import { getBoardStore } from '../store';

export const toggleRegisterModalAction = mutatorAction(
	'TOGGLE_REGISTER_MODAL',
	(isOpen: boolean) => {
		getBoardStore().openRegisterModal = isOpen;
	},
);
