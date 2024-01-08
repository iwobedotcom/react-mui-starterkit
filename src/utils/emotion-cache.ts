import createCache, { EmotionCache } from '@emotion/cache';

// Pretend: true moves MUI styles to the top of the <head></head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions.

export function createEmotionCache(): EmotionCache {
  return createCache({ key: 'css', prepend: true });
}
