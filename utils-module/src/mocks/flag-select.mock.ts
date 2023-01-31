import {
	flagVietnamIcon,
	flagChinaIcon,
	flagEnglishIcon,
	flagJapanIcon,
	flagKoreaIcon,
	flagIndonesiaIcon,
	flagThailandIcon,
} from '../assets';

interface ILanguageItem {
	path?: string;
	flag?: string;
	name?: string;
}
export const languageSelectData: ILanguageItem[] = [
	{ flag: flagVietnamIcon, name: 'Tiếng Việt', path: '#' },
	{ flag: flagChinaIcon, name: '简体中文', path: '#' },
	{ flag: flagEnglishIcon, name: 'English', path: '#' },
	{ flag: flagJapanIcon, name: '日本', path: '#' },
	{ flag: flagKoreaIcon, name: '한국어', path: '#' },
	{ flag: flagIndonesiaIcon, name: 'Bhs Indonesia', path: '#' },
	{ flag: flagThailandIcon, name: 'ไทย', path: '#' },
];
