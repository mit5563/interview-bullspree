import React, { Suspense } from 'react'
import BlogDetail from '@/components/BlogDetail'

const page = () => {



    return (
        <Suspense fallback={
            <div className='flex justify-center items-center'>
                <h1 className='text-2xl font-semibold'>Loading...</h1>
            </div>
        }>
            <div className='max-w-7xl mx-auto py-10'>
                <BlogDetail />

            </div>
        </Suspense>
    )
}

export default page