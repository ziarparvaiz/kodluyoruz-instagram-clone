function Post_Upload_Popup() {
    const Open_Post_Upload_Popup = document.getElementById("Open_Post_Upload_Popup")
    const Close_Post_Upload_Popup = document.getElementById("Close-Post-Upload-Popup")
    const Post_Upload_Popup = document.querySelector(".post-upload-popup")

    Open_Post_Upload_Popup.addEventListener('click', () => {
        Post_Upload_Popup.style.visibility = 'visible'
    })

    Close_Post_Upload_Popup.addEventListener('click', () => {
        Post_Upload_Popup.style.visibility = 'hidden'
    })
}

export default Post_Upload_Popup