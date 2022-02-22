function POST_UI(Data) {
    const POST_CONTENT = document.querySelector(".posts-content")

    let Post_Card_HTML = ''
    Data.forEach(datas => {
        Post_Card_HTML += `
                    <div class="post-card">
                        <div class="post-header">
                            <div class="post-info">
                                <div class="profile-img">
                                    <img src="${datas.profilephoto}" alt="profile img">
                                </div>
                                <div class="profile-name">
                                    <span class="name">${datas.name}</span>
                                    <span class="username">${datas.username}</span>
                                </div>
                            </div>
                            <div class="more">
                                <svg aria-label="More options" class="h-icon" role="img" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>    
                            </div>
                        </div>
                        <div class="post-content">
                            <img src="${datas.postphoto}" alt="Post">
                        </div>
                        <div class="post-footer">
                            <div class="post-action">
                                <div class="like">
                                    <svg aria-label="Like" class="h-icon" role="img" viewBox="0 0 24 24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                                    <span>${datas.likes}</span>
                                </div>
                                <div class="comment">
                                    <svg aria-label="Comment" class="h-icon" viewBox="0 0 24 24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                                    <span>${datas.comments}</span>
                                </div>
                                <svg aria-label="Share Post" class="h-icon" viewBox="0 0 24 24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                            </div>
                            <div class="save-action">
                                <svg aria-label="Save" class="h-icon" role="img" viewBox="0 0 24 24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                            </div>
                        </div>
                    </div>
        `
        POST_CONTENT.innerHTML = Post_Card_HTML
    })

}

export default POST_UI