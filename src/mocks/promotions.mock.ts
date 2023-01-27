import { IPromotionCard } from 'src/components/promotion-card';

export const promotionsFilterMenu = [
	{ name: 'Hiển Thị Tất Cả', value: '#' },
	{ name: 'NỔI BẬT', value: '#' },
	{ name: 'THÀNH VIÊN MỚI', value: '#' },
	{ name: 'HOÀN TRẢ', value: '#' },
	{ name: 'THỂ THAO', value: '#' },
	{ name: 'CASINO TRỰC TUYẾN', value: '#' },
	{ name: 'SLOTS/BẮN CÁ', value: '#' },
	{ name: 'THỂ THAO ĐIỆN TỬ', value: '#' },
	{ name: 'Keno & Xổ Số', value: '#' },
	{ name: 'GIỚI THIỆU BẠN CHƠI', value: '#' },
	{ name: 'P2P', value: '#' },
];

import background4133 from 'src/assets/promotions/4133.jpg';
import background4085 from 'src/assets/promotions/4085.jpg';
import background2577 from 'src/assets/promotions/2577.jpg';
import background2575 from 'src/assets/promotions/2575.jpg';
import background2571 from 'src/assets/promotions/2571.jpg';
import background2573 from 'src/assets/promotions/2573.jpg';
import background4335 from 'src/assets/promotions/4335.jpg';
import background2774 from 'src/assets/promotions/2774.jpg';
import background2576 from 'src/assets/promotions/2576.jpg';
import background4096 from 'src/assets/promotions/4096.jpg';

export const highlightedPromotions: IPromotionCard[] = [
	{
		background: background4133,
		categories: ['esports'],
		title: 'DOTA PRO CIRCUIT​ HOÀN TRẢ',
		daysLeft: '7 Ngày Còn Lại',
	},
	{
		background: background4133,
		categories: ['esports'],
		title: 'BXH DOTA PRO CIRCUIT 2023',
		daysLeft: '28 Ngày Còn Lại',
	},
	{
		background: background4133,
		categories: ['sports'],
		title: 'BẢNG XẾP HẠNG TẾT 2023',
		daysLeft: '13 Ngày Còn Lại',
	},
	{
		background: background4133,
		categories: ['casino-games'],
		title: 'FA CHAI HOÀN TRẢ ĐỘC QUYỀN',
		daysLeft: '9 Ngày Còn Lại',
	},
];

export const newMembersPromotions: IPromotionCard[] = [
	{
		background: background4085,
		categories: ['esports', 'new-members'],
		title: 'GÓI THƯỞNG THỂ THAO 150%',
		detail: 'Thêm 88 FREESPINS',
		daysLeft: 'Đang diễn ra',
	},
	{
		background: background4085,
		categories: ['casino-games', 'new-members'],
		title: 'CASINO 188% THƯỞNG NĂM MỚI',
		detail: 'THÊM LÌ XÌ',
		daysLeft: '4 Ngày Còn Lại',
	},
	{
		background: background4085,
		categories: ['live-casino', 'new-members'],
		title: 'GÓI THƯỞNG CHÀO MỪNG CASINO TRỰC TUYẾN 175%',
		detail: 'Thêm 88 FREESPINS',
		daysLeft: 'Đang diễn ra',
	},
	{
		background: background4085,
		categories: ['esports', 'new-members'],
		title: '188% THƯỞNG CHÀO MỪNG E-SPORT',
		detail: '18x VÒNG CƯỢC!',
		daysLeft: 'Đang diễn ra',
	},
];

export const refundPromotions: IPromotionCard[] = [
	{
		background: background2577,
		categories: ['sports', 'rebate'],
		title: '0.33% M THỂ THAO HOÀN TRẢ',
		detail: 'KHÔNG GIỚI HẠN & VÒNG CƯỢC',
		daysLeft: 'Đang diễn ra',
	},
	{
		background: background2577,
		categories: ['casino-games', 'rebate'],
		title: '0.8% SLOTS/BẮN CÁ HOÀN TRẢ',
		detail: 'THƯỞNG KHÔNG GIỚI HẠN',
		daysLeft: 'Đang diễn ra',
	},
	{
		background: background2577,
		categories: ['live-casino', 'rebate'],
		title: '0.8% LIVE CASINO HOÀN TRẢ',
		detail: 'THƯỞNG MỖI NGÀY',
		daysLeft: 'Đang diễn ra',
	},
	{
		background: background2577,
		categories: ['keno-lotto', 'rebate'],
		title: '1% KENO & XỔ SỐ HOÀN TRẢ',
		detail: 'NHẬN THƯỞNG MỖI NGÀY',
		daysLeft: 'Đang diễn ra',
	},
];

export const sportsPromotions: IPromotionCard[] = [
	{
		background: background2573,
		categories: ['sports', 'rebate'],
		title: '0.33% M THỂ THAO HOÀN TRẢ',
		detail: 'KHÔNG GIỚI HẠN & VÒNG CƯỢC',
		daysLeft: 'Đang diễn ra',
	},
	{
		background: background2573,
		categories: ['sports', 'rebate'],
		title: '0.33% THỂ THAO* HOÀN TRẢ',
		detail: 'THƯỞNG KHÔNG GIỚI HẠN',
		daysLeft: 'Đang diễn ra',
	},
];

export const liveCasinoPromotions: IPromotionCard[] = [
	{
		background: background2571,
		categories: ['live-casino', 'rebate'],
		title: '0.8% LIVE CASINO HOÀN TRẢ',
		detail: 'THƯỞNG MỖI NGÀY',
		daysLeft: 'Đang diễn ra',
	},
	{
		background: background2571,
		categories: ['live-casino', 'rebate'],
		title: '0.8% LIVE CASINO HOÀN TRẢ',
		detail: 'THƯỞNG MỖI NGÀY',
		daysLeft: 'Đang diễn ra',
	},
	{
		background: background2571,
		categories: ['live-casino'],
		title: 'ĐẦU XUÂN TRANH ĐẤU',
		daysLeft: '32 Ngày Còn Lại',
	},
	{
		background: background2571,
		categories: ['live-casino'],
		title: 'RƯƠNG BÁU TẾT QUÝ MÃO',
		daysLeft: 'Đang diễn ra',
	},
];

export const casinoPromotions: IPromotionCard[] = [
	{
		background: background2575,
		categories: ['casino-games', 'rebate'],
		title: '0.8% SLOTS/BẮN CÁ HOÀN TRẢ',
		detail: 'THƯỞNG KHÔNG GIỚI HẠN',
		daysLeft: 'Đang diễn ra',
	},
	{
		background: background2575,
		categories: ['casino-games'],
		title: 'FA CHAI HOÀN TRẢ ĐỘC QUYỀN',
		daysLeft: '9 Ngày Còn Lại',
	},
	{
		background: background2575,
		categories: ['casino-games'],
		title: 'LÌ XÌ TẾT ĐẦU NĂM 2023',
		daysLeft: '32 Ngày Còn Lại',
	},
	{
		background: background2575,
		categories: ['casino-games'],
		title: 'GIẢI ĐẤU MAY MẮN TẾT 2023',
		daysLeft: '32 Ngày Còn Lại',
	},
];

export const p2pPromotions: IPromotionCard[] = [
	{
		background: background4335,
		categories: ['p2p'],
		title: 'SĂN LỘC ĐẦU NĂM CÙNG V8',
		daysLeft: 'Đang diễn ra',
	},
];

export const esportsPromotions: IPromotionCard[] = [
	{
		background: background2774,
		categories: ['esports', 'rebate'],
		title: '0.33% ESPORTS HOÀN TRẢ',
		detail: 'KHÔNG GIỚI HẠN & VÒNG CƯỢC',
		daysLeft: 'Đang diễn ra',
	},
	{
		background: background2774,
		categories: ['esports'],
		title: 'DOTA PRO CIRCUIT​ HOÀN TRẢ',
		daysLeft: '23 Ngày Còn Lại',
	},
	{
		background: background2774,
		categories: ['esports'],
		title: 'BXH DOTA PRO CIRCUIT 2023',
		daysLeft: '22 Ngày Còn Lại',
	},
];

export const lotteryPromotions: IPromotionCard[] = [
	{
		background: background2576,
		categories: ['esports', 'rebate'],
		title: '1% KENO & XỔ SỐ HOÀN TRẢ',
		detail: 'NHẬN THƯỞNG MỖI NGÀY',
		daysLeft: 'Đang diễn ra',
	},
];

export const referralPromotions: IPromotionCard[] = [
	{
		background: background4096,
		categories: ['casino-games'],
		title: 'GIỚI THIỆU BẠN BÈ',
		detail: 'MỜI NHIỀU, THƯỞNG NHIỀU!',
		daysLeft: 'Đang diễn ra',
	},
];

export const carouselPromotionsData = [
	{
		areaTitle: 'NỔI BẬT',
		navTitle: `Xem Tất Cả (${highlightedPromotions.length})`,
		navPath: '#',
		data: highlightedPromotions,
	},
	{
		areaTitle: 'THÀNH VIÊN MỚI',
		navTitle: `Xem Tất Cả (${newMembersPromotions.length})`,
		navPath: '#',
		data: newMembersPromotions,
	},
	{
		areaTitle: 'HOÀN TRẢ',
		navTitle: `Xem Tất Cả (${refundPromotions.length})`,
		navPath: '#',
		data: refundPromotions,
	},
	{
		areaTitle: 'THỂ THAO',
		navTitle: `Xem Tất Cả (${sportsPromotions.length})`,
		navPath: '#',
		data: sportsPromotions,
	},
	{
		areaTitle: 'CASINO TRỰC TUYẾN ',
		navTitle: `Xem Tất Cả (${liveCasinoPromotions.length})`,
		navPath: '#',
		data: liveCasinoPromotions,
	},
	{
		areaTitle: 'SLOTS/BẮN CÁ',
		navTitle: `Xem Tất Cả (${casinoPromotions.length})`,
		navPath: '#',
		data: casinoPromotions,
	},
	{
		areaTitle: 'P2P',
		navTitle: `Xem Tất Cả (${p2pPromotions.length})`,
		navPath: '#',
		data: p2pPromotions,
	},
	{
		areaTitle: 'THỂ THAO ĐIỆN TỬ',
		navTitle: `Xem Tất Cả (${esportsPromotions.length})`,
		navPath: '#',
		data: esportsPromotions,
	},
	{
		areaTitle: 'Keno & Xổ Số',
		navTitle: `Xem Tất Cả (${lotteryPromotions.length})`,
		navPath: '#',
		data: lotteryPromotions,
	},

	{
		areaTitle: 'GIỚI THIỆU BẠN CHƠI',
		navTitle: `Xem Tất Cả (${referralPromotions.length})`,
		navPath: '#',
		data: referralPromotions,
	},
];
