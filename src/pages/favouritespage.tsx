import React from 'react';
import { useAppSelector } from '../hooks/redux';

export function Favouritespage() {
    const {favourites} = useAppSelector(state => state.github)
    if(favourites.length === 0) return <p className='text-center'>No items</p>
    return (
        <>
        <h3 className='text-center font-bold mt-5'>Your Favourite Repos:</h3>
        <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
        <ul className='list-none'>
            {favourites.map(f => (
                <li key={f}>
                    <a target='_blank' className='hover:opacity-[0.5]' href={f}>{f}</a>
                </li>
            ))}
        </ul>
        </div>
        </>
    );
}
