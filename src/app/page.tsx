import MainForm from '@/components/MainForm'
import React from 'react'

export default function Home() {
    return (
        <main className="flex min-h-screen min-w-full flex-col items-center justify-center p-24">
            <div className="border w-48 flex rounded-md p-32">
                <MainForm />
            </div>
        </main>
    )
}
