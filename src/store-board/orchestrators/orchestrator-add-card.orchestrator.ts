import { orchestrator } from 'satcheljs';
import { saveBoardsAction } from 'src/store-board/mutator-actions';
import { addCardAction } from 'src/store-board/actions';
import { postCreateCardApi } from 'src/api';
import { errorToastNotify } from 'src/utils';

orchestrator(addCardAction, async (actionMessage) => {
	try {
		const newBoards = await postCreateCardApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
