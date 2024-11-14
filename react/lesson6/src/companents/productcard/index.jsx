import React, { useState } from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
function Productcard({product,cardlist,setcardlist}) {

    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [likes, setLikes] = useState(product.reactions.likes);
    const [dislikes, setDislikes] = useState(product.reactions.dislikes);


    const addtocard=()=>{
        const found=cardlist.find(item=>item.id===product.id)
        if(found){
            found.count++
            setcardlist([...cardlist])
        }
         
        else{
            setcardlist([...cardlist,{
                ...product,
                count:1}
            ])
        }

        
        
    }

    const handleLike = () => {
        if(!liked){
            setLikes(likes + 1);
            if (disliked) {
                setDislikes(dislikes - 1);
                setDisliked(false); // Reset dislike if like is selected
            }
        }
        setLiked(!liked);
    };

    const handleDislike = () => {
        if(!disliked) {
            setDislikes(dislikes + 1);
            if (liked) {
                setLikes(likes - 1);
                setLiked(false); // Reset like if dislike is selected
            }
        }
        setDisliked(!disliked);
    };

    // Toggle bookmark (save) icon and update the basket accordingly
    const toggleBookmark = () => {
        setBookmarked(!bookmarked);

        // If bookmarked is currently false (icon is gray), add to card
        if (!bookmarked) {
            addtocard();
        } else {
            // If currently bookmarked and now un-bookmarking, remove from basket
            setcardlist(cardlist.filter(item => item.id !== product.id));
        }
    };

    return (
        <div className='product-card'>
            <p>id: {product.id}</p>
            <h6>title: {product.title}</h6>
            <div className='like'>
                <p>likes: {likes}</p>
                <ThumbUpOffAltIcon 
                    onClick={handleLike} 
                    style={{ color: liked ? 'black' : 'white', fontSize: 24 }} 
                />
            </div>
            <div className='dislike'>
                <p>dislikes: {dislikes}</p>
                <ThumbDownOffAltIcon 
                    onClick={handleDislike} 
                    style={{ color: disliked ? 'black' : 'white', fontSize: 24 }} 
                />
            </div>
            <p>views: {product.views}</p>
            <TurnedInNotIcon 
                onClick={toggleBookmark} 
                style={{ color: bookmarked ? 'yellow' : 'gray', fontSize: 24 }} 
            />
        </div>
    );
}

export default Productcard