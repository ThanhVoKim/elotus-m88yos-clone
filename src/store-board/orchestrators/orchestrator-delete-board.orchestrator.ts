import { orchestrator } from 'satcheljs';
import { deleteBoardsApi } from 'src/api';
import { deleteBoardAction } from 'src/store-board/actions';
import { saveBoardsAction } from 'src/store-board/mutator-actions';
import { errorToastNotify } from 'src/utils';

orchestrator(deleteBoardAction, async (actionMessage) => {
	try {
		const newBoards = await deleteBoardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
