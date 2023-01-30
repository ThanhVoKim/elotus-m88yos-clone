import React from 'react';
import { footerResponsibleData } from '../../../mocks';

import './responsible-footer.style.scss';

export const prefixClassResponsibleFooter = 'responsible-footer';

export const ResponsibleFooter: React.FC = () => {
	return (
		<div className={`${prefixClassResponsibleFooter}`}>
			<div className="container">
				<div className={`${prefixClassResponsibleFooter}__gambling`}>
					<p className={`${prefixClassResponsibleFooter}__gambling-info`}>
						M88 cam kết hỗ trợ &nbsp;
						<a href="#">
							<strong>Chơi Game Có Trách Nhiệm</strong>
						</a>
					</p>
					<div className={`${prefixClassResponsibleFooter}__gambling-partners`}>
						{footerResponsibleData.map((res, index) => (
							<div
								key={index}
								className={`${prefixClassResponsibleFooter}__gambling-logo`}
							>
								<img src={res.logo} alt="gambling logo" />
							</div>
						))}
						<div
							className={`${prefixClassResponsibleFooter}__gambling-logo-text`}
						>
							M88.com 2023
						</div>
					</div>
				</div>
				<div className={`${prefixClassResponsibleFooter}__terms`}>
					*Điều Khoản và Điều Kiện được áp dụng. Vui lòng tham khảo mục khuyến
					mãi để biết thêm chi tiết.
					<br />
					<br />
					Trang web này được vận hành bởi Mountain Breeze Limited, một công ty
					đã đăng ký tại Cộng hòa Vanuatu (Số đăng ký: 12405 với văn phòng đăng
					ký tại Law Partners House, Kumul Highway, Port Vila, Vanuatu, theo
					Giấy phép Cung Cấp Dịch Vụ Trò chơi Tương tác - IGL25 / 2013 do Bộ Tài
					chính và Phát triển Kinh tế cấp ngày 8 tháng 7 năm 2013, thời hạn 15
					năm.
					<br />
					<br />
					Bằng việc truy cập và tiếp tục sử dụng trang web này Thành viên chấp
					nhận điều khoản sử dụng cookie. Để biết thông tin về việc sử dụng
					cookie của chúng tôi và làm thế nào để tránh vi phạm các quy định, vui
					lòng tham khảo &nbsp;
					<a href="https://help.m88yos.com/terms-of-use/terms-conditions.vi-VN.asp">
						<strong>Điều Khoản Sử Dụng tại M88</strong>
					</a>
				</div>
			</div>
		</div>
	);
};
