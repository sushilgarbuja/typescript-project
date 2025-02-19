import { Note } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardNote = ({ notes }: { notes: Note[] }) => {
    return (
        <div className='flex px-3 py-3 mt-[70px] space-x-30'>
            {notes.map((note, index) => (
                <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-[70px]">
                    <Image className="rounded-t-lg" src={note.file} alt="" width={500} height={500} />
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{note.description}</p>
                        <Link href={`/note/${note._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardNote