﻿import React, {useEffect, useState} from "react";
import {loadMessages} from "../utils/message_utils";
import {useSubscription} from "@apollo/react-hooks";
import MessageList from "../parts/Messages/MessageList";
import SelectedMessage from "../parts/Messages/SelectedMessage";
import {messageAddedToThreadSubscription} from "../services/messages/messageAddedToThreadSubscription";
import {messageThreadCreatedSubscription} from "../services/messages/messageThreadCreatedSubscription";

export default function Messages() {
    document.title = "Messages";

    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState([]);
    const [reloadMessages, setReloadMessages] = useState(true);

    const userId = localStorage.getItem('id');

    useSubscription(messageAddedToThreadSubscription, {
        onSubscriptionData: (res) => {
            const messageData = res.subscriptionData.data.messageAdded.messageThread;
            if (messageData.senderUserId === userId || messageData.receiverUserId === userId) {
                setReloadMessages(true);
            }
        }
    });

    useSubscription(messageThreadCreatedSubscription, {
        onSubscriptionData: (res) => {
            const messageData = res.subscriptionData.data.messageThreadCreated.messageThread;
            if (messageData.senderUserId === userId || messageData.receiverUserId === userId) {
                setReloadMessages(true);
            }
        }
    });

    useEffect(() => {
        loadMessages(selectedMessage, setSelectedMessage, setMessages)
            .catch((err) => console.log(err));
        setReloadMessages(false);
    }, [reloadMessages]);

    return (
        <div className="flex flex-col px-4 sm:grid sm:grid-cols-2 sm:grid-rows-2 items-start">
            <div className="row-span-2 ml-2">
                <MessageList messages={messages} setSelectedMessage={setSelectedMessage}/>
            </div>
            <div className="flex flex-col">
                <SelectedMessage selectedMessage={selectedMessage}/>
            </div>
        </div>
    );
}