import { CRow, CCol, CButtonGroup, CButton } from "@coreui/react"
import { data } from "jquery"
import React from "react"
import { Redirect } from "react-router-dom"
import { apiPost, BE_URL, b64toBlob } from "../assets/common"

class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            intervalId: null
        }
    }
    componentDidMount = () => {
        // const video = document.getElementById('video');
        // navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
        //     .then(stream => {
        //         video.srcObject = stream;
        //     })
    }
    componentWillUnmount = () => {
        if (this.state.intervalId) {
            clearInterval(this.state.intervalId);
        }
    }

    stopVideos = () => {
        console.log("stop detect")
        clearInterval(this.state.intervalId);
        const video = document.getElementById('video');
        video.srcObject = null
    }

    startVideo = () => {
        const video = document.getElementById('video');
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
            .then(stream => {
                video.srcObject = stream;
            })
        var intervalId = setInterval(this.detect, 1000)
        this.setState({ intervalId: intervalId });
    }

    _detect = () => {
        const video = document.getElementById("video")
        const canvas = document.createElement("canvas")
        // scale the canvas accordingly
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        // draw the video at that frame
        canvas.getContext('2d')
            .drawImage(video, 0, 0, canvas.width, canvas.height)
        // convert it to a usable data URL
        const dataURL = canvas.toDataURL()
        console.log('dataURL:', dataURL)
        var img = document.getElementById("capture")
        img.src = dataURL
        // base64 to BLOB
        var blob = b64toBlob(dataURL)

        // post image to detect
        let data = new FormData()
        data.append('img', new File([blob], 'capture.jpg'))
        apiPost(BE_URL + 'mask-detect/', data).then(res => {
            // TODO - Get and show result
            console.log(res)
        })

    }
    get detect() {
        return this._detect
    }
    set detect(value) {
        this._detect = value
    }
    render() {
        return (
            <>
                <CRow>
                    <CCol style={{ padding: '5em' }}>
                        <div id="video-div" style={{ width: '100%', textAlign: 'center' }}>
                            <video
                                autoPlay={true}
                                muted={true}
                                id="video"
                                // onPlaying={this.checkPlayingVideo}
                                style={{ borderRadius: '3%' }}
                            />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <CButtonGroup>
                                <CButton
                                    size='lg'
                                    color="success"
                                    onClick={this.startVideo}
                                    style={{ margin: '0 10px' }}
                                >Start</CButton>
                                <CButton
                                    size='lg'
                                    color="danger"
                                    onClick={this.stopVideos}
                                    style={{ margin: '0 10px' }}
                                >Stop</CButton>
                            </CButtonGroup>
                            <img id='capture' src='' />
                        </div>
                    </CCol>
                </CRow>
            </>
        )
    }
}
export default HomePage