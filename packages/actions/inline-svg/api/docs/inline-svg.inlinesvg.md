<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@svelte-put/inline-svg](./inline-svg.md) &gt; [inlineSvg](./inline-svg.inlinesvg.md)

## inlineSvg variable

Svelte action for dynamically inlining remote-fetched SVG into DOM

**Signature:**

```typescript
inlineSvg: Action<SVGElement, InlineSvgActionParameters>
```

## Remarks

For a static solution for inlining SVG at build time, use [@svelte-put/preprocess-inline-svg](https://svelte-put.vnphanquang.com/docs/preprocess-inline-svg)<!-- -->, which is also conveniently re-exported by this package

```javascript
// svelte.config.js
import inlineSvg from '@svelte-put/preprocess-inline-svg';

\/** @type {import('@sveltejs/kit').Config} *\/
const config = {
  preprocess: [inlineSvg()],
};
export default config;
```

## Example


```html
<script>
  import { inlineSvg } from '@svelte-put/inline-svg;
</script>

<svg use:inlineSvg={"http://example.com/icon.svg"}></svg>
```

