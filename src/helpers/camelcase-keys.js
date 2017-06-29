import QuickLru from './quick-lru';
const mapObj = require('./map-obj');
const camelCase = require('./camelcase');

const has = (arr, key) => arr.some(x => typeof x === 'string' ? x === key : x.test(key));
const cache = new QuickLru({maxSize: 100000});

const camelcaseKeys = (input, _opts) => {
	const opts = Object.assign({
		deep: false
	}, _opts);

	const exclude = opts.exclude;

	return mapObj(input, (key, val) => {
		if (!(exclude && has(exclude, key))) {
			if (cache.has(key)) {
				key = cache.get(key);
			} else {
				const ret = camelCase(key);

				if (key.length < 100) { // Prevent abuse
					cache.set(key, ret);
				}

				key = ret;
			}
		}

		return [key, val];
	}, {deep: opts.deep});
};

export default camelcaseKeys;
