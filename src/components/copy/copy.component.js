import React, { useState, useRef, useEffect } from 'react';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { useAlert } from "react-alert";

import { CopyComponentWrapper } from './style';

const CopyComponent = () => {
    const [textAreaInput, setTextAreaInput] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const textAreaEl = useRef('');
    const alert = useAlert();

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search)
        const str = searchParams.get('q') || '';
        if (str !== '') setBtnDisabled(false);
        else setBtnDisabled(true);
        setTextAreaInput(str);
    }, []);

    const handleChange = (event) => {
        setTextAreaInput(event.target.value);
        if (event.target.value !== '') setBtnDisabled(false);
        else setBtnDisabled(true);
    }
    const handleCopyClick = () => {
        textAreaEl.current.select();
        document.execCommand('copy');
        alert.success("Copied to clipboard!");
    }
    return (
        <CopyComponentWrapper>
            <TextareaAutosize
                aria-label="text-area"
                rowsMin={10}
                rowsMax={20}
                placeholder="Type any text and click on copy text button to copy to clipboard"
                onChange={handleChange}
                value={textAreaInput}
                ref={textAreaEl}
            />
            <Button variant="contained" color="primary" onClick={handleCopyClick} disabled={btnDisabled}>
                <div>Copy Text</div>
                <img src="https://zolve.com/static/images/ic-redirect-white.svg" />
            </Button>
        </CopyComponentWrapper>
    )
}

export default CopyComponent;
