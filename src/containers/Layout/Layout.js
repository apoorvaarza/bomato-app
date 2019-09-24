import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    closeSideDrawer = () => {
        this.setState({ showSideDrawer: false });
    }

    showSideDrawer = () => {
        this.setState({ showSideDrawer: true });
    }

    render() {
        let sideDrawer = null;
        
            if (this.state.showSideDrawer) {
                sideDrawer = <SideDrawer hideSideDrawer={() => this.closeSideDrawer()} />;
            }        
        return (                              
            <Auxillary>
                <Toolbar click={() => this.showSideDrawer()}></Toolbar>
                {sideDrawer}
                <main className={styles.Content} >
                    {this.props.children}
                </main>
            </Auxillary>
            );
    }
}

export default Layout;