var h = require('preact').h
var Markup = require('preact-markup')
var marked = require('marked')

module.exports = Markdown

function Markdown(props) {
  if (typeof props === 'string') {
    return h(Markup, {
      markup: marked(props),
      trim: false,
      type: 'html',
    })
  } else if (props && props.markdown) {
    return h(Markup, Object.assign({
      markup: marked(props.markdown),
      trim: false,
      type: 'html',
    }, props))
  } else {
    throw new Error('Invalid arguments. Markdown requires either a `<String>` or object: `{markdown: <String>}`')
  }
}
