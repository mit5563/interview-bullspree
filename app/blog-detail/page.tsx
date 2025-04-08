import React, { Suspense } from 'react'
import BlogDetail from '@/components/BlogDetail';
import Link from 'next/link';
import { Button } from '@mui/material';


export async function generateMetadata({ searchParams }: { searchParams: { id?: string } }) {
    const id = searchParams.id;

    if (!id) {
        return {
            title: 'Post not found',
        };
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return {
            title: 'Error fetching post',
        };
    }

    const data = await res.json();

    return {
        title: data.title,
        description: data.body.slice(0, 150),
    };
}

const page = async ({ searchParams }: any) => {
    let detailId = await searchParams?.id

    if (!detailId) {
        return <div>No ID provided</div>;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts/${detailId}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return <div>Failed to fetch data</div>;
    }

    const data = await res.json();



    return (
        <Suspense fallback={
            <div className='flex justify-center items-center'>
                <h1 className='text-2xl font-semibold'>Loading...</h1>
            </div>
        }>
            <div className='max-w-7xl mx-auto py-10'>
                <div>
                    <Link href='/blogs'>
                        <Button variant="contained" color="primary">
                            Back to Blogs
                        </Button>
                    </Link>

                </div>
                <h1 className='text-2xl font-semibold text-center underline'>Blog Detail</h1>
                <h1 className='text-2xl font-semibold text-center py-5'>Welcome to the blog detail</h1>
                <BlogDetail detailData={data} />

            </div>
        </Suspense>
    )
}

export default page