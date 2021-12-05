import { CRow, CCol, CButtonGroup, CButton } from "@coreui/react"
import React from "react"
import { Redirect } from "react-router-dom"

class HomePage extends React.Component {
    componentDidMount = () => {
        const video = document.getElementById('video');
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
            .then(stream => {
                video.srcObject = stream;
            })
    }
    checkPlayingVideo = () => {
        // TODO
    }
    pauseVideos = () => {
        // TODO
    }
    render() {
        return (
            <>
                <CRow>
                    <CCol style={{ padding: '5em' }}>
                        <div id="video-div" style={{ width: '100%', textAlign: 'center'  }}>
                            <video
                                autoPlay={true}
                                muted={true}
                                id="video"
                                // onPlaying={this.checkPlayingVideo}
                                style={{ borderRadius: '3%'}}
                            />
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <CButtonGroup>
                                <CButton
                                    size='lg'
                                    color="success"
                                    onClick={() => this.playVideos()}
                                    style={{ margin: '0 10px' }}
                                >Start</CButton>
                                <CButton
                                    size='lg'
                                    color="danger"
                                    onClick={() => this.pauseVideos()}
                                    style={{ margin: '0 10px' }}
                                >Stop</CButton>
                            </CButtonGroup>
                        </div>
                    </CCol>
                </CRow>
            </>
        )
    }
}
export default HomePage