import React, { Component } from 'react';
import Modal from '../components/UI/Modal/Modal';
import Auxillary from '../hoc/Auxillary';

const errorHandler = (WrappedComponent, axios) => {

    return class extends Component {

        state = {
            error: null
        }

        dismissError = () => {
            this.setState({ error: null });
        }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.responseInterceptor = axios.interceptors.response.use(resp => resp, error => {
                this.setState({ error: error });
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        render() {
            return (
                <Auxillary>
                    <Modal showModal={this.state.error} modalClosed={this.dismissError}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Auxillary>
                );
        }
    }
}

export default errorHandler;