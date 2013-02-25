
var util = require('./lib/ipputil');

module.exports = {
	parse: require('./lib/parser'),
	request: require('./lib/request'),
	versions: require('./lib/versions'),
	//attributes: q(require('./lib/attributes')),
	keywords: require('./lib/keywords'),
	enums: require('./lib/enums'),
	tags: require('./lib/tags'),
	operations: require('./lib/operations'),
	statusCodes: require('./lib/status-codes')
};
module.exports.attribute = {
	//http://www.iana.org/assignments/ipp-registrations/ipp-registrations.xml#ipp-registrations-7
	groups: util.xref(module.exports.tags.lookup.slice(0x00, 0x0F)),
	//http://www.iana.org/assignments/ipp-registrations/ipp-registrations.xml#ipp-registrations-8
	values: util.xref(module.exports.tags.lookup.slice(0x10, 0x1F)),
	//http://www.iana.org/assignments/ipp-registrations/ipp-registrations.xml#ipp-registrations-9
	syntaxes: util.xref(module.exports.tags.lookup.slice(0x20))
}
