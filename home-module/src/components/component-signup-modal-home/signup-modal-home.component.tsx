import React from 'react';
import { observer } from 'mobx-react-lite';
import {
	Modal,
	RegisterPopup,
	toggleRegisterModalAction,
	getOpenRegisterModalSelector,
} from '@m88yos/utils';

export const SignUpModalHome = observer(() => {
	const openRegisterModal = getOpenRegisterModalSelector();
	const handleCloseDialog = () => {
		toggleRegisterModalAction(false);
	};

	return (
		<div>
			<Modal open={openRegisterModal} onCloseDialog={handleCloseDialog}>
				<RegisterPopup onClose={handleCloseDialog} />
			</Modal>
		</div>
	);
});
