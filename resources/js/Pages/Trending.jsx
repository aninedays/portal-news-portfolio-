import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { data } from 'autoprefixer';

export default function Trending(props) {
    console.log(props)
    return (
        <div className='flex justify-center items-center min-h-screen bg-neutral-800'>

            <Head title={props.title} />
            <div>
                <p>{props.description}</p>
                {props.news ? props.news.map((data, i) => {
                    return (
                        <div key={i} className="p-4 m-2 bg-white text-black shadow-md border rounded-md">
                            <p className='text-2xl'>{data.title}</p>
                            <p className='text-sm'>{data.description}</p>
                            <i>{data.author}</i>
                            <i>{data.category}</i>
                            <p className='text-sm'>{data.country}</p>
                        </div>
                    )
                }) : <p>There is no data</p>}
            </div>
        </div>
    )
}
