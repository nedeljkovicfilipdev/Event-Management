import React, { ReactNode, useState } from 'react'
import { LanguageSelector } from '../language-selector'
import { Button } from '../ui/button'
import { useTranslation } from 'react-i18next'
import { Github, LogIn, BookOpen, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from 'src/features/auth/authSlice'
import { useAppDispatch } from 'src/app/hooks'

interface IProps {
  leftNode?: ReactNode
}
export function Header(props: IProps) {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const {user} = useSelector((state) => state.auth)
  
  const handleLogout= () => {
    dispatch(logout())
    dispatch(reset())

  }

  const bambi = useState(true)

  return (
    <div className="fixed left-0 top-0 flex w-full items-center justify-between border bg-slate-50 bg-opacity-70 px-4 py-4 md:px-12">
      <Link to="/" className="text-xl font-bold text-slate-600 hover:text-white dark:text-white">
        Event Management Application
      </Link>
      <div className="flex items-center gap-4">
        <LanguageSelector />
        
        {
          user ? (
            <Button size={'icon'} asChild className="rounded-full" onClick={handleLogout}>
              <Link to={'/'}>
                Log out
                <LogOut />
              </Link>
            </Button>
          ) : (
            <Button size={'icon'} asChild className="rounded-full" >
              <Link to={'/login'}>
                Log in
                <LogIn />
              </Link>
            </Button>
          )
        }
        
      </div>
    </div>
  )
}
