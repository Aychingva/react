
import "./style.css"; 

export function Usercard({id,title,reactions,views}){
    return(
        <div className="user-card">
            
            <h1>ID: {id}</h1>
            <p>Title: {title}</p>
            <p>Likes: {reactions.likes}</p>
            <p>Dislikes: {reactions.dislikes}</p>
            <p>views:{views}</p>
        </div>
    )
}