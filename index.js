
let postsArray = []

function renderPosts() {
    let html = ""
    for (let post of postsArray){
        html += `
                <div>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <hr />
                <div>
            `
    }
    document.getElementById("blog-list").innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts", {method: "GET"})
    .then(response => response.json())
    .then(data => {
        postsArray = data.slice(0, 4)
        renderPosts()
    })

document.getElementById("new-post").addEventListener("submit", event => {
    event.preventDefault()

    const postTitle = document.getElementById("post-title").value
    const postBody = document.getElementById("post-body").value
    const data = {
        title: postTitle,
        body: postBody
    }

    const operation = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
                }
        }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts",operation)
        .then(res => res.json())
        .then(data => {
            postsArray.unshift(data)
            renderPosts()
        })
})