import { putReorderBoardsApi } from 'src/api';
import { orchestrator } from 'satcheljs';
import { reorderBoardAction } from 'src/store-board/actions';
import { saveBoardsAction } from 'src/store-board/mutator-actions';
import { errorToastNotify } from 'src/utils';

orchestrator(reorderBoardAction, async (actionMessage) => {
	try {
		const newBoards = await putReorderBoardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
