// ** React Import
import React from 'react';
// ** Loader Import
import NProgress from 'nprogress';
// ** Emotion Imports
import { CacheProvider } from '@emotion/react';
// ** Config Imports
import themeConfig from '@/configs/theme.config';
import type { EmotionCache } from '@emotion/cache';
import ThemeComponent from '@/theme/theme-component';
import { createEmotionCache } from '@/utils/emotion-cache';
// ** React Router Dom
import { useLocation, useSearchParams } from 'react-router-dom';
// ** Contexts
import { SettingsConsumer, SettingsProvider } from '@/contexts/settings.context';

interface GlobalLayoutProps {
  children: React.ReactNode;
  emotionCache: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

export default function GlobalLayout({
  children,
  emotionCache = clientSideEmotionCache
}: GlobalLayoutProps): React.ReactElement {
  const pathname = useLocation();
  const searchParams = useSearchParams();
  React.useEffect(() => {
    if (themeConfig.routingLoader) {
      NProgress.done();
    }

    // Return a default value, such as an empty function or undefined
    return () => {
      NProgress.start();
    };
    // return () => {};
  }, [pathname, searchParams]);

  return (
    <CacheProvider value={emotionCache}>
      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => <ThemeComponent settings={settings}>{children}</ThemeComponent>}
        </SettingsConsumer>
      </SettingsProvider>
    </CacheProvider>
  );
}
