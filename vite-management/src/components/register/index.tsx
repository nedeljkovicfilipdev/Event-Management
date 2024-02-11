import { Rocket, Globe2, Wrench, Zap, BookIcon, User, UserPlus} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'
import { FormEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { register, reset } from 'src/features/auth/authSlice'
import { useAppDispatch } from 'src/app/hooks'
import { RootState } from 'src/app/store'

interface UserData {
  username: string,
  name: string;
  email: string;
  password: string
}

export const Register = () => {
  
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    password2: '',
    email: '',
  })

  const {name, username, password, password2, email} = formData

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success
      navigate('/dashboard')
      
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);

  const onChange = (e: { target: { name: any; value: any } }) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      const userData: UserData = {
        username,
        name,
        email,
        password,
      };

      dispatch(register(userData))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-300 to-emerald-700 ">
      <section className="py-24 ">
        <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 py-6 bg-slate-200/50 rounded-[12px]">
          <div className="flex justify-center  font-bold font-sans gap-1 text-2xl">
            <User size={32}/>
            Register
          </div>
          <div className='flex justify-center color-slate-600 font-bold text-white'>
            Please fill out the form for registration
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
                    <input type='text' className='bg-white 
                    outline outline-0 focus:outline-1
                    border border-t-transparent focus:border-t-transparent px-3 py-2.5 rounded-[7px] border-blue-gray-200' 
                    id='name' 
                    name='name' 
                    value={name} 
                    placeholder='Enter your name..'
                    onChange={onChange}
                    />
                  </div>
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
                    <input type='email' 
                    className='bg-white 
                    outline outline-0 focus:outline-1
                    border border-t-transparent focus:border-t-transparent px-3 py-2.5 rounded-[7px] border-blue-gray-200'  
                    id='email' 
                    name='email' 
                    value={email} 
                    placeholder='Enter your email..'
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
                    <input type='password' 
                    className='bg-white 
                    outline outline-0 focus:outline-1
                    border border-t-transparent focus:border-t-transparent px-3 py-2.5 rounded-[7px] border-blue-gray-200'  
                    id='password2' 
                    name='password2' 
                    value={password2} 
                    placeholder='Confirm password..'
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
    </div>
  )
}
