let posts=[];
function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(posts.push(post));
        },2000)
    })
}

function updateLastUserActivityTime(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let time = new Date();
            resolve(time);
        },1000)
    })
}

function deletePost(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(posts.pop());
        }, 3000)
    })
}
Promise.all([createPost({title:'Post1'}), updateLastUserActivityTime()]).then(([createdPost, lastTime])=>{
    console.log('Post created:',posts[0].title)
    console.log('Last Activity Time:', lastTime);
})
.then(deletePost)
.then(()=>{
    Promise.all([createPost({title:'Post2'}), updateLastUserActivityTime()]).then(([createdPost, lastTime])=>{
        console.log('Post created:',posts[0].title)
        console.log('Last Activity Time:', lastTime.toTimeString());
    })
})