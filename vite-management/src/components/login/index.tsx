import { Rocket, Globe2, Wrench, Zap, BookIcon, User} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const {username, password,} = formData

  useEffect(() => {
   console.log("Login page") 
  }) 

  const onChange = (e: { target: { name: any; value: any } }) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = () => {
    console.log("Logging in")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-300 to-emerald-700 ">
      <section className="w-full py-24">
        <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 py-6 bg-slate-200/50 rounded-[12px]">
          <div className="flex justify-center  font-bold font-sans gap-1 text-2xl">
            <User size={32}/>
            Login
          </div>
          <div className='flex justify-center color-slate-600 font-bold text-white'>
            Input your credentials
          </div>
        </div>
        </div>
      </section>
    
      <section className="w-full ">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <section className='form  bg-slate-200/50 rounded-[12px] py-6'>
                <form onSubmit={onSubmit}>
                  <div className='py-2.5'>
                    <input type='text' 
                    className='bg-white 
                    outline outline-0 focus:outline-1
                    border border-t-transparent focus:border-t-transparent px-3 py-2.5 rounded-[7px] border-blue-gray-200'  
                    id='username' 
                    name='username' 
                    value={username} 
                    placeholder='Enter your username..'
                    onChange={onChange}
                    />
                  </div>
                  <div className='py-2.5'>
                    <input type='password' 
                    className='bg-white 
                    outline outline-0 focus:outline-1
                    border border-t-transparent focus:border-t-transparent px-3 py-2.5 rounded-[7px] border-blue-gray-200'  
                    id='password' 
                    name='password' 
                    value={password} 
                    placeholder='Enter password..'
                    onChange={onChange}
                    />
                  </div>
                  <div className='py-2.5'>
                    <Button type='submit' className="font-semiboldn gap-3 py-6 text-lg" size={'lg'}>
                      Submit
                    </Button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24">
        <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 py-6 bg-slate-200/50 rounded-[12px]">
          <footer className="flex justify-center  font-bold font-sans gap-1 text-2xl">
            <Link to={'/register'}>
            <Button type='submit' className="font-semibold gap-3 py-6 text-lg" size={'lg'}>
              Register
            </Button>
            </Link>
          </footer>
        </div>
        </div>
      </section>
  </div>
  )
}
