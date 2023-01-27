import { AreaMobileDownload } from 'src/components/area-mobile-download';
import {
	CasinoHome,
	EsportsHome,
	JackpotsHome,
	LiveCasinoHome,
	ProvidersHome,
	SpecialPromoHome,
	SportHome,
	StepGuide,
} from 'src/components/home';
import { SeoContent } from 'src/components/seo-content';
import { Banner } from 'src/components/banner';

import { homeBannerData, homeSeoContent } from 'src/mocks';
import './home.style.scss';

export const prefixClassHome = 'home';

export const Home = () => {
	return (
		<div className={`${prefixClassHome}`}>
			<Banner bannerId={prefixClassHome} bannerData={homeBannerData} />
			<StepGuide />
			<SportHome />
			<LiveCasinoHome />
			<CasinoHome />
			<ProvidersHome />
			<EsportsHome />
			<SpecialPromoHome />
			<JackpotsHome />
			<AreaMobileDownload />
			<SeoContent data={homeSeoContent} />
		</div>
	);
};
