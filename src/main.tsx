import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import { App } from 'app/App';
import { enableMocking } from 'app/mockWorker/mockWorkerSetup';
import { store } from 'app/providers/StoreProvider';
import { ErrorPage } from 'widgets/ErrorPage';

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <StoreProvider store={store}>
          <ErrorBoundary fallback={<ErrorPage />}>
            <App />
          </ErrorBoundary>
        </StoreProvider>
      </BrowserRouter>
    </StrictMode>,
  );
});
