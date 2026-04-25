import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {AppRouter} from "./app/providers/AppRouter.tsx";

const queryClient = new QueryClient();

const root = document.getElementById('root')

if (!root) {
    throw new Error('Root element not found');
}

createRoot(root).render(
  <QueryClientProvider client={queryClient}>
    <AppRouter />
  </QueryClientProvider>
)
