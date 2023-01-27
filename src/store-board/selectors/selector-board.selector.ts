import { getBoardStore } from 'src/store-board/store';

export const getBoardsSelector = () => {
	const { boards } = getBoardStore();
	return boards;
};
