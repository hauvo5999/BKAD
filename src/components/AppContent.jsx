import { CContainer } from "@coreui/react"
import React from "react"
import { Redirect, Route, Switch, withRouter } from "react-router-dom"
import HomePage from "./homepage"
import LogNote from "./LogNote"
import Setting from "./Setting"
import UserSymbolDropdown from "./UserSynbol"

class AppContent extends React.Component {
    render() {
        return (
            <>
                <CContainer lg>
                    <UserSymbolDropdown />
                    <Switch>
                        {/* <Route key='1' exact path="/" name="Home" /> */}
                        <Route key='2' exact path="/home" name="Home" render={(props) => <HomePage {...props} />} />
                        <Route key='3' exact path="/setting" name="setting" render={(props) => <Setting {...props} />} />
                        <Route key='4' exact path="/logs" name="lognote" render={(props) => <LogNote {...props} />} />
                        <Redirect from="/" to="/home" />
                    </Switch>
                </CContainer>
            </>
        )
    }
}
export default withRouter(AppContent);