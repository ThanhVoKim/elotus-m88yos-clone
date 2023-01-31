import { observer } from 'mobx-react-lite';

import {
	getOpenLoginModalSelector,
	LoginPopup,
	Modal,
	toggleLoginModalAction,
} from '@m88yos/utils';

export const SignInModalHome = observer(() => {
	const openLoginModal = getOpenLoginModalSelector();
	const handleCloseDialog = () => {
		toggleLoginModalAction(false);
	};

	return (
		<div>
			<Modal open={openLoginModal} onCloseDialog={handleCloseDialog}>
				<LoginPopup onClose={handleCloseDialog} />
			</Modal>
		</div>
	);
});
