import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dash.css';

export default function Dashboard() {

    return (
        <div className='dashboard vh-100'>
            <div className="row container">
                <aside className='col-md-3'>
                    <h2 className='text-white py-3'>Dashboard</h2>
                    <div className="asideEle">
                        <Link className='text-white fs-5 my-2' to='create'>add Tour</Link>
                    </div>
                </aside>
                <main className='col-md-9'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
