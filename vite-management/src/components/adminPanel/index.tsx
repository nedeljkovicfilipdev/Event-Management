import { Rocket, Globe2, Wrench, Zap, BookIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/app/store'
import { use } from 'i18next'

export const AdminPanel = () => {
  const { t } = useTranslation()

  const { user } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
   console.log("Admin panel..") 
   console.log(user)
  }) 

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-emerald-300 to-emerald-700">
      <section className="w-full py-32 md:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6">
            <div className="flex flex-col justify-center space-y-4 text-center">
              Welcome <h1>{user.name}</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
