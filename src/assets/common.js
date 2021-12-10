export const BE_URL = 'https://is-face-mask-detection.herokuapp.com/'
export const apiGet = async (url) => {
    return await fetch(url, {
        method: 'GET',
    });
}

export const apiPost = async (url, formData) => {
    return await fetch(url, {
        method: 'POST',
        body: formData
    })
}