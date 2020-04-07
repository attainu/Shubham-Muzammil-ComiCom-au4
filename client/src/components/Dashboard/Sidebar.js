import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Sidebar extends Component {
    render() {
        return (
            <div>
                {/* Sidebar -->*/}
                <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">Comicom Admin panel </div>
                <div className="list-group list-group-flush">
                    <Link to="/dashboard" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
                    <Link to="/dashboard/add" className="list-group-item list-group-item-action bg-light">Add new comic</Link>
                    <Link to="/dashboard/orders" className="list-group-item list-group-item-action bg-light">Orders Placed</Link>
                </div>
                </div>
                {/* /#sidebar-wrapper -->*/}   
            </div>
        )
    }
}

export default Sidebar