import React from "react"
import { CButton, CCol, CFormLabel, CFormInput, CRow, CForm, CContainer, CImage } from '@coreui/react';
import { BE_URL, apiPost } from "../assets/common";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            userList: [
                {
                    "username": "admin",
                    "email": "admin@gmail.com"
                },
                {
                    "username": "admin1",
                    "email": "admin1@gmail.com"
                },
                {
                    "username": "username",
                    "email": "username@gmail.com"
                },
                {
                    "username": "hau",
                    "email": "hau@gmail.com"
                }
            ]
        };
    }

    componentDidMount() {
        // window.localStorage.getItem('accessToken')

        // apiGet(BE_URL + 'user').then(res => {
        //     this.setState({userList: res})
        //     console.log('userList:', this.state.userList)
        // })
    }

    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    login = () => {
        // TODO - Handle login here
        let loginData = new FormData()
        loginData.append('email', this.state.username);
        loginData.append('password', this.state.password);
        // var loginData = {
        //     "email": this.state.username,
        //     "password": this.state.password
        // }
        apiPost(BE_URL + 'api/auth/login/', loginData).then(res => {
            console.log('access:', res.access)
            window.localStorage.setItem('accessToken', res.access)
        });
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