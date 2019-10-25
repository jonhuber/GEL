require('dotenv').config();

const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NextApp } = require('@keystonejs/app-next');
const { Text } = require('@keystonejs/fields');
const { KnexAdapter } = require('@keystonejs/adapter-knex');

const keystone = new Keystone({
	name: 'GEL3 Website',
	adapter: new KnexAdapter(),
});

keystone.createList('Demo', {
	fields: {
		name: { type: Text },
	},
});

module.exports = {
	keystone,
	apps: [
		new GraphQLApp(),
		new AdminUIApp({
			adminPath: '/admin',
		}),
		new NextApp({ dir: 'site' }),
	],
};
