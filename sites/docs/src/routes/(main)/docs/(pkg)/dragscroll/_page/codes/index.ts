import axis from './custom.axis.svelte?raw';
import limitationSnapScroll from './limitation.scroll-snap.svelte?raw';
import noParameters from './no-parameters.svelte?raw';
import quickStart from './quick-start.svelte?raw';

const axisInstruction = `<div use:dragscroll={{ axis: 'x' }}>...</div>
<div use:dragscroll={{ axis: 'y' }}>...</div>
<div use:dragscroll={{ axis: 'both' }}>...</div>
`;

const event = `<div use:dragscroll={{ event: 'pointer' }}>...</div>
<div use:dragscroll={{ event: 'mouse' }}>...</div>
`;

const cursor = `div use:dragscroll={{ cursor: false }}>...</div>`;

export const codes = {
  quickStart: {
    instruction: quickStart,
    demo: noParameters,
  },
  custom: {
    axis: {
      instruction: axisInstruction,
      demo: axis,
    },
    event,
    cursor,
  },
  limitationSnapScroll,
} as const;
