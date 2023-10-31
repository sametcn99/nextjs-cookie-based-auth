'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import Messages from '../messages'

const LoginForm = () => {
    const [password, setPassword] = useState('')

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password }),
        })

        const json = await res.json()

        if (!res.ok) throw Error(json.message || 'Something happened')

        router.push('/')
        router.refresh()
    }

    return (
        <>
            <form
                className="flex flex-col flex-1 gap-2 justify-center w-full"
                onSubmit={handleSubmit}
            >
                <label className="text-md" htmlFor="password">
                    Password
                </label>
                <input
                    className="py-2 px-4 mb-6 rounded-md border bg-inherit"
                    type="password"
                    name="password"
                    placeholder=""
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="py-2 px-4 mb-2 font-thin bg-gray-800 rounded-md"
                    type="submit"
                >
                    Login
                </button>
            </form>
            <Messages />
        </>
    )
};

export default LoginForm;