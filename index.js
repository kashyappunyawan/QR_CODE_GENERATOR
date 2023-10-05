document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");
    const generateButton = document.getElementById("generateButton");
    const qrcodeDiv = document.getElementById("qrcode");

    generateButton.addEventListener("click", generateQRCode);

    function generateQRCode() {
        const text = textInput.value;

        if (text.trim() !== "") {
            const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=200x200`;

            qrcodeDiv.innerHTML = `<img src="${apiUrl}" alt="QR Code">`;
        } else {
            alert("Please enter text before generating a QR code.");
        }
    }
});