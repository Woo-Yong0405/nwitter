import Nweet from "components/Nweet";
import {v4 as uuidv4} from "uuid"
import { dbService, storageService } from "fb";
import React, {useState, useEffect} from "react";

const Home = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState("");
    useEffect(() => {
        dbService.collection("nweets").onSnapshot(snapshot => {
            const nweetArray = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))
            setNweets(nweetArray);
        })
    }, []);
    const onSubmit = async (event) => {
        event.preventDefault();
        let attachmentUrl = "";
        if(attachment !== "") {
            const attachmentRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
            const response = await attachmentRef.putString(attachment, "data_url");
            attachmentUrl = await response.ref.getDownloadURL();
        }
        const nweetObj = {
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl,
        } 
        await dbService.collection("nweets").add(nweetObj);
        setNweet("");
        setAttachment("");
    }
    const onChange = (event) => {
        const {target: {value}, } = event;
        setNweet(value);
    }
    const onFileChange = (event) => {
        const {
            target:{files},
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {currentTarget: {result}} = finishedEvent;
            setAttachment(result);
        };
        reader.readAsDataURL(theFile);
    }
    const onClearAttachment = () => {
        setAttachment(null);
    }
    return (
        <div >
            <div>
                {nweets.map(nweet => (
                    <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid} />
                ))}
            </div>
            <form className="nweet" onSubmit={onSubmit}>
                <input className="nweet_input" value={nweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120} required />
                <input className="nweet_image" type="file" accept="image/*" onChange={onFileChange} />
                {attachment && <div className="nweet_img-preview">
                    <img src={attachment} alt="" />
                    <button onClick={onClearAttachment}>Clear</button>
                </div>}
                <input className="nweet_nweet" type="submit" value="Nweet" />
            </form>
        <footer>Nwitter Version 0.0 Last Editied: 2021.8.30</footer>
        </div>
    )
};
export default Home;