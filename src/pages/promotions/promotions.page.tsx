import { SeoContent } from 'src/components/seo-content';
import { Banner } from 'src/components/banner';

import { homeBannerData, homeSeoContent } from 'src/mocks';
import './promotions.style.scss';

export const prefixClassPromotions = 'promotions';

export const Promotions = () => {
	return (
		<div className={`${prefixClassPromotions}`}>
			<Banner bannerId={prefixClassPromotions} bannerData={homeBannerData} />

			<SeoContent data={homeSeoContent} />
		</div>
	);
};
