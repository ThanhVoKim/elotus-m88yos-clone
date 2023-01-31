import { AreaMobileDownload, Banner, SeoContent } from '@m88yos/utils';
import {
	CasinoHome,
	EsportsHome,
	JackpotsHome,
	LiveCasinoHome,
	ProvidersHome,
	SignInModalHome,
	SignUpModalHome,
	SpecialPromoHome,
	SportHome,
	StepGuide,
} from 'src/components';

import { homeBannerData, homeSeoContent } from 'src/mocks';
import './home.style.scss';

export const prefixClassHome = 'home-page';

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
			<SignUpModalHome />
			<SignInModalHome />
		</div>
	);
};
