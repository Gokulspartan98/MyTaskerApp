import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {

    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <Link class="navbar-brand" to="/"><span className="fs-3">Task keeper</span></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to='/myTask'>MY TASK</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/addTask">ADD TASK</Link>
                            </li>
                        </ul>
                        <div class="d-flex" role="search">
                            <input class="form-control me-2" onChange={handleSearch} style={{ width: '275px' }} type="search" name="searchTask" placeholder="Search" aria-label="Search" />
                            <p> {search}</p>
                            <button class="btn btn-outline-success" type="submit">Search Task</button>
                        </div>
                        <div class="navbar-nav  mx-lg-2">
                            <Link class=" btn btn-danger " to="/login">Sign Out</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}