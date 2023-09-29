import React, { Component } from 'react'
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'
import './NavMenu.css'

export default class NavMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: true
        }
        this.toggleNavBar = this.toggleNavBar.bind(this)
    }

    toggleNavBar() {
        this.setState = {
            collapsed: !this.state.collapsed
        }
    }

    render() {
        return(
            <header>
                <Navbar className='navbar-expand-sm navbar-toggleable-sm ng-white border-bottome box-shadow mb-3' container light>
                    <NavbarBrand tag={Link} to='/'>WebAppPostgresExample1</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavBar} className='mr-2' />
                    <Collapse className='d-sm-inline-flex flex-sm-row-reverse' isOpen={!this.state.collapsed} navbar>
                        <ul className='navbar-nav flex-grow'>
                            <NavItem>
                                <NavLink tag={Link} className='text-dark' to='/'>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className='text-dark' to='/counter'>Counter</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className='text-dark' to='/user-data'>User Data</NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
                </Navbar>
            </header>
        )
    }    
}