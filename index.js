const preact = require('preact');
const Markup = require('preact-markup').default;
const marked = require('marked');

module.exports = Markdown;

function Markdown(props, opts) {
  opts = opts || {};
  const h = opts.h || preact.h;
  let markdown;
  if (typeof props === 'string') {
    markdown = props;
    props = {};
  } else if (props && typeof props.markdown === 'string') {
    markdown = props.markdown;
  } else {
    throw new Error('Invalid arguments. Markdown requires either a `<String>` or object: `{markdown: <String>}`');
  }

  const markupOpts = props.markupOpts || opts.markupOpts || {};
  const markdownOpts = props.markdownOpts || opts.markdownOpts || {};

  return h(Markup, Object.assign({
    markup: marked(markdown, markdownOpts),
    trim: false,
    type: 'html',
  }, markupOpts));
}
