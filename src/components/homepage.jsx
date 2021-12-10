import { CRow, CCol, CButtonGroup, CButton } from "@coreui/react"
import React from "react"
import { apiPost, BE_URL, b64toBlob } from "../assets/common"

class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            intervalId: null,
            doorState: false,
            speakerState: false,
        }
    }
    componentDidMount = () => {
        const video = document.getElementById('video');
        video.srcObject = null;
        var intervalId = setInterval(this.detect, 1000)
        this.setState({ intervalId: intervalId });
}
componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
}

startVideo = () => {
    const video = document.getElementById('video');
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
        .then(stream => {
            video.srcObject = stream;
        })
    // if (this.state.intervalId == null){
    // var intervalId = setInterval(this.detect, 1000)
    // this.setState({ intervalId: intervalId });
    // }
}

stopVideos = () => {
    console.log("stop detect")
    // clearInterval(this.state.intervalId);
    const video = document.getElementById('video');
    video.srcObject = null
    console.log("intervalId:", this.state.intervalId)
    const faceBox = document.getElementById("face-box")
    faceBox.style.display = 'none'
    this.setState({
        doorState: false,
        speakerState: false
    })
}

_detect = () => {
    const video = document.getElementById("video")
    const canvas = document.createElement("canvas")
    if (video.srcObject == null) {
        console.log('stoped')
        return
    }
    // scale the canvas accordingly
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    // draw the video at that frame
    canvas.getContext('2d')
        .drawImage(video, 0, 0, canvas.width, canvas.height)
    // convert it to a usable data URL
    const dataURL = canvas.toDataURL()
    // base64 to BLOB
    var blob = b64toBlob(dataURL)

    // post image to detect
    let data = new FormData()
    data.append('img', new File([blob], 'capture.jpg'))
    apiPost(BE_URL + 'mask-detect/', data).then(res => {
        // TODO - Get and show result
        if (!res) {
            return
        }
        const result = JSON.parse(res.result)
        const faceBox = document.getElementById("face-box")

        console.log(result)

        if (result.length === 0) {
            faceBox.style.display = 'none'
            this.setState({
                doorState: false,
                speakerState: false
            })
            return;
        }

        if (result.every(p => p.label === 0)) {
            this.setState({
                doorState: false,
                speakerState: true
            })
        } else {
            this.setState({
                doorState: true,
                speakerState: false
            })
        }

        const { label, x, y, w, h } = result[0]

        faceBox.style.display = 'block'
        faceBox.style.bottom = y + 50 + "px"
        faceBox.style.left = x + 130 + "px"
        faceBox.style.width = w + "px"
        faceBox.style.height = h + "px"
        faceBox.style.borderColor = label === 1 ? "green" : "red"
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
                    <div id="video-div" style={{ width: '100%', textAlign: 'center', height: 'fit-content', position: 'relative' }}>
                        <video
                            autoPlay={true}
                            muted={true}
                            id="video"
                            // onPlaying={this.checkPlayingVideo}
                            style={{ borderRadius: '3%', width: '100%' }}
                        />
                        <div id="face-box" style={{ height: '100px', width: '100px', border: '4px solid green', position: 'absolute', bottom: '0px', display: 'none' }}></div>
                    </div>
                    <div style={{}}>
                        <CRow>
                            <CCol md='2' />
                            <CCol md='5'>
                                <h4>Door State: <span style={{ fontWeight: 'normal' }}>{this.state.doorState ? "OPENED" : "CLOSED"}</span></h4>
                            </CCol>
                            <CCol md='5'>
                                <h4>Speaker State: <span style={{ fontWeight: 'normal' }}>{this.state.speakerState ? "ON" : "OFF"}</span></h4>
                            </CCol>
                        </CRow>

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
                    </div>
                </CCol>
            </CRow>
        </>
    )
}
}
export default HomePage
// export default subscribe({
//     topic: 'ngocquy25/BKAD'
//   })(HomePage)