import { Rocket, Globe2, Wrench, Zap, BookIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/app/store'
import { use } from 'i18next'
import { Button } from '../ui/button'

export const AdminPanel = () => {
  const { t } = useTranslation()

  const { user } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
   console.log("Admin panel..") 
   console.log(user)
  }) 

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-emerald-300 to-emerald-700">
      <section className="w-full py-32 md:py-36">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 space-y-4">
            <div className="flex-col justify-center space-y-4 font-bold text-center text-white sm:text-5xl xl:text-6xl/none">
              Welcome, <span className='font-bold text-6xl'>{user.name}</span>
            </div>
          </div>
          <div className='grid grid-cols-6 items-center gap-6'>
            <div className='col-start-1 py-16'>
              <Button className='font-semibold py-6 w-40'>
                Change password
              </Button>
            </div>
            <div className='col-end-8'>
            < Button className='font-semibold py-6 w-40'>
              New album
            </Button>
            </div>
          </div>
          <div className='grid items-center gap-6 space-y-4'>
            <div className='flex-col justify-center space-y-4 text-center '>
              <span className='text-white font-bold text-4xl'>All albums</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
