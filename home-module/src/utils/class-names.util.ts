type TClassNamesParams = Record<string, any> & {
	preDefined?: Record<string, any>;
};

export const classNames = (classNamesObj: TClassNamesParams) => {
	const classNamesResult = Object.keys(classNamesObj).flatMap((key) => {
		if (key === 'preDefined') {
			const stringClassNames = Object.values(classNamesObj['preDefined']!)
				.filter(Boolean)
				.join(' ');
			return [stringClassNames];
		} else if (classNamesObj[key]) {
			return [key];
		}
		return [];
	});
	return classNamesResult.join(' ');
};
