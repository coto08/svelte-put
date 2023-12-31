<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@svelte-put/copy](./copy.md) &gt; [TextResolverInput](./copy.textresolverinput.md)

## TextResolverInput interface

the input passed to [TextResolver](./copy.textresolver.md)

**Signature:**

```typescript
export interface TextResolverInput<K extends keyof HTMLElementEventMap> 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [event](./copy.textresolverinput.event.md) |  | HTMLElementEventMap\[K\] | the event that triggered the listener |
|  [node](./copy.textresolverinput.node.md) |  | HTMLElement | the node the action was registered on |
|  [trigger](./copy.textresolverinput.trigger.md) |  | HTMLElement | the trigger element, as specified by the action parameter, otherwise same as <code>node</code> |

