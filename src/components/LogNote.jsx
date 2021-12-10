import { CListGroup, CListGroupItem } from "@coreui/react"
import React from "react"
import BackButton from "./BackButton"
import { BE_URL, apiGet } from "../assets/common";

class LogNote extends React.Component {
    state = {
        logActive: 'log2',
        logList: [
            {
                date: '1/1/2021',
                content: '11:20:20 Valid person\n11:20:20 Valid person\n11:20:20 Valid person'
            },
            {
                date: '2/1/2021',
                content: '11:20:20 Valid person\n11:20:20 Valid person\n11:20:20 Valid person'
            },
            {
                date: '3/1/2021',
                content: '11:20:20 Valid person'
            },
            {
                date: '1/1/2021',
                content: '11:20:20 Valid person\n11:20:20 Valid person\n11:20:20 Valid person'
            },
        ],
        logContent: '',
    }
    componentDidMount() {
        // Get log content from BE
        apiGet(BE_URL + 'log').then(res => {
            console.log('log_data:', res)
            if (res) {
                // TODO - paging data
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
                        <div className="d-flex flex-column flex-shrink-0 text-white bg-dark" style={{ borderRight: '1px solid', width: '250px' }}>
                            {/* <ul className="nav nav-pills flex-column mb-auto">
                                <li className="nav-item"><a id="logToday" href="#" 
                                className="nav-link text-white"
                                // className={"nav-link text-white" + (this.state.logActive == "logToday")?" active":"" } 
                                aria-current="page"><span className="ms-2">Today</span> </a> </li>
                                {this.state.logList.map((log, idx) => (
                                    <li> <a id={'log'+idx} href="#" 
                                    // className={"nav-link text-white" + (this.state.logActive == ("log"+idx.toString()))?" active":"" }
                                    aria-current="page"
                                    ><span className="ms-2">{log.date}</span></a></li>
                                ))}
                            </ul> */}
                            <CListGroup>
                                <CListGroupItem id="logToday" component="button"
                                    // onClick={e => this.setState({ logActive: 'logToday' })}
                                    onClick={this.setActive}
                                >
                                    Today
                                </CListGroupItem>
                                {this.state.logList.map((log, idx) => (
                                    <CListGroupItem key={idx} id={'log' + idx} component="button"
                                        // onClick={e => this.setState({ logActive: 'log' + idx })}
                                        onClick={this.setActive}
                                    >{log.date}</CListGroupItem>
                                ))}
                            </CListGroup>
                        </div>

                        <div style={{ width: '70%' }}>
                            {this.logContent}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default LogNote
