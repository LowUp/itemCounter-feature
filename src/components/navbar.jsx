import React, {Component} from "react";


class NavBar extends Component{

    render(){

        return(
            <React.Fragment>
            
    <nav className="navbar navbar-light bg-light">
    {this.props.children}
    </nav>

            </React.Fragment>
        )
    }

}

export default NavBar;