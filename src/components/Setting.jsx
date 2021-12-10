import { CRow, CCol, CFormCheck, CFormInput, CFormLabel, CButton, CAlert } from "@coreui/react"
import React from "react"
import BackButton from "./BackButton"

class Setting extends React.Component {
    state = {
        autoTurn: false,
        startTime: '',
        endTime: '',
        oldPassword: '',
        newPassword: '',
        errorMsgVisible: false,
        successMsgVisible: false

    }
    componentDidMount() {

    }
    submitSetting = () => {
        if (this.state.oldPassword != 'admin') {
            this.setState({
                errorMsgVisible: true,
                successMsgVisible: false
            })
        } else {
            this.setState({
                errorMsgVisible: false,
                successMsgVisible: true
            })
        }
    }
    render() {
        return (
            <>
                <BackButton />
                <h1 style={{ textAlign: 'center', marginTop: '1em' }}>SETTINGS</h1>
                <div style={{ marginTop: '50px' }}>
                    <CRow >
                        <CCol md='4'>
                            <h3>General</h3>
                        </CCol>
                        <CCol md='4'>
                            <div className="mb-3">
                                <CFormCheck id="inputAutoTurn" label="Auto open/close" />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="inputStartTime" style={{ alignContent: 'start' }}>START TIME</CFormLabel>
                                <CFormInput type="time" id="inputStartTime" value={this.state.startTime}
                                    name='startTime'
                                    onChange={e => this.setState({ 'startTime': e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="inputEndTime" style={{ alignContent: 'start' }}>END TIME</CFormLabel>
                                <CFormInput type="time" id="inputEndTime" value={this.state.endTime}
                                    name='endTime'
                                    onChange={e => this.setState({ 'endTime': e.target.value })}
                                />
                            </div>
                        </CCol>
                    </CRow>
                    <div style={{ margin: '20px 0', borderBottom: '1px solid' }}></div>
                    <CRow >
                        <CCol md='4'>
                            <h3>Password</h3>
                        </CCol>
                        <CCol md='4'>
                            <div className="mb-3">
                                <CFormLabel htmlFor="inputOldPassword" style={{ alignContent: 'start' }}>OLD PASSWORD</CFormLabel>
                                <CFormInput type="password" id="inputOldPassword" value={this.state.oldPassword}
                                    name='oldPassword'
                                    onChange={e => this.setState({ 'oldPassword': e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="inputNewPassword" style={{ alignContent: 'start' }}>NEW PASSWORD</CFormLabel>
                                <CFormInput type="password" id="inputNewPassword" value={this.state.newPassword}
                                    name='newPassword'
                                    onChange={e => this.setState({ 'newPassword': e.target.value })}
                                />
                            </div>
                            <div className="mb-3" style={{ textAlign: 'center' }}>
                                <CButton style={{ backgroundColor: 'midnightblue' }} size='xl' onClick={this.submitSetting}>Submit</CButton>
                            </div>
                            <CAlert color="danger" visible={this.state.errorMsgVisible}>
                                Wrong old password!!!
                            </CAlert>
                            <CAlert color="success" visible={this.state.successMsgVisible}>
                                Update successfully!!!
                            </CAlert>
                        </CCol>
                    </CRow>
                </div>
            </>
        )
    }
}
export default Setting