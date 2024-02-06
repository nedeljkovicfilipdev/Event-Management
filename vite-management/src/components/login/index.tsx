import { Rocket, Globe2, Wrench, Zap, BookIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'
import { useEffect } from 'react'

export const Login = () => {
  const { t } = useTranslation()

  useEffect(() => {
   console.log("Logging in..") 
  }) 

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-emerald-300 to-emerald-700">
      <section className="w-full py-32 md:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6">
            <div className="flex flex-col justify-center space-y-4 text-center">
              FORMA
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
