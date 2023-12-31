<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@svelte-put/toc](./toc.md) &gt; [TocAnchorParameters](./toc.tocanchorparameters.md)

## TocAnchorParameters interface

options to config how `toc` action inject anchor tag for each matching toc element

**Signature:**

```typescript
export interface TocAnchorParameters 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [content?](./toc.tocanchorparameters.content.md) |  | string | _(Optional)_ content of the inserted anchor tag, ignored when behavior is <code>wrap</code>. Default to: '\# |
|  [enabled?](./toc.tocanchorparameters.enabled.md) |  | boolean | _(Optional)_ whether to insert an anchor tag for each matching node |
|  [href?](./toc.tocanchorparameters.href.md) |  | (id: string) =&gt; string | _(Optional)_ href attribute of the inserted anchor tag Default to: <code>href: (id) =&gt; '#' + id</code> |
|  [position?](./toc.tocanchorparameters.position.md) |  | 'prepend' \| 'append' \| 'wrap' \| 'before' \| 'after' | <p>_(Optional)_ where to create the anchor tag</p><p>- 'prepend' — inject link before the target tag text</p><p>- 'append' — inject link after the target tag text</p><p>- 'wrap' — wrap the whole target tag text with the link</p><p>- 'before' — insert link before the target tag</p><p>- 'after' — insert link after the target tag Default to: 'prepend'</p> |
|  [properties?](./toc.tocanchorparameters.properties.md) |  | Record&lt;string, string&gt; | _(Optional)_ properties set to the inserted anchor tag, Default to: <code>{ 'aria-hidden': 'true', 'tab-index': '-1' }</code> |

