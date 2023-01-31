import React from 'react';
import { IPopupPromotionsProps } from './popup-promotions.type';

import './popup-promotions.style.scss';
import { carouselPromotionsData } from 'src/mocks';
import { Button, closeIcon, timerIcon } from '@m88yos/utils';

export const prefixClassPopupPromotions = 'popup-promotions';

export const PopupPromotions: React.FC<IPopupPromotionsProps> = (props) => {
	const { promotionCard, onClose } = props;
	const { background, title, detail, daysLeft, categories } =
		promotionCard || {};
	return (
		<div className={`${prefixClassPopupPromotions}`}>
			<div className={`${prefixClassPopupPromotions}__header`}>
				<div>Chi tiết khuyến mãi</div>
				<div
					className={`${prefixClassPopupPromotions}__close`}
					style={{ maskImage: `url(${closeIcon})` }}
					onClick={() => {
						onClose?.();
					}}
				/>
			</div>
			<div className={`${prefixClassPopupPromotions}__content`}>
				<div className={`${prefixClassPopupPromotions}__overview`}>
					<img
						src={background}
						alt="background"
						className={`${prefixClassPopupPromotions}__image`}
					/>
					<div className={`${prefixClassPopupPromotions}__overview-info`}>
						<div className={`promotions-days-left`}>
							<img src={timerIcon} alt="timerIcon" />
							<p>{daysLeft}</p>
						</div>
						<div className={`${prefixClassPopupPromotions}__info-tags ribbons`}>
							{categories?.map((category, index) => (
								<div key={index} className={`${category} ribbon`}>
									{category}
								</div>
							))}
						</div>
						<div className={`${prefixClassPopupPromotions}__info-title`}>
							{title}
						</div>
						<div className={`${prefixClassPopupPromotions}__info-text`}>
							{detail}
						</div>
					</div>
				</div>

				<div className={`${prefixClassPopupPromotions}__details`}>
					<ol>
						<li>
							Chương trình dành cho tất cả thành viên <strong>Việt</strong> Nam
							tại <strong>M88.</strong>
							<div className="bonus-table">
								<table>
									<thead>
										<tr>
											<th>Thời gian khuyến mãi (GMT+8)</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>22/01/2023 00:00:00 – 09/02/2023 23:59:59</td>
										</tr>
									</tbody>
								</table>
							</div>
						</li>
						<li>
							Trong thời gian diễn ra, thành viên tham gia cược tại{' '}
							<strong>M88</strong> sẽ nhận được{' '}
							<strong>Quà tặng hoặc Tiền thưởng may mắn</strong> dựa trên tổng
							số tiền cược cao nhất, theo bảng xếp hạng sau:
							<div className="bonus-table">
								<table>
									<thead>
										<tr>
											<th>Số người chiến thắng</th>
											<th>Xếp hạng</th>
											<th>Quà tặng &amp; Tiền thưởng (VND)</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>1</td>
											<td>
												MacBook Pro 16inch 1TB <br /> Exc. Freebet 57,500 VND 1X
												RO&nbsp;
											</td>
										</tr>
										<tr>
											<td>1</td>
											<td>2</td>
											<td>
												iPhone 14 Pro Max 512Gb <br /> Exc. Freebet 34,500 VND
												1X RO&nbsp;
											</td>
										</tr>
										<tr>
											<td>3</td>
											<td>3-5&nbsp;</td>
											<td>23,000</td>
										</tr>
										<tr>
											<td>5</td>
											<td>6-10&nbsp;</td>
											<td>16,100</td>
										</tr>
										<tr>
											<td>10&nbsp;</td>
											<td>11-20&nbsp;</td>
											<td>11,500</td>
										</tr>
										<tr>
											<td>30&nbsp;</td>
											<td>21-50&nbsp;</td>
											<td>6,900</td>
										</tr>
										<tr>
											<td>50&nbsp;</td>
											<td>51-100&nbsp;</td>
											<td>3,450</td>
										</tr>
										<tr>
											<td colSpan={2}>
												<strong>Tổng</strong>
											</td>
											<td>
												<strong>807,300</strong>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</li>
						<li>
							Sau khi đăng nhập, thành viên nhấp{' '}
							<strong>&quot;NHẬN NGAY&quot;</strong> để đăng ký tham gia trước
							khi chương trình kết thúc. M88 sẽ không tái cập nhật tiền thưởng
							với bất kỳ lý do gì.
						</li>
						<li>
							Tiền cược thật và các vé đã thanh toán hoàn tất mới được tính vào
							chương trình này. Tất cả cược hòa/hoà hoàn tiền/hoàn lại/từ chối
							/vô hiệu/bị hủy, cược hai bên, cược vào danh sách ngoại lệ và loại
							cược DEC có tỷ lệ dưới 1.50 (Malay tỷ lệ 0.50; HK tỷ lệ 0.50; Indo
							tỷ lệ -2.00) sẽ không tính vào doanh thu và/hoặc tiền tái đặt cược
							(nếu có áp dụng).
						</li>
						<li>
							Tiền thưởng cần trải qua <strong>8 vòng</strong> cược tại{' '}
							<strong>ví sản phẩm cược chính ở tài khoản</strong> trước khi tiến
							hành rút tiền.
						</li>
						<li>
							Tiền thưởng sẽ được cập nhật vào tài khoản trong vòng 5 ngày sau
							khi kết thúc và có thời hạn sử dụng trong 5 ngày.
						</li>
						<li>
							Thành viên trúng giải thưởng sẽ được bộ phận Chăm Sóc Khách Hàng
							liên hệ trong 5 ngày sau khi kết thúc, trường hợp không liên lạc
							thành công, giải thưởng sẽ bị huỷ bỏ vô điều kiện.{' '}
						</li>
						<li>
							Số vòng tái đặt cược yêu cầu cần đạt được trong vòng 7 ngày để
							tránh việc tiền thưởng và tiền thắng cược bị hủy.
						</li>
						<li>
							Tiền thưởng sẽ tự động hết hiệu lực khi không còn cược đang chạy
							và số dư tại M Thể Thao dưới 10 VND.
						</li>
						<li>
							<a className="underline" href="#" target="_blank" tabIndex={-1}>
								<strong>
									Các quy định chung của chương trình khuyến mãi được áp dụng.
								</strong>
							</a>
						</li>
					</ol>
				</div>
			</div>

			<div className={`${prefixClassPopupPromotions}__action`}>
				<Button color="primary" size="lg">
					Đăng kí
				</Button>
			</div>
		</div>
	);
};
