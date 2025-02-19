import { Note } from '@/types'
import Image from 'next/image'
import React from 'react'
import PreviewButton from './components/PreviewButton'
const SinglePage = async ({ params }: { params: { noteId: string } }) => {
    let note: Note | null = null
    const response = await fetch(`${process.env.BACKEND_URL}notes/${params?.noteId}`)
    console.log(response)
    try {
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        const { data } = await response.json()
        note = data
    } catch (error) {
        console.log(error)
    }
    return (
        <main className="container mx-auto px-4 py-8 max-w-3xl">
            <article className="bg-white shadow-lg rounded-lg overflow-hidden">

                <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{note?.title}</h1>
                    <h2 className="text-xl text-gray-600 mb-4">{note?.subtitle}</h2>
                    <Image src={note?.file as string} alt="News article image" width={600} height={400}
                    />
                    <PreviewButton filelink={note?.file as string} />
                    <p className="text-gray-700 leading-relaxed">
                        {note?.description}
                    </p>
                </div>

            </article>
        </main>
    )
}

export default SinglePage
