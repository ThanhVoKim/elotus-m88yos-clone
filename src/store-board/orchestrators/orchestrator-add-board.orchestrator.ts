import { postCreateBoardsApi } from 'src/api';
import { orchestrator } from 'satcheljs';
import { addBoardAction } from 'src/store-board/actions';
import { saveBoardsAction } from 'src/store-board/mutator-actions';
import { errorToastNotify } from 'src/utils';

orchestrator(addBoardAction, async (actionMessage) => {
	try {
		const newBoards = await postCreateBoardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
