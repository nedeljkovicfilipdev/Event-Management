import { Rocket, Globe2, Wrench, Zap, BookIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

export const Starter = () => {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-emerald-300 to-emerald-700">
      <section className="w-full py-32 md:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="mb-24">
                <h1 className="mb-6 text-3xl font-bold tracking-tighter text-transparent text-white sm:text-5xl xl:text-6xl/none">
                  {t('booking-title')}
                </h1>
                <Button className="font-semiboldn gap-3 py-6 text-lg" size={'lg'} asChild>
                  <Link to="/explore">
                    <BookIcon />
                    {t('get-started')}
                  </Link>
                </Button>
              </div>
              <div className="mx-auto w-full max-w-full space-y-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                    <div className="rounded-full bg-black p-4 text-white">
                      <Rocket size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{t('modernstack')}</h2>
                    <p className="text-white">{t('modernstack-desc')}</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                    <div className="rounded-full bg-black p-4 text-white">
                      <Globe2 size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{t('filter-support')}</h2>
                    <p className="text-white">{t('filter-support-desc')}</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                    <div className="rounded-full bg-black p-4 text-white">
                      <Wrench size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-white"> {t('admin-support')} </h2>
                    <p className="text-white">{t('admin-support-desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
