import React, { useMemo } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { createRouter } from './router'
import { store } from './features/store'

export default function App() {
  /*
  @Tanstack
  const queryClient = useMemo(() => new QueryClient({}), [])
  */
  return (
    <Provider store={store}>
      <RouterProvider router={createRouter()} />
    </Provider>
  )
}
