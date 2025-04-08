import BlogList from '@/components/BlogList';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: 'Blog List',
    description: 'This is the blog list page',
};


const page = () => {
    return (
        <div className='max-w-7xl mx-auto py-10'>
            <BlogList />
        </div>
    );


}

export default page