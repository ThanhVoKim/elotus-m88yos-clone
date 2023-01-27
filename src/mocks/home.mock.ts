import { IMatch } from 'src/components/match-card';
import { ISportCard } from 'src/components/sport-card';

import leedsUnitedLogo from 'src/assets/teams/Leeds_United.png';
import cardiffCityLogo from 'src/assets/teams/Cardiff_City.png';
import msportsImage from 'src/assets/sports/msports_VN.png';
import sabaImage from 'src/assets/sports/saba_VN.png';
import pinnacleImage from 'src/assets/sports/pinnacle_VN.png';

export const matchData: IMatch[] = Array.from({ length: 7 }, () => ({
	title: 'ENGLISH FA CUP',
	date: '19 tháng 1',
	teamA: 'Leeds United',
	teamB: 'Cardiff City',
	logoTeamA: leedsUnitedLogo,
	logoTeamB: cardiffCityLogo,
}));

export const sportCardData: ISportCard[] = [
	{
		background: msportsImage,
		path: '#',
	},
	{
		background: sabaImage,
		path: '#',
	},
	{
		background: pinnacleImage,
		path: '#',
	},
];

import clubLiveImage from 'src/assets/live-casino/club_vi-VN.png';
import sexyLiveImage from 'src/assets/live-casino/sexygaminglivedealer_vi-VN.png';
import laligaLiveImage from 'src/assets/live-casino/laliga_vi-VN.png';
import acLiveImage from 'src/assets/live-casino/acmilanstudio_vi-VN.png';
import ogLiveImage from 'src/assets/live-casino/oglivecasino_vi-VN.png';
import agLiveImage from 'src/assets/live-casino/LC-Card-AG-min_vi-VN.png';
import wmLiveImage from 'src/assets/live-casino/wm-casino_vi-VN.png';
import microLiveImage from 'src/assets/live-casino/microgaminglivedealer_vi-VN.png';
import { ILiveCasioCard } from 'src/components/live-casio-card';

export const liveCasioHighlightCardData: ILiveCasioCard[] = [
	{
		background: clubLiveImage,
		path: '#',
		baccarat: 15,
		sicbo: 2,
		roulette: 2,
		size: 'lg',
	},
	{
		background: sexyLiveImage,
		path: '#',
		baccarat: 15,
		sicbo: 2,
		roulette: 2,
		size: 'lg',
	},
];

export const liveCasioCardData: ILiveCasioCard[] = [
	{
		background: laligaLiveImage,
		path: '#',
		baccarat: 15,
		sicbo: 2,
		roulette: 2,
	},
	{ background: acLiveImage, path: '#', baccarat: 15, sicbo: 2, roulette: 2 },
	{ background: ogLiveImage, path: '#', baccarat: 15, sicbo: 2, roulette: 2 },
	{ background: agLiveImage, path: '#', baccarat: 15, sicbo: 2, roulette: 2 },
	{ background: wmLiveImage, path: '#', baccarat: 15, sicbo: 2, roulette: 2 },
	{
		background: microLiveImage,
		path: '#',
		baccarat: 15,
		sicbo: 2,
		roulette: 2,
	},
];

import LanternLuckImage from 'src/assets/casino/LanternLuck.jpg';
import LuckyNewYearImage from 'src/assets/casino/LuckyNewYear.jpg';
import MoneyTreeDozenImage from 'src/assets/casino/MoneyTreeDozen.jpg';
import LuckyBaoBeiImage from 'src/assets/casino/LuckyBaoBei.jpg';
import LuckyTwinsLinkWinImage from 'src/assets/casino/LuckyTwinsLinkWin.jpg';
import XiangQiWaysImage from 'src/assets/casino/XiangQiWays.jpg';
import CaiShenWinsImage from 'src/assets/casino/CaiShenWins.jpg';
import KuXuanCaiShenImage from 'src/assets/casino/KuXuanCaiShen.jpg';
import AllBetsBlackjackImage from 'src/assets/casino/AllBetsBlackjack.jpg';
import BigWinCatImage from 'src/assets/casino/BigWinCat.jpg';
import iconHABANERO from 'src/assets/providers/icon-provider-HABANERO.svg';
import iconPRAGMATIC from 'src/assets/providers/icon-provider-PRAGMATIC.svg';
import iconFACHAIGAMING from 'src/assets/providers/icon-provider-FA-CHAI-GAMING.svg';
import iconVIVA from 'src/assets/providers/icon-provider-VIVA.svg';
import iconMICROGAMING from 'src/assets/providers/icon-provider-MICROGAMING.svg';
import iconADVANTPLAY from 'src/assets/providers/icon-provider-ADVANT-PLAY.svg';
import iconPGSOFT from 'src/assets/providers/icon-provider-PG-SOFT.svg';
import iconSKYWINDGAMES from 'src/assets/providers/icon-provider-SKYWIND-GAMES.svg';
import iconCQ9 from 'src/assets/providers/icon-provider-CQ9.svg';
import iconPLAYTECH from 'src/assets/providers/icon-provider-PLAYTECH.svg';

import { IGameCard } from 'src/components/game-card';

export const casioGameCardData: IGameCard[] = [
	{
		background: LanternLuckImage,
		providerIcon: iconHABANERO,
		title: 'LanternLuck',
		path: '#',
	},
	{
		background: LuckyNewYearImage,
		providerIcon: iconPRAGMATIC,
		title: 'LuckyNewYear',
		path: '#',
	},
	{
		background: MoneyTreeDozenImage,
		providerIcon: iconFACHAIGAMING,
		title: 'MoneyTreeDozen',
		path: '#',
	},
	{
		background: LuckyBaoBeiImage,
		providerIcon: iconVIVA,
		title: 'LuckyBaoBei',
		path: '#',
	},
	{
		background: LuckyTwinsLinkWinImage,
		providerIcon: iconMICROGAMING,
		title: 'LuckyTwinsLinkWin',
		path: '#',
	},
	{
		background: XiangQiWaysImage,
		providerIcon: iconADVANTPLAY,
		title: 'XiangQiWays',
		path: '#',
	},
	{
		background: CaiShenWinsImage,
		providerIcon: iconPGSOFT,
		title: 'CaiShenWins',
		path: '#',
	},
	{
		background: KuXuanCaiShenImage,
		providerIcon: iconSKYWINDGAMES,
		title: 'KuXuanCaiShen',
		path: '#',
	},
	{
		background: AllBetsBlackjackImage,
		providerIcon: iconPLAYTECH,
		title: 'All Bets Blackjack',
		path: '#',
	},
	{
		background: BigWinCatImage,
		providerIcon: iconCQ9,
		title: 'BigWinCat',
		path: '#',
	},
];

import habaneroSmallImage from 'src/assets/providers/habanero-small.svg';
import habaneroImage from 'src/assets/providers/habanero.svg';
import cq9SmallImage from 'src/assets/providers/cq9-small.svg';
import cq9Image from 'src/assets/providers/cq9.svg';
import vivagamingSmallImage from 'src/assets/providers/vivagaming-small.svg';
import vivagamingImage from 'src/assets/providers/vivagaming.svg';
import microgamingSmallImage from 'src/assets/providers/microgaming-small.svg';
import microgamingImage from 'src/assets/providers/microgaming.svg';
import pgsoftSmallImage from 'src/assets/providers/pgsoft-small.svg';
import pgsoftImage from 'src/assets/providers/pgsoft.svg';
import advantplaySmallImage from 'src/assets/providers/advantplay-small.svg';
import advantplayImage from 'src/assets/providers/advantplay.svg';
import skywindSmallImage from 'src/assets/providers/skywind-small.svg';
import skywindImage from 'src/assets/providers/skywind.svg';
import pragmaticSmallImage from 'src/assets/providers/pragmatic-small.svg';
import pragmaticImage from 'src/assets/providers/pragmatic.svg';
import playtechSmallImage from 'src/assets/providers/playtech-small.svg';
import playtechImage from 'src/assets/providers/playtech.svg';
import facaisenSmallImage from 'src/assets/providers/facaisen-small.svg';
import facaisenImage from 'src/assets/providers/facaisen.svg';
import hacksawSmallImage from 'src/assets/providers/hacksaw-small.svg';
import hacksawImage from 'src/assets/providers/hacksaw.svg';
import spribeSmallImage from 'src/assets/providers/spribe-small.svg';
import spribeImage from 'src/assets/providers/spribe.svg';
import nolimitSmallImage from 'src/assets/providers/no-limit-small.svg';
import nolimitImage from 'src/assets/providers/no-limit.svg';
import playngoSmallImage from 'src/assets/providers/play-n-go-small.svg';
import playngoImage from 'src/assets/providers/play-n-go.svg';
import pushgamingSmallImage from 'src/assets/providers/pushgaming-small.svg';
import pushgamingImage from 'src/assets/providers/pushgaming.svg';
import btgSmallImage from 'src/assets/providers/btg-small.svg';
import btgImage from 'src/assets/providers/btg.svg';
import redtigerSmallImage from 'src/assets/providers/redtiger-small.svg';
import redtigerImage from 'src/assets/providers/redtiger.svg';
import onetouchSmallImage from 'src/assets/providers/onetouch-small.svg';
import onetouchImage from 'src/assets/providers/onetouch.svg';

export const providersHomeData = [
	{ smallImage: habaneroSmallImage, image: habaneroImage, path: '#' },
	{ smallImage: cq9SmallImage, image: cq9Image, path: '#' },
	{ smallImage: vivagamingSmallImage, image: vivagamingImage, path: '#' },
	{ smallImage: microgamingSmallImage, image: microgamingImage, path: '#' },
	{ smallImage: pgsoftSmallImage, image: pgsoftImage, path: '#' },
	{ smallImage: advantplaySmallImage, image: advantplayImage, path: '#' },
	{ smallImage: skywindSmallImage, image: skywindImage, path: '#' },
	{ smallImage: pragmaticSmallImage, image: pragmaticImage, path: '#' },
	{ smallImage: playtechSmallImage, image: playtechImage, path: '#' },
	{ smallImage: facaisenSmallImage, image: facaisenImage, path: '#' },
	{ smallImage: hacksawSmallImage, image: hacksawImage, path: '#' },
	{ smallImage: spribeSmallImage, image: spribeImage, path: '#' },
	{ smallImage: nolimitSmallImage, image: nolimitImage, path: '#' },
	{ smallImage: playngoSmallImage, image: playngoImage, path: '#' },
	{ smallImage: pushgamingSmallImage, image: pushgamingImage, path: '#' },
	{ smallImage: btgSmallImage, image: btgImage, path: '#' },
	{ smallImage: redtigerSmallImage, image: redtigerImage, path: '#' },
	{ smallImage: onetouchSmallImage, image: onetouchImage, path: '#' },
];

import internationalLogo from 'src/assets/lottery/internationallottery-logo.svg';
import jackpotImage from 'src/assets/lottery/jackpot-home-bg.jpg';
import speedpk10Logo from 'src/assets/lottery/speedpk10-logo.svg';
import speedpk10Image from 'src/assets/lottery/speedpk10-bg.jpg';
import vncentralLogo from 'src/assets/lottery/vncentral-logo.svg';
import vncentralImage from 'src/assets/lottery/vncentral-bg.jpg';
import superspeedLogo from 'src/assets/lottery/superspeed-logo.svg';
import vnsouthImage from 'src/assets/lottery/vnsouth-bg.jpg';
import { ILotteryCard } from 'src/components/lottery-card';

export const lotteryCardData: ILotteryCard[] = [
	{
		logo: internationalLogo,
		background: jackpotImage,
		title: 'XỔ SỐ MIỀN BẮC',
	},
	{ logo: speedpk10Logo, background: speedpk10Image, title: 'XỔ SỐ MIỀN NAM' },
	{
		logo: vncentralLogo,
		background: vncentralImage,
		title: 'XỔ SỐ MIỀN TRUNG',
	},
	{ logo: superspeedLogo, background: vnsouthImage, title: 'XỔ SỐ MEGA' },
	{
		logo: internationalLogo,
		background: jackpotImage,
		title: 'XỔ SỐ MIỀN BẮC',
		describe: 'lên đến',
		quantity: 'VND 761,4 Tỷ',
	},
	{
		logo: speedpk10Logo,
		background: speedpk10Image,
		title: 'XỔ SỐ MIỀN NAM',
		describe: 'lên đến',
		quantity: 'VND 761,4 Tỷ',
	},
	{
		logo: vncentralLogo,
		background: vncentralImage,
		title: 'XỔ SỐ MIỀN TRUNG',
		describe: 'lên đến',
		quantity: 'VND 761,4 Tỷ',
	},
	{
		logo: superspeedLogo,
		background: vnsouthImage,
		title: 'XỔ SỐ MEGA',
		describe: 'lên đến',
		quantity: 'VND 761,4 Tỷ',
	},
];
