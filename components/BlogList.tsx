"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Button, Card, CardContent, CardHeader, Typography } from '@mui/material';
import Link from 'next/link';

const BlogList = () => {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts`);
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);


    return (
        <>
            <Typography variant='h3' className='text-center font-bold py-5 underline'>
                Welcome to the blogs
            </Typography>
            <Grid container spacing={2}>
                {posts.map((post) => (
                    <Grid key={post.id} size={4}>
                        <Card>
                            <CardContent>
                                <h2 className='font-semibold text-2xl'>{post.title}</h2>
                                <p>{post.body}</p>
                            </CardContent>

                            <CardContent className='!flex !justify-end'>
                                <Link href={`/blog-detail?id=${post.id}`}>
                                    <Button variant="contained" color="primary">
                                        Read More
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default BlogList