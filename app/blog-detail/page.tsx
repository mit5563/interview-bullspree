"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card, CardContent } from '@mui/material'

const page = () => {

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
        <div className='max-w-7xl mx-auto py-10'>
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

export default page