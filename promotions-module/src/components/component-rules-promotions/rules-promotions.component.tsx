import { Collapse } from '@m88yos/utils';
import React from 'react';

import './rules-promotions.style.scss';

export const prefixClassRulesPromotions = 'rules-promotions';

export const RulesPromotions: React.FC = () => {
	return (
		<div className={`${prefixClassRulesPromotions}`}>
			<div className="container">
				<Collapse>
					<Collapse.Button>
						<div className={`${prefixClassRulesPromotions}__header`}>
							Qui Định Chung Về Tất Cả Các Khuyến Mãi
						</div>
					</Collapse.Button>
					<Collapse.Content>
						<div className={`${prefixClassRulesPromotions}__content`}>
							<div className={`${prefixClassRulesPromotions}__terms`}>
								<ol className="list-count">
									<li>
										Chương trình này chỉ dành cho thành viên có một và chỉ một
										tài khoản tại M88. Người trong cùng gia đình, cùng địa chỉ
										nhà, cùng số điện thoại, số tài khoản ngân hàng, môi trường
										dùng chung máy tính, ipad/tablet, điện thoại di động hoặc
										địa chỉ IP trên mạng internet sẽ không được tham gia chương
										trình này.
									</li>
									<li>
										Chương trình khuyến mãi chỉ mang tính chất giải trí dành
										riêng cho khách hàng của M88 và M88 có quyền giới hạn quyền
										tham gia bất cứ chương trình khuyến mãi nào của khách hàng.
									</li>
									<li>
										M88 có quyền thay đổi, chỉnh sửa hoặc hủy Chương Trình
										Khuyến Mãi này, hoặc một phần của chương trình vào bất cứ
										thời điểm và thời gian nào mà không cần thông báo trước. M88
										dựa vào các Điều kiện và Điều khoản để áp dụng.
									</li>
									<li>
										Thành viên chỉ được nhận duy nhất 1 lần tiền thưởng cho 1
										sản phẩm.
									</li>
									<li>
										Số vòng cược yêu cầu cần đạt được trong vòng 30 ngày để
										tránh việc tiền thưởng và tiền thắng cược bị hủy.
									</li>
									<li>
										M88 không khoan dung cho việc lạm dụng tiền thưởng hoặc gian
										lận tiền thưởng.
										<br />
										Chúng tôi có đội ngũ chuyên kiểm tra việc Lạm Dụng và Gian
										Lận Khuyến Mãi diễn ra trên tất cả sản phẩm của chúng tôi.
										Nhằm bảo vệ quyền lợi của các khách hàng chơi trong sáng,
										minh bạch và cho phép chúng tôi cung cấp thêm nhiều tiền
										thưởng cho họ, các quy định dưới đây được áp dụng ngay lập
										tức
										<ol className="ol-alpha">
											<li>
												Khuyến mãi và tiền thưởng giành thưởng cho những người
												chơi giỏi - Chúng tôi có một chính sách không khoan
												nhượng cho những hành động lạm dụng hoặc gian lận tiền
												thưởng. Chúng tôi có quyền ngăn chặn tiền thưởng từ bất
												kỳ người chơi mà chúng tôi phát hiện họ lợi dụng chương
												trình khuyến mãi. Nếu các hoạt động gian lận hoặc lạm
												dụng bị nghi ngờ, chúng tôi có quyền loại bỏ các khoản
												tiền thưởng và tiền thắng cược liên quan từ tài khoản đó
												và các tài khoản khác có liên quan.
											</li>
											<li>
												Việc xác định thế nào là lạm dụng tiền thưởng sẽ tùy
												theo quyết định của M88, những bằng chứng rõ ràng của
												việc lạm dụng tiền thưởng sẽ bao gồm, nhưng không giới
												hạn, các ví dụ sau đây:
												<ul className="ul-dash">
													<li>Đặt cược tiền thưởng vào các game bị loại trừ</li>
													<li>
														Sử dụng nhiều tài khoản / sử dụng proxy để truy cập
													</li>
													<li>Cược chéo tài khoản</li>
													<li>
														Lạm dụng chênh lệch tỷ lệ kèo giữa các trang cá cược
													</li>
													<li>Đặt cược 2 bên</li>
													<li>
														Tiền thưởng chỉ được nhận một lần duy nhất (chẳng
														hạn khuyến mãi dành cho thành viên mới)
													</li>
													<li>Sử dụng VPN hay che giấu địa chỉ IP</li>
													<li>
														Đại lý liên kết CPA hoặc lạm dụng chia sẻ doanh thu
													</li>
												</ul>
											</li>
											<li>
												M88 có quyền kiểm tra hồ sơ giao dịch và thời gian đăng
												nhập vào bất kỳ thời gian nào với bất cứ lý do gì. Nếu
												sau khi kiểm tra, chúng tôi phát hiện ra người chơi
												hưởng lợi từ khuyến mãi bằng cách tham gia cược theo
												những cách đã được nêu như ở trên hoặc chúng tôi xét
												thấy có những hành động tham gia không lành mạnh, M88 có
												quyền thu hồi số tiền thưởng và tiền thắng cược bất kỳ
												có liên quan.
											</li>
											<li>
												M88 có quyền hạn chế bất cứ người tham gia khuyến mãi
												nào. Nếu có vấn đề phát sinh gây tranh cãi thì quyết
												định đưa ra từ M88 sẽ là quyết định cuối cùng.
											</li>
											<li>
												Bất kỳ người nào làm sai lệch đi các nội dung khuyến mãi
												có thể bị loại, nghĩa là tiền thưởng và tiền thắng cược
												bất kỳ có liên quan sẽ bị hủy bỏ.
											</li>
											<li>
												M88 có quyền chấm dứt hoặc sửa đổi Điều khoản và Điều
												kiện của chương trình khuyến mãi vào bất kì lúc nào với
												bất kỳ lý do gì mà không cần thông báo trước.
											</li>
											<li>
												Việc rút tiền có thể bị kiểm toán và/hoặc xác minh danh
												tính trước khi được xử ký. Thành Viên có thể được yêu
												cầu cung cấp bằng chứng về nhận dạng, địa chỉ, tuổi tác
												và/hoặc biên lai gửi tiền, chứng minh các game đã chơi
												hoặc số điện thoại. Nếu không cung cấp thông tin yêu cầu
												này cho chúng tôi trong vòng 72 giờ thì tiền thưởng và
												tiền thắng cược bất kỳ có liên quan có thể bị thu hồi.{' '}
											</li>
											<li>
												Đơn vị tiền tệ tính trong các chương trình khuyến mãi là
												1,000 VND.{' '}
											</li>
										</ol>
									</li>
									<li>Ban Tổ Chức: M88.com</li>
								</ol>
							</div>
							<div className={`${prefixClassRulesPromotions}__conversion`}>
								<div
									className={`${prefixClassRulesPromotions}__conversion-title`}
								>
									Bảng Qui Đổi
								</div>
								<table className={`${prefixClassRulesPromotions}__table`}>
									<tbody>
										<tr>
											<th>CNY</th>
											<th>MYR</th>
											<th>IDR</th>
											<th>THB</th>
											<th>VND</th>
											<th>KRW</th>
											<th>USD</th>
											<th>INR</th>
										</tr>
										<tr>
											<td>7</td>
											<td>4.4</td>
											<td>15</td>
											<td>34</td>
											<td>23</td>
											<td>1,200</td>
											<td>1</td>
											<td>82</td>
										</tr>
										<tr>
											<td>700</td>
											<td>440</td>
											<td>1,500</td>
											<td>3,400</td>
											<td>2,300</td>
											<td>120,000</td>
											<td>100</td>
											<td>8,200</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</Collapse.Content>
				</Collapse>
			</div>
		</div>
	);
};
