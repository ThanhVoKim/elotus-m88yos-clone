import React from 'react';
import { observer } from 'mobx-react-lite';

import './register-popup.style.scss';
import { IRegisterPopupProps } from './register-popup.type';
import registerBackground from '../../assets/register/new-register-desktop-image.jpg';
import logo from '../../assets/logo/mlogo-desktop.svg';
import { LanguageDropdown } from '../component-language-dropdown';
import { Input } from '../component-input';
import { rebatesIcon } from '../../assets';
import { Button } from '../component-button';
import {
	getOpenRegisterModalSelector,
	toggleRegisterModalAction,
} from '../../store-global';
import { Modal } from '../component-modal';

export const prefixClassRegister = 'register-popup';

export const RegisterPopup: React.FC<IRegisterPopupProps> = observer(
	(props) => {
		const { onClose } = props;

		const openRegisterModal = getOpenRegisterModalSelector();
		const handleClosePopup = () => {
			toggleRegisterModalAction(false);
			onClose?.();
		};

		return (
			<Modal open={openRegisterModal} onCloseDialog={handleClosePopup}>
				<div className={`${prefixClassRegister}`}>
					<div className={`${prefixClassRegister}__left`}>
						<img
							src={registerBackground}
							alt="register background"
							className={`${prefixClassRegister}__left-background`}
						/>
						<div className={`${prefixClassRegister}__left-content`}>
							<img
								src={logo}
								alt="logo"
								className={`${prefixClassRegister}__left-logo`}
							/>
							<div className={`${prefixClassRegister}__left-title`}>
								Thưởng 150% lên đến 3,388 VND
							</div>
							<div className={`${prefixClassRegister}__left-text`}>
								THÊM 88 FREESPINS
							</div>
						</div>
					</div>
					<div className={`${prefixClassRegister}__right`}>
						<div className={`${prefixClassRegister}__right-content`}>
							<div className={`${prefixClassRegister}__right-header`}>
								<div className={`${prefixClassRegister}__right-title`}>
									ĐĂNG KÝ VỚI <span className="text-secondary-3">M88!</span>
								</div>
								<LanguageDropdown />
							</div>
							<div className={`${prefixClassRegister}__info-text`}>
								Vui lòng lưu ý thành viên không được phép sở hữu hơn một tài
								khoản.
							</div>
							<div className={`${prefixClassRegister}__info-text`}>
								Đã có tài khoản?&nbsp;
								<a className={`${prefixClassRegister}__info-link`}>
									Đăng nhập tại đây!
								</a>
							</div>
							<div className={`${prefixClassRegister}__form`}>
								<div className={`${prefixClassRegister}__form-row`}>
									<div className={`${prefixClassRegister}__form-label`}>
										Tên
									</div>
									<div className={`${prefixClassRegister}__form-entry`}>
										<Input />
									</div>
								</div>
								<div className={`${prefixClassRegister}__form-row`}>
									<div className={`${prefixClassRegister}__form-label`}>
										Tên đăng nhập
									</div>
									<div className={`${prefixClassRegister}__form-entry`}>
										<Input />
									</div>
								</div>
								<div className={`${prefixClassRegister}__form-row`}>
									<div className={`${prefixClassRegister}__form-label`}>
										Mật khẩu
									</div>
									<div className={`${prefixClassRegister}__form-entry`}>
										<Input type="password" />
									</div>
								</div>
								<div className={`${prefixClassRegister}__form-row`}>
									<div className={`${prefixClassRegister}__form-label`}>
										Tên
									</div>
									<div className={`${prefixClassRegister}__form-entry`}>
										<Input type="email" />
									</div>
								</div>
								<div className={`${prefixClassRegister}__form-row group`}>
									<div className={`${prefixClassRegister}__form-row`}>
										<div className={`${prefixClassRegister}__form-label`}>
											Số Di Động
										</div>
										<div className={`${prefixClassRegister}__form-entry`}>
											<Input placeholder="+84" />
										</div>
									</div>
									<div className={`${prefixClassRegister}__form-entry`}>
										<Input />
									</div>
								</div>
								<div className={`${prefixClassRegister}__form-row`}>
									<div className={`${prefixClassRegister}__form-label`}>
										Tiền Tệ
									</div>
									<div className={`${prefixClassRegister}__form-entry`}>
										<Input />
										<div className={`${prefixClassRegister}__info-text`}>
											Tiền tệ đăng kí không thể đổi sau khi Quý Khách đã hoàn
											tất quá trình đăng kí
										</div>
									</div>
								</div>
							</div>
							<div className={`${prefixClassRegister}__rebates`}>
								<img src={rebatesIcon} alt="rebates icon" />
								<div>
									<span className="uppercase">
										<strong>HOÀN TRẢ HÀNG NGÀY LÊN ĐẾN 1%</strong> KHÔNG GIỚI
										HẠN & VÒNG CƯỢC
									</span>
									&nbsp;
									<strong>
										Hoàn tất giao dịch gửi đầu tiên và đăng kí tham gia ở trang
										khuyến mãi!
									</strong>
								</div>
							</div>
							<div className={`${prefixClassRegister}__info-text`}>
								Bằng việc đăng ký, bạn đồng ý với các &nbsp;
								<a className="text-primary-1 underline">Điều khoản sử dụng</a>
								&nbsp;Và&nbsp;
								<a className="text-primary-1 underline">Chính Sách Bảo Mật</a>
							</div>
							<div className={`${prefixClassRegister}__actions`}>
								<Button
									onClick={() => {
										onClose?.();
									}}
									size="lg"
								>
									Hủy
								</Button>
								<Button color="primary" size="lg">
									Đăng ký
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		);
	},
);
