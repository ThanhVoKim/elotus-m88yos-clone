import { putReorderCardApi } from 'src/api';
import { orchestrator } from 'satcheljs';
import { reorderCardAction } from 'src/store-board/actions';
import { saveBoardsAction } from 'src/store-board/mutator-actions';
import { errorToastNotify } from 'src/utils';

orchestrator(reorderCardAction, async (actionMessage) => {
	try {
		const newBoards = await putReorderCardApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
