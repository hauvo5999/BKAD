import React from 'react';
import {
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { cilUser } from '@coreui/icons';
import { withRouter } from 'react-router-dom';

class UserSymbolDropdown extends React.Component {
    componentDidMount = () => {

        var accessToken = window.localStorage.getItem('accessToken')
        if (accessToken == null) {
            this.props.history.push('/login');
        }
    }
    logout = () => {
        // TODO - handle logout here
        console.log("logout")
        window.localStorage.setItem('accessToken', null)
        this.props.history.push('/login');
    }
    render(){
        return (
            <>
                <CDropdown style={{width:"5%", position: "absolute", top: "20px", right: "50px"}}>
                    <CDropdownToggle caret={false}
                        style={{padding: "15%", backgroundColor: "midnightblue", borderRadius: "100%" , textAlign: 'center'}}
                    >
                        <div 
                        >
                            <CIcon icon={cilUser} size="md"/>
                        </div>
                    </CDropdownToggle>
                    <CDropdownMenu className="pt-0" placement="bottom-end">
                        <CDropdownItem href="setting">Setting</CDropdownItem>
                        <CDropdownItem href="logs">Logs</CDropdownItem>
                        <CDropdownItem onClick={this.logout}>Logout</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
            </>
        )
    }
}

export default withRouter(UserSymbolDropdown);
