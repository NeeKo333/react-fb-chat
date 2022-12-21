import { Button, Container, Grid, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Context } from "..";
import firebase from "firebase/compat/app";
import { collection, addDoc, query, orderBy } from "firebase/firestore";
import Message from "./Message";
import moment from "moment";

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [messageInputValue, setMessageInputValue] = useState("");
  const [messageList, loading] = useCollectionData(
    query(collection(firestore, "messages"), orderBy("createdAt", "asc"))
  );
  function sendMessage(e) {
    e.preventDefault();
    const data = {
      uid: user.uid,
      name: user.displayName,
      text: messageInputValue,
      photo: user.photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    addDoc(collection(firestore, "messages"), data);
    setMessageInputValue("");
  }

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        justifyContent="center"
      >
        <div
          className="messageList"
          style={{
            width: "80%",
            height: "70vh",
            border: "1px solid grey",
            owerflowY: "auto",
            marginTop: "20px",
          }}
        >
          {!loading ? (
            messageList.map((message) => (
              <Message
                className={
                  user.uid === message.uid
                    ? "message greenMsg"
                    : "message redMsg"
                }
                key={message.createdAt}
                name={message.name}
                text={message.text}
                time={moment().format("lll")}
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
          <form style={{ width: "100%" }} onSubmit={(e) => sendMessage(e)}>
            <TextField
              value={messageInputValue}
              onChange={(e) => setMessageInputValue(e.target.value)}
              fullWidth
              variant="outlined"
            ></TextField>
            <Button onClick={sendMessage}>Send</Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
