'use client'
import React from 'react'
import LayoutAuth from '../layout-auth'
import { Input } from '@/components/ui/input'
import { Eye, EyeClosed } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
    const [showPassword, setShowPassword] = React.useState(false)
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    return (
        <LayoutAuth>
            <div className="flex flex-col gap-0 text-center w-4/5 mx-auto">
                <h1 className="text-xl font-bold text-deep-blue">Sign in</h1>
                <p className="text-sm font-normal">Akses akun Anda dengan memasukkan email dan kata sandi.</p>
            </div>

            <form className="mt-6 flex flex-col">
                <div className="form-group mb-2">
                    <label htmlFor="">Email</label>
                    <Input type='email' placeholder='Masukan Email' />
                </div>

                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <div className="relative flex items-center justify-end">
                        <Input type={showPassword ? 'text' : 'password'} placeholder='Masukan Password' />
                        {showPassword ? <Eye className='absolute mr-2 w-5 h-auto' onClick={togglePasswordVisibility}/> : <EyeClosed className='absolute mr-2 w-5 h-auto' onClick={togglePasswordVisibility}/>}
                    </div>
                </div>

                <div className="flex items-center justify-end w-full">
                    <Link href="#" className='text-sm text-blue-700'>Lupa Passowrd?</Link>
                </div>

                <Button className='mt-2 font-bold'>Sign In</Button>

                <div className="flex items-center justify-start w-full text-sm mt-1">
                    Belum punya akun?<Link href="/register" className='text-sm text-blue-700'>Sign up</Link>
                </div>
            </form>

        </LayoutAuth>
    )
}
