<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@svelte-put/toc](./toc.md) &gt; [TocObserveParameters](./toc.tocobserveparameters.md) &gt; [threshold](./toc.tocobserveparameters.threshold.md)

## TocObserveParameters.threshold property

threshold passed to `IntersectionObserver`<!-- -->. Default to: `(element) => Math.min((0.8 * window.innerHeight) / element.offsetHeight, 1)`

**Signature:**

```typescript
threshold?: number | ((element: HTMLElement) => number);
```

## Remarks

Alternatively, `data-toc-threshold` (number) attribute can be set on the matching toc element

