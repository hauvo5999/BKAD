import { CListGroup, CListGroupItem } from "@coreui/react"
import React from "react"
import BackButton from "./BackButton"
import { BE_URL, apiGet } from "../assets/common";

class LogNote extends React.Component {
    state = {
        logActive: '',
        logDict: {}
    }
    componentDidMount() {
        // Get log content from BE
        apiGet(BE_URL + 'log/').then(res => {
            console.log('log_data:', res)
            if (res) {
                var logDict = {}
                // TODO - paging data
                for (let index = res.length-1; index >= 0; index--) {
                    const e = res[index];
                    var date = new Date(e.created_at)
                    if (e.masked_user != 0 || e.un_masked_user != 0) {
                        var contentline = date.toLocaleString() + ' - ' + e.masked_user + ' masked user - ' + e.un_masked_user + ' un masked user.'
                        if (logDict[date.toLocaleDateString()]) {
                            logDict[date.toLocaleDateString()].push(contentline)
                        } else {
                            logDict[date.toLocaleDateString()] = [contentline]
                        }
                    }
                }
                console.log('logDict:', logDict)
                this.setState({ logDict: logDict })

            }
        })

        var newContent = ''
        this.setState({ logContent: newContent })
    }
    setActive = (event) => {
        this.setState({ logActive: event.target.id }, () => console.log(this.state.logActive))

    }
    render() {
        return (
            <>
                <BackButton />
                <h1 style={{ textAlign: 'center', marginTop: '1em' }}>LOGS</h1>
                <div style={{ marginTop: '50px', padding: '0px 30px' }}>
                    <div style={{ border: '1px solid', borderRadius: '5px', height: '400px', display: 'flex' }}>
                        <div className="d-flex flex-column flex-shrink-0 text-white bg-dark" style={{ borderRight: '1px solid', width: '20%' }}>
                            <CListGroup>
                                {Object.keys(this.state.logDict).map((date, idx) => (
                                    <CListGroupItem key={idx} id={date} component="button"
                                        // onClick={e => this.setState({ logActive: 'log' + idx })}
                                        onClick={this.setActive}
                                    >{date}</CListGroupItem>
                                ))}
                            </CListGroup>
                        </div>

                        <div style={{ width: '80%', overflow: 'auto' }}>
                            {(this.state.logActive ? this.state.logDict[this.state.logActive] : this.state.logDict[Object.keys(this.state.logDict)[0]])?.map(line => <p>{line}</p>)}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default LogNote
