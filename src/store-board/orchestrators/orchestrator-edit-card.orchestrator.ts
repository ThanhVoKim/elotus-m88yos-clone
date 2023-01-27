import { putEditCardsApi } from 'src/api';
import { orchestrator } from 'satcheljs';
import { editCardAction } from 'src/store-board/actions';
import { saveBoardsAction } from 'src/store-board/mutator-actions';
import { errorToastNotify } from 'src/utils';

orchestrator(editCardAction, async (actionMessage) => {
	try {
		const newBoards = await putEditCardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
