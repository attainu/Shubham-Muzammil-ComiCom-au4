import React from 'react'
import '../../styles/dashboard.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Overview from './Overview'
import AddComic from './AddComic'
import Orders from './Orders'
import Sidebar from './Sidebar'
import Navbar from "./Navbar";

class Dashboard extends React.Component {
    state = {
        sidenav: "d-flex"
    }

    toggle = (e) => {
        e.preventDefault()
        let css = (this.state.sidenav === "d-flex") ? "d-flex toggled" : "d-flex";
        this.setState({ sidenav: css })
    }
    render() {
        if (!this.props.admin) {
            return <Redirect to="/admin/login" />;
        }
        return (
            <div className={this.state.sidenav} id="wrapper">

                <BrowserRouter>
                    <Sidebar />
                    {/* Page Content -->*/}
                    <div id="page-content-wrapper">
                        <Navbar toggle={this.toggle} />

                        <Switch>
                            <Route exact path='/dashboard' component={Overview} />
                            <Route path='/dashboard/add' component={AddComic} />
                            <Route path='/dashboard/orders' component={Orders} />
                        </Switch>
                    </div>
                </BrowserRouter>
                {/* /#page-content-wrapper -->*/}

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        admin: state.admin.isAuthenticated
    }
}

export default connect(mapStateToProps)(Dashboard);
