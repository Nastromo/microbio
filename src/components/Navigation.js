import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';




export class Navigation extends Component {
    setActive = (element) => {
        const activeNavItem = document.getElementsByClassName('menu-active');
        activeNavItem[0].classList.remove(`menu-active`);
        element.classList.add(`menu-active`);
    }

    componentDidMount() {
        switch (this.props.location.pathname) {
            case `/account/pending`:
                this.setActive(this.pending);
                break;

            case `/account/pre`:
                this.setActive(this.processing);
                break;

            case `/account/screen`:
                this.setActive(this.opt3);
                break;

            case `/account/non`:
                this.setActive(this.opt4);
                break;

            case `/account/logs`:
                this.setActive(this.opt5);
                break;

            case `/account/settings`:
                this.setActive(this.opt6);
                break;
            default: break;
        }
    }

    handleClick = (e) => {
        switch (e.currentTarget.id) {
            case `option1`:
                this.setActive(this.pending);
                break;
            case `option2`:
                this.setActive(this.processing);
                break;

            case `option3`:
                this.setActive(this.opt3);
                break;

            case `option4`:
                this.setActive(this.opt4);
                break;

            case `option5`:
                this.setActive(this.opt5);
                break;

            case `option6`:
                this.setActive(this.opt6);
                break;

            case `option7`:
                this.setActive(this.opt7);
                break;

            default: break;
        }
    }

    handleExit = () => {
        this.props.history.push(`/`);
    }

    render() {
        return (
            <div className="white-back">
                <div className="main-nav">
                    <div className="main-categories">
                        <p className="logo-text">Microbiology</p>
                        <Link
                            id="option1"
                            onClick={this.handleClick}
                            innerRef={el => this.pending = el}
                            className="menu-active"
                            to="/account/pending">Pending list</Link>
                        <Link
                            id="option2"
                            onClick={this.handleClick}
                            innerRef={el => this.processing = el}
                            to="/account/pre">Pre Screen Pending list</Link>
                        <Link
                            id="option3"
                            onClick={this.handleClick}
                            innerRef={el => this.opt3 = el}
                            to="/account/screen">Screen Pending list</Link>
                        <Link
                            id="option4"
                            onClick={this.handleClick}
                            innerRef={el => this.opt4 = el}
                            to="/account/non">Non-Culture Pending List</Link>
                        <Link
                            id="option5"
                            onClick={this.handleClick}
                            innerRef={el => this.opt5 = el}
                            to="/account/logs">Logs</Link>
                        <Link
                            id="option6"
                            onClick={this.handleClick}
                            innerRef={el => this.opt6 = el}
                            to="/account/settings">Settings</Link>
                    </div>

                    <div className="work-info">
                        <p className="nav-te" onClick={this.handleExit}>Log out</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({


})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation))
