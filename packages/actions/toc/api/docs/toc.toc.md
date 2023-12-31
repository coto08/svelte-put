<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@svelte-put/toc](./toc.md) &gt; [toc](./toc.toc.md)

## toc variable

search for matching elements, inject anchor element, watch for active element in viewport with `IntersectionObserver`<!-- -->. All for building table of contents.

For comprehensive documentation, see [docs site](https://svelte-put.vnphanquang.com/docs/toc)

**Signature:**

```typescript
toc: Action<HTMLElement, TocParameters, TocEventAttributes>
```

## Remarks

As with any svelte action, `clickoutside` should be use with element and not component.

```html
<-- correct usage-->
 <div use:toc />

<-- incorrect usage-->
<Component use:toc/>
```

## Example 1

Minimal use with idiomatic svelte store

```html
<script lang="ts">
  import { toc, createTocStore  } from '@svelte-put/clickoutside';

  const tocStore = createTocStore();

  $: {
     const { activeItem, items } = $tocStore;
     console.log('all extracted toc items', items);
     console.log('activeItem', activeItem); // only if `observer: true`
  }
</script>

<main use:toc={{ store: tocStore, observe: true }}>
  <h1>Page heading</h1>
  <section>
    <h2>Section heading</h2>
  </section>
  ...
</main>
```

## Example 2

Usage with callbacks (alternative to svelte store)

```html
<script lang="ts">
  import { toc } from '@svelte-put/clickoutside';
  import type { TocInitEventDetails, TocChangeEventDetails } from '@svelte-put/clickoutside';

  function handleTocInit(event: CustomEvent<TocInitEventDetails>) {
     const { items } = event.detail;
  }

  function handleTocChange(event: CustomEvent<TocChangeEventDetails>) {
     const { activeItem } = event.detail;
  }
</script>

<main use:toc={{ observe: true }} on:tocinit={handleTocInit} on:tocchange={handleTocChange}>
 ...
</main>
```

