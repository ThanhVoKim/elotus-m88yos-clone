declare module '*.html' {
	const rawHtmlFile: string;
	export = rawHtmlFile;
}

declare module '*.bmp' {
	const src: string;
	export default src;
}

declare module '*.gif' {
	const src: string;
	export default src;
}

declare module '*.jpg' {
	const src: string;
	export default src;
}

declare module '*.jpeg' {
	const src: string;
	export default src;
}

declare module '*.png' {
	const src: string;
	export default src;
}

declare module '*.webp' {
	const src: string;
	export default src;
}

declare module '*.svg' {
	const src: string;
	export default src;
}

declare module '@m88yos/utils' {
	import UtilsModule = require('@root/utils-module/src/m88yos-utils');
	// export const components: typeof UtilsModule.components;
	export = UtilsModule;
}
