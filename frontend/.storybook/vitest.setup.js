import { setProjectAnnotations } from '@storybook/react';
import * as projectAnnotations from './preview';

if (typeof globalThis.fetch === 'undefined' || process.env.VITEST) {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (input, init) => {
    try {
      if (originalFetch) return await originalFetch(input, init);
    } catch (e) {
      // Fallback
    }
    return new Response(JSON.stringify({}), { status: 200, headers: { 'Content-Type': 'application/json' }});
  };
}

setProjectAnnotations(projectAnnotations);
