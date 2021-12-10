// export const BE_URL = 'https://is-face-mask-detection.herokuapp.com/'
export const BE_URL = 'https://3fe0-1-54-43-160.ngrok.io/'
export const apiGet = async (url) => {
    const response =  await fetch(url, {
        method: 'GET',
    });
    return response.json()
}

export const apiPost = async (url, formData) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        })
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export function b64toBlob(dataURI) {
    
    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/jpeg' });
}