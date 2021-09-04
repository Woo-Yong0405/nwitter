import { dbService, storageService } from "fb";
import React, { useState } from "react";

const Nweet = ({nweetObj, isOwner}) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this Nweet?");
        if(ok) {
            await dbService.doc(`nweets/${nweetObj.id}`).delete();
            await storageService.refFromURL(nweetObj.attachmentUrl).delete(); 
        }
    }
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = (event) => {
        event.preventDefault();
        dbService.doc(`nweets/${nweetObj.id}`).update({
            text: newNweet,
        });
        setEditing(false);
    }
    const onChange = (event) => {
        const {
            target:{value},
        } = event;
        setNewNweet(value);
    } 
    return (
        <div>
            {
                editing ? (
                    <ds className="editing">
                        <form onSubmit={onSubmit}>
                            <input className="editing_input" type="text" placeholder="Edit your Nweet" onChange={onChange} value={newNweet} required />
                            <input className="editing_submit" type="submit" value="Update Nweet" />
                        </form>
                        <button className="editing_cancel" onClick={toggleEditing}>Cancel</button>
                    </ds>
                ) : (
                    <sd className="nweet-message">
                    <h4>{nweetObj.text}</h4>
                    {nweetObj.attachmentUrl && <img className="nweet-message_img" src={nweetObj.attachmentUrl} width="50px" height="50px" alt="" />}
                        {isOwner && (
                            <da className="isowner">
                                <button className="isowner_delete" onClick={onDeleteClick}>Delete Nweet</button>
                                <button className="isowner_edit" onClick={toggleEditing}>Edit Nweet</button>
                            </da>
                        )}
                    </sd>
                )
            }
        </div>
    );
}

export default Nweet;