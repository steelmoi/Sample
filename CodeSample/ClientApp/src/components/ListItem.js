import React, { Component } from 'react';
import { Item } from './Item';

/**
 * This component render the list of movies
 * this movies are extracted from API
 * */

export const ListItem = ({ Movies = [] }) => {
    const TableHeader = () => {
        return (
            <thead class="bg-gray-50">
                <th scpoe="col" className="px-2 py-3 text-left  text-xxs text-gray-900">ID</th>
                <th scpoe="col" className="px-2 py-3 text-left  text-xxs text-gray-900">Movie</th>
                <th scpoe="col" className="px-2 py-3 text-left  text-xxs text-gray-900">Gender</th>
                <th scpoe="col" className="px-2 py-3 text-left  text-xxs text-gray-900">Actor</th>
            </thead>
        );
    }
    return (        
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <TableHeader />
                <tbody className="bg-white divide-y divide-gray-200">
                        
                </tbody>
            </table>
        </div>
    );
};
