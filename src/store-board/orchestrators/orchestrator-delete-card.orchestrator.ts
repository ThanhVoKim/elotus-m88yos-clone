import { orchestrator } from 'satcheljs';
import { saveBoardsAction } from 'src/store-board/mutator-actions';
import { deleteCardAction } from 'src/store-board/actions';
import { deleteCardApi } from 'src/api';
import { errorToastNotify } from 'src/utils';

orchestrator(deleteCardAction, async (actionMessage) => {
	try {
		const newBoards = await deleteCardApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
