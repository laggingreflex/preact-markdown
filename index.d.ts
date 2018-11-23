declare module 'preact-markdown';

import { VNode } from 'preact';

declare var p: PreactMarkdown;
export = p;

interface PreactMarkdown {
    (request: string, opts?: object): VNode;
    (request: object, opts?: object): VNode;
}
