var preact = require('preact');
var Markup = require('preact-markup');
var marked = require('marked');

module.exports = Markdown;

function Markdown(props, opts) {
  opts = opts || {};
  var h = opts.h || preact.h;
  var markdown, markupOpts, markdownOpts;
  if (typeof props === 'string') {
    markdown = props;
    props = {};
  } else if (props && typeof props.markdown === 'string') {
    markdown = props.markdown;
  } else {
    throw new Error('Invalid arguments. Markdown requires either a `<String>` or object: `{markdown: <String>}`');
  }

  var markupOpts = props.markupOpts || opts.markupOpts || {};
  var markdownOpts = props.markdownOpts || opts.markdownOpts || {};
  return h(Markup, Object.assign({
    markup: marked(markdown, markdownOpts),
    trim: false,
    type: 'html',
  }, markupOpts));
}
