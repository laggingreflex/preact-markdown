# preact-markdown

[![npm](http://img.shields.io/npm/v/preact-markdown.svg)](https://www.npmjs.com/package/preact-markdown)

Markdown in [Preact Markup] using [Marked]

[Marked]: https://github.com/chjj/marked
[Preact Markup]: https://github.com/developit/preact-markup
[hyperscript]: https://github.com/queckezz/preact-hyperscript

## Install

```
npm i preact-markdown
```

## Usage

```
import Markdown from 'preact-markdown';

render(<Markdown markdown={'**Hello** _World_!'} markupOpts={...} markdownOpts={...} />, document.body);
```

or [hyperscript] style:

```
h(Markdown, {markdown: '**Hello** _World_!', markupOpts: {...}, markdownOpts: {...}})

// or simply:
Markdown('**Hello** _World_!', {markupOpts:{...}, markdownOpts:{...}})

```
