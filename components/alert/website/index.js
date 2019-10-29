// @codegen
let fs = require('fs');
let path = require('path');

let files = fs.readdirSync(path.join(__dirname, 'snippets'));

module.exports = files
	.map(x => {
		const { name } = path.parse(x);
		// hmmmmmm 😅
		const shortName = name.split('_')[1];
		return `
      import * as ${shortName} from './snippets/${x}';
      export {${shortName}};
    `;
	})
	.join('\n');
