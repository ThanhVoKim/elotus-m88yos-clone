import React from 'react';
import { news } from 'src/mocks';
import megaphoneIcon from 'src/assets/icons/icon-megaphone.svg';
import downloadIcon from 'src/assets/icons/icon-download.svg';
import liveChatIcon from 'src/assets/icons/icon-live-chat.svg';
import rafIcon from 'src/assets/icons/icon-raf.svg';
import flagVi from 'src/assets/flags/flag.vi-VN.svg';

import './bottom-header.style.scss';
import { Dropdown } from 'src/components/dropdown';

export const prefixClassBottomHeader = 'bottom-header';
export const BottomHeader = () => {
	return (
		<div className={`${prefixClassBottomHeader}`}>
			<div className="container">
				<div className={`${prefixClassBottomHeader}__entry`}>
					<time className={`${prefixClassBottomHeader}__time`}>
						16/01/2023 18:35 (GMT+7)
					</time>
					<div className={`${prefixClassBottomHeader}__news`}>
						<div
							style={{ maskImage: `url(${megaphoneIcon})` }}
							className={`${prefixClassBottomHeader}__news-icon`}
						/>
						<div className={`${prefixClassBottomHeader}__news-content`}>
							<div className={`${prefixClassBottomHeader}__marquee`}>
								{news.map((newsItem, index) => (
									<a
										key={index}
										href={newsItem.path}
										className={`${prefixClassBottomHeader}__marquee-item`}
									>
										{newsItem.content}
									</a>
								))}
							</div>
						</div>
					</div>
					<div className={`${prefixClassBottomHeader}__actions`}>
						<div className={`${prefixClassBottomHeader}__action-item`}>
							<div
								style={{ maskImage: `url(${downloadIcon})` }}
								className={`${prefixClassBottomHeader}__action-icon`}
							/>
							APP
						</div>
						<div className={`${prefixClassBottomHeader}__action-item`}>
							<div
								style={{ maskImage: `url(${rafIcon})` }}
								className={`${prefixClassBottomHeader}__action-icon`}
							/>
							Mời bạn bè
						</div>
						<div className={`${prefixClassBottomHeader}__action-item`}>
							<div
								style={{ maskImage: `url(${liveChatIcon})` }}
								className={`${prefixClassBottomHeader}__action-icon`}
							/>
							Hỗ trợ trực tuyến
						</div>
						<Dropdown>
							<Dropdown.Header>
								<div className={`${prefixClassBottomHeader}__action-item`}>
									<img
										src={flagVi}
										alt="flag icon"
										className={`${prefixClassBottomHeader}__action-flag`}
									/>
									Tiếng Việt (VND)
								</div>
							</Dropdown.Header>
							<Dropdown.Content>
								<ul className={`${prefixClassBottomHeader}__lang-dropdown`}>
									<li className={`${prefixClassBottomHeader}__lang-item`}>
										English
									</li>
									<li className={`${prefixClassBottomHeader}__lang-item`}>
										简体中文
									</li>
								</ul>
							</Dropdown.Content>
						</Dropdown>
					</div>
				</div>
			</div>
		</div>
	);
};
