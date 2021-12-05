import { CHeader, CHeaderNav, CNavbarNav, CContainer, CRow, CCol } from "@coreui/react"
import React from "react"
import BackButton from "./BackButton"

class Setting extends React.Component {
    render() {
        return (
            <>
                <BackButton />
                <CRow>
                    <CCol style={{ textAlign: 'center', marginTop: '2em' }}>
                        <h1>SETTINGS</h1>
                    </CCol>
                </CRow>
            </>
        )
    }
}
export default Setting