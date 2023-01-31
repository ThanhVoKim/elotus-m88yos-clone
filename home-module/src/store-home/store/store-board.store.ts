import { createStore } from 'satcheljs';

import { IHomeStore } from './';

const initialState: IHomeStore = {
	openSignUpModal: false,
};

export const getBoardStore = createStore<IHomeStore>('homeStore', initialState);
