import { putEditBoardsApi } from 'src/api';
import { orchestrator } from 'satcheljs';
import { editBoardAction } from 'src/store-board/actions';
import { saveBoardsAction } from 'src/store-board/mutator-actions';
import { errorToastNotify } from 'src/utils';

orchestrator(editBoardAction, async (actionMessage) => {
	try {
		const newBoards = await putEditBoardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
