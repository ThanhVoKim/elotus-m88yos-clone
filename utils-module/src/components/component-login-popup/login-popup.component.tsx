import React from 'react';
import { observer } from 'mobx-react-lite';

import { ILoginPopupProps } from './login-popup.type';
import logo from '../../assets/logo/logo-desktop.svg';
import { closeIcon } from '../../assets';

import './login-popup.style.scss';
import { Input } from '../component-input';
import { Button } from '../component-button';
import { Checkbox } from '../component-checkbox';
import {
	getOpenLoginModalSelector,
	toggleLoginModalAction,
} from '../../store-global';
import { Modal } from '../component-modal';

export const prefixClassLogin = 'login-popup';

export const LoginPopup: React.FC<ILoginPopupProps> = observer((props) => {
	const { onClose } = props;

	const openLoginModal = getOpenLoginModalSelector();
	const handleClosePopup = () => {
		toggleLoginModalAction(false);
		onClose?.();
	};

	return (
		<Modal open={openLoginModal} onCloseDialog={handleClosePopup}>
			<div className={`${prefixClassLogin}`}>
				<div className={`${prefixClassLogin}__close`}>
					<div
						className={`${prefixClassLogin}__close-icon`}
						style={{ maskImage: `url(${closeIcon})` }}
						onClick={handleClosePopup}
					/>
				</div>
				<div className={`${prefixClassLogin}__content`}>
					<img src={logo} alt="logo" className={`${prefixClassLogin}__logo`} />
					<div className={`${prefixClassLogin}__form`}>
						<div className={`${prefixClassLogin}__form-row`}>
							<div className={`${prefixClassLogin}__form-label`}>
								Tên Đăng Nhập
							</div>
							<Input theme="dark" placeholder="Điền tên đăng nhập" />
						</div>
						<div className={`${prefixClassLogin}__form-row`}>
							<div className={`${prefixClassLogin}__form-label`}>Mật Khẩu</div>
							<Input type="password" theme="dark" placeholder="Điền mật khẩu" />
						</div>
						<div className={`${prefixClassLogin}__form-row`}>
							<Checkbox label="Duy trì trạng thái đăng nhập" theme="dark" />
						</div>
						<div className={`${prefixClassLogin}__submit`}>
							<Button color="primary" size="lg">
								Đăng nhập
							</Button>
						</div>
					</div>
					<div className={`${prefixClassLogin}__forgot`}>
						<Button color="dark" size="lg">
							Quên thông tin đăng nhập?
						</Button>
					</div>
					<div className={`${prefixClassLogin}__new-member`}>
						Chưa là thành viên?&nbsp;
						<a className="underline">
							<strong>Hãy tạo tài khoản mới!</strong>
						</a>
					</div>
				</div>
			</div>
		</Modal>
	);
});
