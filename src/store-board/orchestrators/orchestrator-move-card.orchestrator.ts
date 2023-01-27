import { orchestrator } from 'satcheljs';
import { saveBoardsAction } from 'src/store-board/mutator-actions';
import { moveCardAction } from 'src/store-board/actions';
import { putMoveCardApi } from 'src/api';
import { errorToastNotify } from 'src/utils';

orchestrator(moveCardAction, async (actionMessage) => {
	try {
		const newBoards = await putMoveCardApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
