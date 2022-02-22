import Post_Upload_Popup from "./components/post-upload-popup";
import API from './API'
import POST_UI from './views/post'

Post_Upload_Popup()

API("./instagram-api.json")
.then(response => POST_UI(response))
.catch(error => console.error(error))