<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@svelte-put/resize](./resize.md) &gt; [resize](./resize.resize.md)

## resize variable

Create an [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) that observers this node

**Signature:**

```typescript
resize: Action<HTMLElement, ResizeParameters, ResizeAttributes>
```

## Remarks

As with any svelte action, `resize` should be use with element and not component.

```html
<-- correct usage-->
 <div use:resize />

<-- incorrect usage-->
<Component use:resize/>
```

## Example


```html
<script lang="ts">
 import { resize, type ResizeDetail } from '@svelte-put/resize';

 function onResized(event: CustomEvent<ResizeDetail>) {
   const { observer, entries } = event.detail;
   console.log('action resize was used on element', observer.target);
   console.log('list of ResizeObserverEntry:', entries);

  // see MDN docs for what you can do with ResizeObserverEntry
  // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry
 }
</script>

<section use:resize on:resized={onResized}>
  ...
</section
```

