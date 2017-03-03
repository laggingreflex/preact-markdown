# preact-markdown

[![npm](http://img.shields.io/npm/v/preact-markdown.svg)](https://www.npmjs.com/package/preact-markdown)

[Markdown] in [Preact Markup]

[Markdown]: https://github.com/evilstreak/markdown-js
[Preact Markup]: https://github.com/developit/preact-markup
[hyperscript]: https://github.com/queckezz/preact-hyperscript

## Install

```
npm i preact-markdown
```

## Usage

```
import Markdown from 'preact-markdown';

render(<Markdown markdown={'**Hello** _World_!'} />, document.body);
```

or [hyperscript] style:

```
h(Markdown, {markdown: '**Hello** _World_!'})

// or simply:
Markdown('**Hello** _World_!')

```
