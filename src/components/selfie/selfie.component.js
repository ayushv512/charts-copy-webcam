import React, { useState, useRef, useEffect } from 'react';

import Webcam from 'webcam-easy';
import Button from '@material-ui/core/Button';
import { useAlert } from "react-alert";
import {
    isMobile, isTablet
} from 'react-device-detect';

import { SelfieComponentWrapper } from './style';

const SelfieComponent = () => {
    const alert = useAlert();

    const videoEl = useRef();
    const canvasEl = useRef();
    const audioEl = useRef();
    const photoEl = useRef();

    const [startStopWebcam, setStartStopWebcam] = useState('Start');
    const [takePhotoDisable, setTakePhotoDisable] = useState(true);
    const [btnDisable, setBtnDisable] = useState(true);
    const [webCamObj, setWebCamObj] = useState({});

    useEffect(() => {
        setWebCamObj(new Webcam(videoEl.current, 'user', canvasEl.current, audioEl.current))
        
    }, []);

    const startWebcamClick = async () => {
        let devices = await navigator.mediaDevices.enumerateDevices();
        let videoInputs = devices.filter(item => item.kind === "videoinput");
        console.log(videoInputs.length);
        // Check device has camera or not 
        if(videoInputs.length > 0 ) {
            switch (startStopWebcam) {
                case 'Start':
                    webCamObj.start()
                        .then(result => {
                            console.log("Webcam started");
                            setStartStopWebcam('Stop')
                            setTakePhotoDisable(false);
                        })
                        .catch(err => {
                            console.log("User denied access");
                            alert.error("User denied access to webcam!");
                        });
                    break;
                case 'Stop':
                    console.log("Webcam stoped");
                    setStartStopWebcam('Start')
                    setTakePhotoDisable(true);
                    webCamObj.stop();
                    break;
            }
        }else {
            alert.error("Device has no camera!");
        }
    }

    const takePhotoClick = () => {
        var picture = webCamObj.snap();
        photoEl.current.href = picture;
        setBtnDisable(false);
    }

    return (
        <SelfieComponentWrapper>
            <div className="webcam-btns">
                <Button variant="contained" color="primary" onClick={startWebcamClick}>
                    <div>{startStopWebcam} Webcam</div>
                    <img src="https://zolve.com/static/images/ic-redirect-white.svg" />
                </Button>
                <Button variant="contained" color="primary" disabled={takePhotoDisable} onClick={takePhotoClick}>
                    <div>Take Photo</div>
                    <img src="https://zolve.com/static/images/ic-redirect-white.svg" />
                </Button>
                <Button variant="contained" color="primary" disabled={btnDisable}>
                    <a ref={photoEl} href="#" download>Download Photo</a>
                </Button>
            </div>
            <div className="webcam-video">
                <video id="webcam" ref={videoEl} autoPlay playsInline width={  isMobile && !isTablet ? '350px' : '640px'}></video>
                <canvas id="canvas" ref={canvasEl} className="d-none"></canvas>
                <audio id="snapSound" ref={audioEl} src="audio/snap.wav" preload="auto"></audio>
            </div>
        </SelfieComponentWrapper>
    );
}

export default SelfieComponent;