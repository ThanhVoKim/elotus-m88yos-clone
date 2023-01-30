import bannerImg1 from 'src/assets/banners/msports-daily-rebate_VN.jpg';
import bannerImg2 from 'src/assets/banners/laliga_smash_VN.jpg';
import bannerImg3 from 'src/assets/banners/casino-welcome-bonus_VN.jpg';
import bannerImg4 from 'src/assets/banners/live-casino-welcome-bonus_VN.jpg';
import bannerImg5 from 'src/assets/banners/mariaozawaroom_new.jpg';
import iconRebate from 'src/assets/banners/rebate-upto033_VN.svg';
import iconSport from 'src/assets/banners/ftd-sports_VN.svg';
import iconMaria from 'src/assets/banners/marias-room.svg';
import { IBannerItem } from '@m88yos/utils';

export const homeBannerData: IBannerItem[] = [
	{
		background: bannerImg1,
		icon: iconRebate,
		title: 'M THỂ THAO HOÀN TRẢ',
		detail: 'KHÔNG GIỚI HẠN & VÒNG CƯỢC',
		buttonTitle: 'ĐĂNG KÝ',
	},
	{
		background: bannerImg2,
		icon: iconSport,
		title: '200% THƯỞNG LALIGA',
		detail: 'Lên Đến VND 15,800',
		buttonTitle: 'ĐĂNG KÝ',
	},
	{
		background: bannerImg3,
		icon: iconSport,
		title: '188% THƯỞNG NĂM MỚI \nLên đến VND 2,888',
		detail: 'THÊM LÌ XÌ',
		buttonTitle: 'ĐĂNG KÝ',
	},
	{
		background: bannerImg4,
		icon: iconSport,
		title: '175% LÊN ĐẾN 3,688 VND',
		detail: 'THÊM 88 FREESPINS',
		buttonTitle: 'ĐĂNG KÝ',
	},
	{
		background: bannerImg5,
		icon: iconMaria,
		title: 'LỜI CẢM ƠN TỪ \nMARIA OZAWA',
		detail: 'GỬI TIỀN TỐI THIỂU 1,600 VND',
		buttonTitle: 'ĐĂNG KÝ',
	},
];
