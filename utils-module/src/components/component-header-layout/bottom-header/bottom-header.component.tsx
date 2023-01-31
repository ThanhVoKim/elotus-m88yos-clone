import { news } from '../../../mocks';

import './bottom-header.style.scss';
import { Dropdown } from '../../index';
import {
	downloadIcon,
	flagVietnamIcon,
	liveChatIcon,
	megaphoneIcon,
	rafIcon,
} from '../../../assets';
import { LanguageDropdown } from '../../component-language-dropdown';

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
						<LanguageDropdown />
					</div>
				</div>
			</div>
		</div>
	);
};
