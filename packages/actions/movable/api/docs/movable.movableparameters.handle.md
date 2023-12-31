<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@svelte-put/movable](./movable.md) &gt; [MovableParameters](./movable.movableparameters.md) &gt; [handle](./movable.movableparameters.handle.md)

## MovableParameters.handle property

A node that triggers mousedown event, otherwise the node itself is the handle

**Signature:**

```typescript
handle?: HTMLElement;
```

## Remarks

`handle` should be an HTMLElement not a Svelte component.

```html
<div use:movable={{ handle }}/>

<-- correct usage-->
<div bind:this={handle} />

<-- incorrect usage-->
<Component bind:this={handle} />
```

