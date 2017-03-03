var h = require('preact').h
var Markup = require('preact-markup')
var toHTML = require('markdown').markdown.toHTML

module.exports = Markdown

function Markdown(props) {
  if (typeof props === 'string') {
    return h(Markup, { markup: toHTML(props) })
  } else if (props && props.markdown) {
    return h(Markup, Object.assign({
      markup: toHTML(props.markdown)
    }, props))
  } else {
    throw new Error('Invalid arguments. Markdown requires either a `<String>` or object: `{markdown: <String>}`')
  }
}
