const assert = require('assert');

const Markdown = require('.');

describe('basic', () => {
  it('throws on empty', () => {
    assert.throws(() => Markdown());
  });
  it('parse string', () => {
    assert.deepEqual(Markdown('string').attributes, { markup: '<p>string</p>\n', trim: false, type: 'html' });
  });
  it('parse {markdown}', () => {
    assert.deepEqual(Markdown({ markdown: 'string' }).attributes, { markup: '<p>string</p>\n', trim: false, type: 'html' });
  });
  it('markupOpts {trim:true}', () => {
    assert.deepEqual(Markdown('string', { markupOpts: { trim: true } }).attributes, { markup: '<p>string</p>\n', trim: true, type: 'html' });
  });
});
