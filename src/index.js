module.exports = {
	Client: require('./lib/client'),
	PermLevels: require('./lib/util/permLevels'),
	util: require('./lib/util/util'),
	Command: require('./lib/structures/Command'),
	CommandMessage: require('./lib/structures/CommandMessage'),
	Event: require('./lib/structures/Event'),
	Extendable: require('./lib/structures/Extendable'),
	Finalizer: require('./lib/structures/Finalizer'),
	Inhibitor: require('./lib/structures/Inhibitor'),
	Monitor: require('./lib/structures/Monitor'),
	Provider: require('./lib/structures/Provider'),
	CommandStore: require('./lib/structures/CommandStore'),
	EventStore: require('./lib/structures/EventStore'),
	ExtendableStore: require('./lib/structures/ExtendableStore'),
	FinalizerStore: require('./lib/structures/FinalizerStore'),
	InhibitorStore: require('./lib/structures/InhibitorStore'),
	MonitorStore: require('./lib/structures/MonitorStore'),
	ProviderStore: require('./lib/structures/ProviderStore'),
	CacheManager: require('./lib/settings/cacheManager'),
	SchemaManager: require('./lib/settings/schemaManager'),
	SettingGateway: require('./lib/settings/settingGateway'),
	SQL: require('./lib/settings/SQL'),
	ArgResolver: require('./lib/parsers/argResolver'),
	parsedUsage: require('./lib/parsers/parsedUsage'),
	Resolver: require('./lib/parsers/Resolver'),
	settingResolver: require('./lib/parsers/settingResolver'),
	version: require('../package').version
};
