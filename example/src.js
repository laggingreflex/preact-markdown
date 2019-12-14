import { render, h } from 'preact';
import Markdown from 'preact-markdown'

render(h(App), document.getElementById('app'));

function App() {
  // return Markdown('# Heading')
  return h(Markdown, { markdown: '# Heading' })
  return h(Markdown, {}, '# Heading')
}
