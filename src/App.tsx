import { BrowserRouter } from 'react-router-dom';
import type { EmotionCache } from '@emotion/cache';

import AppRouter from './routes';
import GlobalLayout from './layout/global';
import { createEmotionCache } from './utils/emotion-cache';

const emotionCache: EmotionCache = createEmotionCache();
function App() {
  return (
    <BrowserRouter>
      <GlobalLayout emotionCache={emotionCache}>
        <AppRouter />
      </GlobalLayout>
    </BrowserRouter>
  );
}

export default App;
