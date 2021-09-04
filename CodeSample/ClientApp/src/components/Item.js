import React, { Component } from 'react';

/**
 * This component render Item Movie
 * */

export const Item = ({ Movie }) => {
    return (
        <tr id={Movie.MovieId}>
            <td scope="col" className="px-1 py-1 text-left text-xxs text-gray-900">{Movie.MovieId}</td>
            <td scope="col" className="px-1 py-1 text-left text-xxs text-gray-900">{Movie.Title}</td>
            <td scope="col" className="px-1 py-1 text-left text-xxs text-gray-900">{Movie.GenderName}</td>
            <td scope="col" className="px-1 py-1 text-left text-xxs text-gray-900">{Movie.Name} {Movie.LastName}</td>
        </tr>
    );
};