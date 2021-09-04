import React, { Component, useEffect, useState } from 'react';

/**
 * This component render the form to search movies
 * moust be consume web api
 * */

export const Search = () => {
    const [ActorList, setActorList] = useState([]);
    const [GenderList, setGenderList] = useState([]);

    //Extra List of Gender from API
    useEffect(async () => {
        const response = await fetch('/https://localhost:44301/api/Genders');
        const data = await response.json();

        this.setGenderList(data);
              
    }, [GenderList]);

    //Extra List of Actors from API
    useEffect(async () => {
        const response = await fetch('/https://localhost:44301/api/Actors');
        const data = await response.json();

        this.setActorList(data);
    }, [ActorList]);

    const onSelectGender = (e) => {
        console.log("onSelectGender ...");
    }

    const onSelectActor = (e) => {
        console.log("onSelectActor ...");
    }

    const handleClick = (e) => {
        console.log("searching ...");
    }

    return (
        <form className="form-search">
            <div className="relative h-10 border-2 border-black">
                <div className="absolute inset-y-0 left-0 flex  items-center pointer-events-none">
                    <label className="block text-gray-70 text-base font-semibold mb-2">Title</label>
                    <input type="text" className="w-full h-full focus:outline-none mb-2" placeholder="Title" value="" />
                </div>                
            </div>
            <div className="relative h-10 border-2 border-black">
                <div className="absolute inset-y-0 left-0 flex  items-center pointer-events-none">
                    <label className="block text-gray-70 text-base font-semibold mb-2">Gender</label>
                    <select value={GenderList} onChange={onSelectGender} defaultSelection={GenderList[0]} />
                </div>                
            </div>
            <div className="relative h-10 border-2 border-black">
                <div className="absolute inset-y-0 left-0 flex  items-center pointer-events-none">
                    <label className="block text-gray-70 text-base font-semibold mb-2">Actor</label>
                    <select value={ActorList} defaultSelection={ActorList[0]} onChange={onSelectActor} />
                </div>
            </div>
            <div className="relative h-10 border-2 border-black">
                <button type="submit" className="btn btn-primary" onClick={e => handleClick()}>Search</button>
            </div>
        </form>
    );
};
