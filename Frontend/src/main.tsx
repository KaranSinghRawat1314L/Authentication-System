import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { UserProvider } from './context/userContext.tsx'
const queryclient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <UserProvider>
         <QueryClientProvider client={queryclient}>
            <App/>
         </QueryClientProvider>
     </UserProvider>
  </StrictMode>
);
