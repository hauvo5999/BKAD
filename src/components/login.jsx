import React from "react"
import { CButton, CCol, CFormLabel, CFormInput, CRow, CForm, CContainer, CImage } from '@coreui/react';
import { browserHistory, Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
    }
    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    login = () => {
        console.log('username:',  this.state.username)
        console.log('password:',  this.state.password)
        // TODO - Handle login here
        this.props.history.push('/home');
    }

    render() {
        return (
            <CContainer>
                <CRow>
                    <CCol md="6" className="background">
                        <CImage fluid src="./background.png" />
                    </CCol>
                    <CCol md="6" className="login_container" style={{ alignContent: 'center' }}>
                        <div style={{ textAlign: 'center' }}>
                            <h1 style={{ marginTop: '10%' }}>
                                BKAD
                            </h1>
                        </div>

                        <CRow>
                            <CCol style={{ textAlign: 'center' }}>
                                <p>
                                    Automatic door system based on <br /> Face mask Detection
                                </p>
                            </CCol>
                        </CRow>

                        <CForm style={{ padding: '5em 10em' }}>
                            <div className="mb-3">
                                <CFormLabel htmlFor="inputUsername" style={{ alignContent: 'start' }}>USERNAME</CFormLabel>
                                <CFormInput type="text" id="inputUsername" value={this.state.username} 
                                name='username'
                                onChange={e => this.setState({ 'username': e.target.value })} 
                                />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="inputPassword" style={{ alignContent: 'start' }}>PASSWORD</CFormLabel>
                                <CFormInput type="password" id="inputPassword" value={this.state.password} 
                                name='password'
                                onChange={e => this.setState({ 'password': e.target.value })}
                                />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <CButton color="primary" size="lg" onClick={this.login}>Login</CButton>
                            </div>
                        </CForm>
                    </CCol>
                </CRow>
            </CContainer>
        )
    }

}

export default Login