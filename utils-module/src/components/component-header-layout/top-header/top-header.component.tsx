import desktopLogo from 'src/assets/logo/mlogo-desktop.svg';

import './top-header.style.scss';
import { Button, Switch } from '../../index';
import {
	toggleLoginModalAction,
	toggleRegisterModalAction,
} from '../../../store-global';

export const prefixClassTopHeader = 'top-header';
export const TopHeader = () => {
	const handleLogin = () => {
		toggleLoginModalAction(true);
	};

	const handleRegister = () => {
		toggleRegisterModalAction(true);
	};

	return (
		<div className={`${prefixClassTopHeader}`}>
			<div className="container">
				<div className={`${prefixClassTopHeader}__wrap`}>
					<div className={`${prefixClassTopHeader}__logo`}>
						<a href="/">
							<img src={desktopLogo} alt="logo" />
						</a>
					</div>
					<div className={`${prefixClassTopHeader}__actions`}>
						<div className={`${prefixClassTopHeader}__mode`}>
							Nền tối <Switch />
						</div>
						<div className={`${prefixClassTopHeader}__button`}>
							<Button color="secondary" onClick={handleLogin}>
								Đăng nhập
							</Button>
						</div>
						<div className={`${prefixClassTopHeader}__button`}>
							<Button color="primary" onClick={handleRegister}>
								Đăng ký
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
