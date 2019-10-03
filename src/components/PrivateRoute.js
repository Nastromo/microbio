import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import LineSpinner from './LineSpinner';
import Navigation from './Navigation';
import Pending from './Pending';
import Pre from './Pre';
import Screen from './Screen';
import Non from './Non';
import Logs from './Logs';
import Settings from './Settings';




export class PrivateRoute extends Component {


    render() {
        if (this.props.isLoading) return <LineSpinner />

        return (
            <div>
                <Navigation />
                <Switch>
                    <Route exact path="/account/pending" component={Pending} />
                    <Route exact path="/account/pre" component={Pre} />
                    <Route exact path="/account/screen" component={Screen} />
                    <Route exact path="/account/non" component={Non} />
                    <Route exact path="/account/logs" component={Logs} />
                    <Route exact path="/account/settings" component={Settings} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PrivateRoute))

