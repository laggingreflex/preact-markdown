var preact = require('preact')
var Markup = require('preact-markup')
var marked = require('marked')

module.exports = Markdown

function Markdown(props, opts) {
  opts = opts || {}
  var h = opts.h || preact.h;
  if (typeof props === 'string') {
    var markupOpts = opts.markupOpts || {}
    var markdownOpts = opts.markdownOpts || {}
    return h(Markup, Object.assign({
      markup: marked(props, markdownOpts),
      trim: false,
      type: 'html',
    }, opts.markupOpts))
  } else if (props && typeof props.markdown === 'string') {
    var markupOpts = props.markupOpts || opts.markupOpts || {}
    var markdownOpts = props.markdownOpts || opts.markdownOpts || {}
    return h(Markup, Object.assign({
      markup: marked(props.markdown, markdownOpts),
      trim: false,
      type: 'html',
    }, markupOpts))
  } else {
    throw new Error('Invalid arguments. Markdown requires either a `<String>` or object: `{markdown: <String>}`')
  }
}
