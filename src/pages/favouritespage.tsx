import React, {useState} from 'react';
import { useAppSelector } from '../hooks/redux';
import { useActions } from '../hooks/actions';

export function Favouritespage() {
    const {removeFavourite} = useActions()
    const {favourites} = useAppSelector(state => state.github)
    console.log(favourites)
    if(favourites.length === 0) return <p className='text-center'>No items</p>

    const removeFromFavourite = (repo_url: string) : void => {
        removeFavourite(repo_url)

    }
    return (
        <>
        <h3 className='text-center font-bold mt-5'>Your Favourite Repos:</h3>
        <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
        <ul className='list-none'>
            {favourites.map(f => (
                <li key={f}>
                    <a target='_blank' className='hover:opacity-[0.5]' href={f}>{f}</a>
                    <button 
                    className='py-1 mb-5 mt-5 ml-2 px-2 font-thin bg-gray-200 rounded hover:shadow-md transition-all'
                    onClick={() => removeFromFavourite(f)}>
                        Remove
                    </button>
                    <hr />
                </li>
            ))}
        </ul>
        </div>
        </>
    );
}
