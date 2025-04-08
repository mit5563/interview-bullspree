import React from 'react'
import { BlogList } from '@/interface/blog'
import { Card, CardContent } from '@mui/material'

const BlogDetail: React.FC<{ detailData: BlogList }> = ({ detailData }) => {



    return (
        <div>
            {
                detailData && detailData?.title ?
                    <>
                        <Card className='max-w-sm mx-auto py-10'>
                            <CardContent>
                                <h2 className='font-semibold text-2xl'>{detailData?.title}</h2>
                                <p>{detailData?.body}</p>
                            </CardContent>
                        </Card>
                    </>
                    :
                    <div className='flex justify-center items-center'>
                        <h1 className='text-2xl font-semibold'>Loading...</h1>
                    </div>

            }
        </div>
    )
}

export default BlogDetail