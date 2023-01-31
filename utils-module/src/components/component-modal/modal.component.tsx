import { Dialog } from '@headlessui/react';
import React from 'react';

import './modal.style.scss';

import { IModalProps } from '.';

export const prefixClassDialog = 'headless-dialog';

export const Modal: React.FC<IModalProps> = (props) => {
	const { open, onCloseDialog, children } = props;

	return open ? (
		<div className={prefixClassDialog}>
			<Dialog open={open} onClose={() => onCloseDialog()}>
				<Dialog.Panel className={`${prefixClassDialog}__container`}>
					<Dialog.Overlay className={`${prefixClassDialog}__overlay`} />
					{children}
				</Dialog.Panel>
			</Dialog>
		</div>
	) : null;
};
