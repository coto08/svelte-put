## API Report File for "@svelte-put/avatar"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AnimationEventHandler } from 'svelte/elements';
import { AriaRole } from 'svelte/elements';
import { Booleanish } from 'svelte/elements';
import { ClipboardEventHandler } from 'svelte/elements';
import { CompositionEventHandler } from 'svelte/elements';
import { DragEventHandler } from 'svelte/elements';
import { EventHandler } from 'svelte/elements';
import { FocusEventHandler } from 'svelte/elements';
import { FormEventHandler } from 'svelte/elements';
import type { HTMLImgAttributes } from 'svelte/elements';
import { KeyboardEventHandler } from 'svelte/elements';
import { MessageEventHandler } from 'svelte/elements';
import { MouseEventHandler } from 'svelte/elements';
import { PointerEventHandler } from 'svelte/elements';
import { SvelteComponentTyped } from 'svelte';
import { TouchEventHandler } from 'svelte/elements';
import { TransitionEventHandler } from 'svelte/elements';
import { UIEventHandler } from 'svelte/elements';
import { WheelEventHandler } from 'svelte/elements';

// Warning: (ae-forgotten-export) The symbol "AvatarEvents" needs to be exported by the entry point index.d.ts
//
// @public
export class Avatar extends SvelteComponentTyped<AvatarProps, AvatarEvents, AvatarSlots> {
}

// @public
export interface AvatarProps extends HTMLImgAttributes {
    alt?: string;
    // (undocumented)
    class?: string;
    fallback?: string;
    gravatar?: GravatarOptions | string;
    size?: number;
    src?: string;
    uiAvatar?: string | UIAvatarOptions;
}

// @public
export interface AvatarSlots {
    // (undocumented)
    default: {
        src: string;
        alt: string;
        size: number;
        sources: string[];
    };
}

// @public
export function gravatar(input: string | GravatarOptions): string;

// @public
export type GravatarDefault = '404' | 'mp' | 'identicon' | 'monsterid' | 'wavatar' | 'retro' | 'robohash' | 'blank' | `${'http' | 'https'}://${string}.${'png' | 'jpg' | 'jpeg' | 'gif'}`;

// @public
export interface GravatarOptions {
    default?: GravatarDefault;
    email: string;
    forcedefault?: 'y';
    rating?: 'g' | 'pg' | 'r' | 'x';
    size?: number;
}

// @public
export function uiAvatar(input: string | UIAvatarOptions): string;

// @public
export interface UIAvatarOptions {
    'font-size'?: number;
    background?: string;
    bold?: boolean;
    color?: string;
    format?: 'svg' | 'png';
    length?: number;
    name: string;
    rounded?: boolean;
    size?: number;
    uppercase?: boolean;
}

```
