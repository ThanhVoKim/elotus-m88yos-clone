import { mutatorAction } from 'satcheljs';
import { getBoardStore, IBoard } from 'src/store-board/store';

export const saveBoardsAction = mutatorAction(
	'SAVE_BOARD',
	(newBoards: IBoard[]) => {
		getBoardStore().boards = newBoards;
	},
);
