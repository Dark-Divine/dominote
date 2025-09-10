import React from 'react'
import { auth } from '@/auth'
import prisma from '@/prisma/prisma'
import { Board, Note, UserTasks } from '@/types/types'
import { BoardMember } from '@prisma/client'


type BoardWithDetails = BoardMember & {
    board: Pick<Board, 'id' | 'title' | 'backgroundUrl'>
}


export default async function DashboardPage() {

    const session = await auth()
    const userId = session?.user?.id
    if (!userId) {
        return []
    }

    const notes: Note[] = await prisma.note.findMany({
        where: {
            userId: userId
        }
    })

    const tasks: UserTasks[] = await prisma.taskAssignment.findMany({
        where: {
            userId: userId
        },
        include: {
            task: true
        }
    })

    // const boards: BoardWithDetails[] = await prisma.boardMember.findMany({
    //     where: {
    //         userId: userId,
    //     },
    //     include: {
    //         board: {
    //             select: {
    //                 id: true,
    //                 title: true,
    //                 backgroundUrl: true,
    //             },
    //         },
    //     },
    //     orderBy: {
    //         createdAt: 'asc',
    //     },
    // })

    return (
        <main className='w-full pt-10 bg-[#202020]'>
            {/* <section className='container w-full mx-auto'>
                <h3 className='font-bold text-2xl'>Boards</h3>
                <div className='w-full my-5'>
                    {boards.map((board, i) => (
                        <div key={board..title} className='p-4 bg-[#191919] border-1 border-[#262626] hover:bg-[#171819] rounded-xl w-[290px]'>
                            <h6 className='font-bold text-lg'>
                                {v.title}
                            </h6>
                            <div className='h-[1px] w-full px-4 bg-white/10 my-3'></div>
                            <p className='text-sm'>
                                {v.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section> */}

            <section className='container w-full mx-auto'>
                <h3 className='font-bold text-2xl'>Notes</h3>
                <div className='w-full my-5'>
                    {notes.map((v, i) => (
                        <div key={v.title} className='p-4 bg-[#191919] border-1 border-[#262626] hover:bg-[#171819] rounded-xl w-[290px]'>
                            <h6 className='font-bold text-lg'>
                                {v.title}
                            </h6>
                            <div className='h-[1px] w-full px-4 bg-white/10 my-3'></div>
                            <p className='text-sm'>
                                {v.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            <div className='h-[1px] w-full px-4 bg-white/10 my-5'></div>
            <section className='container w-full mx-auto'>
                <h3 className='font-bold text-2xl'>Tasks</h3>
                <div className='w-full my-5'>
                    {tasks.map((task, i) => (
                        <div key={task.taskId} className='p-4 bg-[#191919] border-1 border-[#262626] hover:bg-[#171819] rounded-xl w-[290px]'>
                            <h6 className='font-bold text-lg'>
                                {task.task.title}
                            </h6>
                            <div className='h-[1px] w-full px-4 bg-white/10 my-3'></div>
                            <p className='text-sm'>
                                {task.task.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
