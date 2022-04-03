
fetch("https://apis.scrimba.com/jsonplaceholder/posts", {method: "GET"})
    .then(response => response.json())
    .then(data => {
        const postsArr = data.slice(0, 4)
        for (let post of postsArr){
            document.getElementById("blog-list").innerHTML += `
                <div> 
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <hr />
                <div>
            `
        }
    })

document.getElementById("new-post").addEventListener("submit", event => {
    event.preventDefault()

    const postTitle = document.getElementById("post-title").value
    const postBody = document.getElementById("post-body").value
    const data = {
        title: postTitle,
        body: postBody
    }
    console.log(data)
})