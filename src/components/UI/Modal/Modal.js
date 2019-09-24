import React, { Component } from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Auxillary from '../../../hoc/Auxillary';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.showModal !== nextProps.showModal) || (this.props.children !== nextProps.children);
    }

    render() {
        const cssClasses = [styles.Modal];
        if (this.props.showModal) {
            cssClasses.push(styles.showModal);
        } else {
            cssClasses.push(styles.hideModal);
        }
        return (
            <Auxillary>
                <Backdrop modalClosed={this.props.modalClosed} show={this.props.showModal} />
                <div className={cssClasses.join(' ')}>
                    {this.props.children}
                </div>

            </Auxillary>
        );
    }
    
}

export default Modal;