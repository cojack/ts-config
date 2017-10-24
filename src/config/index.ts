import * as _defaultDeep from 'lodash.defaultsdeep';
import {Config, def} from './env.def';
import {dev} from './env.dev';
import {stag} from './env.stag';
import {prod} from './env.prod';

let config: Config;

switch (process.env.NODE_ENV) {
	case 'development':
		config = dev;
		break;
	case 'staging':
		config = stag;
		break;
	case 'production':
		config = prod;
		break;
	default:
		config = def;
		break;
}

_defaultDeep(config, def);

export default config;