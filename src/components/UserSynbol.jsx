import React from 'react';
import {
    CBadge,
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CImage
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { cilUser } from '@coreui/icons';
import { withRouter } from 'react-router-dom';

class UserSymbolDropdown extends React.Component {
    componentDidMount = () => {
        var is_login = true     // TODO - Get login here
        if (!is_login) {
            this.props.history.push('/login');
        }
    }
    logout = () => {
        // TODO - handle logout here
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
