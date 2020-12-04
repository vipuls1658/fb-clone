import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import './Css/MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from "firebase";

function MessageSender() {

    const [{user}, dispatch] = useStateValue();

    const[ input ,setinput]=useState("")
    const[ imageUrl ,setImageUrl]=useState("")

    const handleSubmit = e => {
        e.preventDefault();

        db.collection('posts').add({
            message :input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username:user.displayName,
            image:imageUrl,
        });

        setinput("");
        setImageUrl("");
    };


    return (
        <div className="MessageSender">
        <div className= "MessageSender_top">
            <Avatar src={user.photoUrl}/>
            <form>
                <input
                value={input}
                onChange={(e)=>setinput(e.target.value)}
                className="MessageSender_input" placeholder={`Whats on your mind, ${user.displayName} ?`} />
                <input  value={imageUrl} onChange ={(e)=> setImageUrl(e.target.value)}
                  placeholder="Image URL (Optional)"/>
                <Button onClick={handleSubmit} type="Submit">
                    Hidden Submit
                </Button>
            </form>
        </div>
        <div className="MessageSender_bottom">
            <div className="MessageSender_option">
                <VideocamIcon style={{color:"red"}}/>
                <h3>Live Video</h3>
            </div>
            <div className="MessageSender_option">
                <PhotoLibraryIcon style={{color:"green"}}/>
                <h3>Photos/videos</h3>
            </div>
            <div className="MessageSender_option">
                <EmojiEmotionsIcon  style={{color:"Yellow"}}/>
                <h3>Feelings</h3>
            </div>

        </div> 
            
        </div>
    )
}

export default MessageSender
