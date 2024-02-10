import React from 'react'
import { createHashRouter, RouteObject } from 'react-router-dom'
import ErrorPage from './components/error-page'
import { getDefaultLayout } from './components/layout'
import HomePage from './pages/home'
import { Explore } from './components/explore'
import { Login } from './components/login'
import { Register } from './components/register'
import { AdminPanel } from './components/adminPanel'

export const routerObjects: RouteObject[] = [
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/explore',
    Component: Explore,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/dashboard',
    Component: AdminPanel
  },
  {
    path: '/register',
    Component: Register
  }
]

export function createRouter(): ReturnType<typeof createHashRouter> {
  const routeWrappers = routerObjects.map((router) => {
    // @ts-ignore TODO: better type support
    const getLayout = router.Component?.getLayout || getDefaultLayout
    const Component = router.Component!
    const page = getLayout(<Component />)
    return {
      ...router,
      element: page,
      Component: null,
      ErrorBoundary: ErrorPage,
    }
  })
  return createHashRouter(routeWrappers)
}
