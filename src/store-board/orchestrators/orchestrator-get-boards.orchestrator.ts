import { orchestrator } from 'satcheljs';
import { getBoardsApi } from 'src/api';
import { getBoardsAction } from 'src/store-board/actions';
import { saveBoardsAction } from 'src/store-board/mutator-actions';
import { errorToastNotify } from 'src/utils';

orchestrator(getBoardsAction, async () => {
	try {
		const newBoards = await getBoardsApi();
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
