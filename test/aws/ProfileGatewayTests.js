const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;
// const lambda = require('../../src/aws/legacy-lambda');
const fs = require('promise-fs');
const util = require('util');

describe('ProfileGateway', async () => {
    describe('Something', async () => {
        it('does something else', async () => {
            // const target = createTarget();

            // const request = JSON.parse(await fs.readFile('./test/fixtures/legacy/TempIntent.json'));
            // const context = {};

            // const handler = util.promisify(target.object().handler);

            // const response = await handler(request, context);
            expect('hello').to.equal('hello');
        });
    });
});