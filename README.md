# ts-config with defaults

Copy and paste src/config, it into your project

Files:
* src/config/env.def.ts - default values, also have *Configure* interface that should be populated with properties
* src/config/env.(dev|stag|prod).ts - for different environment, we might have different configurations
* src/config/index.ts - combiner & exporter 

### Deps

* lodash.defaultsdeep - because of deep assign requirements

### Recommendation

I highly recommend to use a [dotenv](https://www.npmjs.com/package/dotenv), for crucial data such as credentials,
and use the ENVs inside the config.

### License

[Copyleft](https://en.wikipedia.org/wiki/Copyleft)

