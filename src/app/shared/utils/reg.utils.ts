export const RegUtils = {
	mailValid: (val: string): boolean => {
		let reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/g;

		return reg.test(val);
	},
	isNumber: (val: string): boolean => {
		let reg = /^\d+$/g;
		return reg.test(val);
	},
	isPhone: (val: string): boolean => {
		let reg = /^1[346578]\d{9}$/;
		return reg.test(val);
	},
	replaceByHolder: (str: string, data: string[], holder = '%s'): string => {
		const _arr = str.split(holder);
		let _str = '';
		_arr.forEach((item, index) => {
			let str_temp = data[index] ? data[index] : holder;
			if ( index < _arr.length - 1 ) {
				_str += item + str_temp;
			} else {
				if ( item )
					_str += item;
				else
					_str += str_temp;
			}
			;
		});
		return _str;
	},
	isImage( name : string ): boolean{
		const reg = /jpg|png|jpeg/g ;
		return reg.test( name ) ;
	}
};
