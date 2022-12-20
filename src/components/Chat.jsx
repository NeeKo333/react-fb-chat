import { Button, Container, Grid, TextField } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Context } from "..";
import firebase from "firebase/compat/app";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import Message from "./Message";
const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [messageInputValue, setMessageInputValue] = useState("");
  const [messageList, loading] = useCollectionData(
    collection(firestore, "messages")
  );
  function sendMessage() {
    const data = {
      uid: user.uid,
      name: user.displayName,
      text: messageInputValue,
      photo: user.photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    addDoc(collection(firestore, "messages"), data).then(() =>
      setMessageInputValue("")
    );
  }

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        justifyContent="center"
      >
        <div
          style={{
            width: "80%",
            height: "90vh",
            border: "1px solid grey",
            owerflowY: "auto",
            marginTop: "20px",
          }}
        >
          {!loading ? (
            messageList.map((message) => (
              <Message
                key={message.createdAt}
                name={message.name}
                text={message.text}
              ></Message>
            ))
          ) : (
            <h2>Loading....</h2>
          )}
        </div>
        <Grid
          container
          direction={"column"}
          alignItems="flex-end"
          style={{ width: "80%" }}
        >
          <TextField
            value={messageInputValue}
            onChange={(e) => setMessageInputValue(e.target.value)}
            fullWidth
            variant="outlined"
          ></TextField>
          <Button onClick={sendMessage}>Send</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
