<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@svelte-put/shortcut](./shortcut.md) &gt; [ShortcutModifierDefinition](./shortcut.shortcutmodifierdefinition.md)

## ShortcutModifierDefinition type

Possible variations for modifier definition

**Signature:**

```typescript
export type ShortcutModifierDefinition = ShortcutModifier | ShortcutModifier[] | ShortcutModifier[][];
```
**References:** [ShortcutModifier](./shortcut.shortcutmodifier.md)

## Example 1

Listen for a single modifier

```svelte
<script>
 import { shortcut } from '@svelte-put/shortcut';
</script>

<window use:shortcut={{
  trigger: {
   key: 'k' ,
   modifier: 'ctrl',
  },
}}
/>
```

## Example 2

Listen for one of many modifiers (or)

```svelte
<script>
 import { shortcut } from '@svelte-put/shortcut';
</script>

<window use:shortcut={{
  trigger: {
   key: 'k' ,
   modifier: ['ctrl', 'meta'],
  },
}}
/>
```

## Example 3

Listen for a combination of multiple modifiers (and)

```svelte
<script>
 import { shortcut } from '@svelte-put/shortcut';
</script>

<window use:shortcut={{
  trigger: {
   key: 'k' ,
   modifier: [['ctrl', 'shift']],
  },
}}
/>

```

## Example 4

A mix of the 3 previous examples

```svelte
<script>
 import { shortcut } from '@svelte-put/shortcut';
</script>

<window use:shortcut={{
  trigger: {
   key: 'k' ,
   modifier: [
     ['ctrl', 'shift'], // ctrl and shift
                        // or
     ['meta'],          // meta
   ],
  },
}}
/>
```

