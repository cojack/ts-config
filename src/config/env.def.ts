export interface Config {
	http?: any;
}

export const def: Config = {
	http: {
		port: 8080,
		host: 'localhost'
	}
};