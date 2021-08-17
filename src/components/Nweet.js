import { dbService } from "fb";
import React from "react";

const Nweet = ({nweetObj, isOwner}) => {
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this Nweet?");
        if(ok) {
            await dbService.doc(`nweets/${nweetObj.id}`).delete();
        }
    }
    return (
        <div>
            <h4>{nweetObj.text}</h4>
            {isOwner && (
            <>
            <button onClick={onDeleteClick}>Delete Nweet</button>
            <button>Edit Nweet</button>
            </>
            )}
        </div>
    );
}

export default Nweet;