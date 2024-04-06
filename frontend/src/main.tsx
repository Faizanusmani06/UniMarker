import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppContextProvider } from "./contexts/AppContext.tsx";
import { ClerkProvider } from '@clerk/clerk-react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0, //no retry in case of error
    },
  },
});
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <App/>
      </AppContextProvider>
    </QueryClientProvider>
    </ClerkProvider>
  </React.StrictMode>
  
);
