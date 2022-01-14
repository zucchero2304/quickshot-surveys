import QRCode from 'qrcode.react'

export default function ShareModalContent({ surveyId }) {

    const downloadQrCode = () => {
        const canvas = document.getElementById("qr-code")
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "https://" + window.location.host + "/survey/" + surveyId)
        let downloadLink = document.createElement("a")
        downloadLink.href = pngUrl
        downloadLink.download = "survey-qr.png"
        document.body.appendChild(downloadLink)
        downloadLink.click()
        document.body.removeChild(downloadLink)
    }

    const copyLink = () => {
        let copyText = document.getElementById("survey-link-box")
        copyText.select()
        copyText.setSelectionRange(0, 99999)
        navigator.clipboard.writeText(copyText.value)
    }

    return (
        <div>
            <h3>Share your survey:</h3>
            <input className="survey-link" type="text" value={window.location.host + "/survey/" + surveyId} id="survey-link-box" readOnly></input>
            <button className="copy-link-btn" onClick={copyLink}>Copy link</button>
            <br />
            <QRCode id="qr-code" value={"https://www." + window.location.host + "/survey/" + surveyId} />
            <button style={{ backgroundColor: "blue", display: "block", marginInline: "auto" }} onClick={downloadQrCode}>Download QR code</button>
        </div>
    )
}
