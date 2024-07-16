import React, { useEffect, useState } from "react";
import axios from "axios";
import Contacts from "./Contacts";
import AddContact from "./AddContact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const [relaod, setRelaod] = useState(false)
  const [id, setId] = useState("")

  // const url = "http://localhost:2000";

  const url = "https://love-hind.onrender.com";
  useEffect(() => {
    const fetchData = async () => {
      const api = await axios.get(`${url}/`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(api.data.contact);
      setContacts(api.data.contact);
    };
    fetchData();
  }, [relaod]);

  const handleModal = () => {
    setShowModal(!showModal);
    setOpacity(!opacity)
  };
console.log("Getting id for edit ",id)
  return (
    <>
    <ToastContainer />
    
      <AddContact
        handleModal={handleModal}
        showModal={showModal}
        url={url}
        relaod={relaod}
        setRelaod={setRelaod}
        id={id}
        setId={setId}
        contacts={contacts}
      />
      <Contacts
        contacts={contacts}
        opacity={opacity}
        url={url}
        relaod={relaod}
        setRelaod={setRelaod}
        setId={setId}
        handleModal={handleModal}
      />
    </>
  );
};

export default App;
