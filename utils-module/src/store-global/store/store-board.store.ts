import { createStore } from 'satcheljs';

import { IGlobalStore } from './';

const initialState: IGlobalStore = {
	openRegisterModal: false,
	openLoginModal: false,
};

export const getBoardStore = createStore<IGlobalStore>(
	'globalStore',
	initialState,
);
