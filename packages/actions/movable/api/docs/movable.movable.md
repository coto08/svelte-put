<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@svelte-put/movable](./movable.md) &gt; [movable](./movable.movable.md)

## movable variable

Trigger node displacement on mousedown (via position.left &amp; position.top)

**Signature:**

```typescript
movable: Action<HTMLElement, MovableParameters, MovableAttributes>
```

## Remarks

As with any svelte action, `movable` should be use with element and not component.

```html
<-- correct usage-->
 <div use:movable />

<-- incorrect usage-->
<Component use:movable/>
```
It is recommended to use the `handle` option in [MovableParameters](./movable.movableparameters.md) to avoid unintended behavior. If no `handle` is provided, the whole node is the handle and it might be difficult for user to copy texts within the node.

Be aware of side effects:

- element.style.position is set to `relative` if not already 'absolute', 'relative', or 'fixed during the first time mousedown is triggered

- document.body.userSelect is set to `none` after `mousedown` and restored on `mouseup`

- document.body.cursor is set to `move` after `mousedown` and restored on `mouseup`

## Example 1

Minimal usage

```html
<script>
  import { movable } from '@svelte-put/movable';
</script>

<div use:movable>
  <!-- drag this div and move it freely around the screen -->
</div>
```

## Example 2

A more typical &amp; complex usage of `movable`<!-- -->: move a node when user clicks and on a handle; and limit the movement within a certain boundary.

```html
<script lang="ts">
  import { movable } from '@svelte-put/movable';

  let modal = false;
  let handleNode: HTMLElement;
  let containerNode: HTMLElement;
</script>

<section bind:this={containerNode}>
  <!-- ... some content ... -->

  {#if modal}
    <div
      use:movable={{
        limit: {
          delta: '20%',
          parent: containerNode,
        },
        handle: handleNode,
      }}
      on:movablestart={(event) => console.log('movable:start', event.detail.node, event.detail.position)}
      on:movableend={(event) => console.log('movable:end', event.detail.node, event.detail.position)}
    >
      <button bind:this={handleNode}>
         likely some 'move' icon
      </button>

      <!-- ... some other modal content ... -->
    </div>
  {/if}

</section>
```
Things that will happen in the above example:

1. on `mousedown` of the handle (`button` element), a `movablestart` [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) is dispatched,

2. any `mousemove` event will tell `div` to move accordingly;

3. movement will be limited to the border of the `containerNode`<!-- -->, ±20% of the width &amp; height of the `div` that the action is being used on,

4. `mouseup` event will stop the movement; a `movableend` [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) is dispatched.

