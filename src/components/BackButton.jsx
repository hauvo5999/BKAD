import React from 'react';
import { CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { cilBell, cilUser, cilArrowCircleLeft,cilArrowLeft, cilCaretLeft, cilChevronLeft} from '@coreui/icons';
// import { Link } from 'react-router-dom';

const BackButton = () => {
    return (
        <>
            <CButton href="home" color="light" variant="ghost" style={{position: "absolute", top: "20px", left: "50px", display: 'inline-block'}}>
                <CIcon icon={cilArrowCircleLeft} className="me-2" style={{width: '2rem', height: '2rem', fontSize: '2rem'}}/>
                Back
            </CButton>
        </>
    )
}

export default BackButton;
