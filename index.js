var h = require('preact').h
var Markup = require('preact-markup')
var toHTML = require('markdown').markdown.toHTML

module.exports = Markdown

function Markdown(props) {
  if (typeof props === 'string') {
    return h(Markup, {
      markup: toHTML(props),
      trim: false,
    })
  } else if (props && props.markdown) {
    return h(Markup, Object.assign({
      markup: toHTML(props.markdown),
      trim: false,
    }, props))
  } else {
    throw new Error('Invalid arguments. Markdown requires either a `<String>` or object: `{markdown: <String>}`')
  }
}
