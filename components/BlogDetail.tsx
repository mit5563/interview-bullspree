"use client"
import { Card, CardContent } from '@mui/material'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const BlogDetail = () => {
    const [detailData, setDetailData] = useState<any>(null)
    const searchParams = useSearchParams()
    const detailId: string = searchParams.get("id") as string

    const callDetailApi = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts/${detailId}`)
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    }


    useEffect(() => {

        const fetchData = async () => {
            let data = await callDetailApi()
            setDetailData(data)
        }
        fetchData()

    }, [])


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