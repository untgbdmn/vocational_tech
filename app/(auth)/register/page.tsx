'use client'
import React from 'react'
import LayoutAuth from '../layout-auth'
import { Input } from '@/components/ui/input'
import { Eye, EyeClosed } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function RegisterPage() {
    const [showPassword, setShowPassword] = React.useState(false)
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }
    return (
        <LayoutAuth>
            <div className="flex flex-col gap-0 text-center w-4/5 mx-auto">
                <h1 className="text-xl font-bold text-deep-blue">Sign Up</h1>
                <p className="text-sm font-normal">Isi informasi Anda untuk mendaftar dan mulai menggunakan aplikasi kami.</p>
            </div>

            <form className="mt-6 grid grid-cols-2 gap-x-3 px-7">
            <div className="form-group mb-2">
                        <label htmlFor="">Nama</label>
                        <Input type='name' placeholder='Masukan Nama' />
                    </div>

                    <div className="form-group mb-2">
                        <label htmlFor="">Email</label>
                        <Input type='email' placeholder='Masukan Email' />
                    </div>

                <div className="form-group mb-2">
                    <label htmlFor="">Password</label>
                    <div className="relative flex items-center justify-end">
                        <Input type={showPassword ? 'text' : 'password'} placeholder='Masukan Password' />
                        {showPassword ? <Eye className='absolute mr-2 w-5 h-auto' onClick={togglePasswordVisibility} /> : <EyeClosed className='absolute mr-2 w-5 h-auto' onClick={togglePasswordVisibility} />}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="">Konformasi Password</label>
                    <div className="relative flex items-center justify-end">
                        <Input type={showConfirmPassword ? 'text' : 'password'} placeholder='Konformasi Password' />
                        {showConfirmPassword ? <Eye className='absolute mr-2 w-5 h-auto' onClick={toggleConfirmPasswordVisibility} /> : <EyeClosed className='absolute mr-2 w-5 h-auto' onClick={toggleConfirmPasswordVisibility} />}
                    </div>
                </div>

                <Button className='mt-2 font-bold col-span-2'>Sign In</Button>

                <div className="flex items-center justify-start w-full text-sm mt-1">
                    Sudah punya akun?<Link href="/login" className='text-sm text-blue-700'>Sign in</Link>
                </div>
            </form>

        </LayoutAuth>
    )
}
