import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { MdAddIcCall } from 'react-icons/md';


// redux
import { selectAuthetification } from "redux/auth/selectors";
import { requestContactsThunk } from "redux/contacts/contactsOperations";
import { selectError, selectLoading } from "redux/contacts/selectors";
// components
import { Loader } from "components/Loader/Loader";
import { Section } from "../Section/Section";
import { FormContact } from "../Forms/FormContact/FormContact";
import { Search } from "../Forms/Search/Search";
import { Filter } from "./Filter/Filter";
import { ContactsList } from "./ContactsList/ContactsList";
//import { Modal } from 'components/Modal/Modal';
import ModalPortal from "components/Modal/ModalPortal";

// style
import { ButtonAddContact, TextButton } from "components/Forms/Buttons.styles";


export const Phonebook = () => {
  
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const authetification = useSelector(selectAuthetification);

  const [showModal, setShowModal] = useState(false);
  
  // Manage state of Delete Modal toggle.
  const [ openModal, setOpenModal ] = useState(false);

  useEffect(() =>  {
    if (!authetification) return

    dispatch(requestContactsThunk());
  }, [dispatch, authetification]);

  
  const handleAddContact = () => {toggleModal()}
  
  // відкриття / закриття модалки
  const toggleModal = () => {
    setShowModal( !showModal );
    setOpenModal( !openModal );
  }
  
  // Handle delete comment.
    const handleDelete = async () => {
      // do something here, example: call delete API.
      console.log('Deleted.');
  }

  return (
    <>
      <Section>
        <ButtonAddContact onClick={handleAddContact}>
          <TextButton>Add contact</TextButton>
          <MdAddIcCall size={24} />
        </ButtonAddContact>
      </Section>

      <Section>
        <Search />
        <Filter />
      </Section>
      
      <Section title={"Contacts"}>

        { loading && <Loader />}
        { error && <p>Error... { error }</p>}
        { loading && !error && <b>Request in progress...</b> }
        
        {!error && <ContactsList />}
      </Section>
      
      {/* { showModal && (
          <Modal
            title={'Add new'}
            onClose={ toggleModal }
          >
            <FormContact contact={{name:"", number:""}} onClose={ toggleModal }/>
          </Modal> 
      )} */}
      { openModal && (
        <ModalPortal
            isOpen={openModal}
            setOn={setOpenModal}
            title={`Delete comment`}
            promptText={`Are you sure you want to delete this comment? This will remove the comment and can't be undone.`}
            onClose={ toggleModal }
            handleDelete={handleDelete} 
        >
          <FormContact contact={{name:"", number:""}} onClose={ toggleModal }/>
        </ModalPortal>
      )}
      {/* <button
        className="button button__delete"
        onClick={ () => setOpenModal(true) }
      >
        Delete
      </button> */}
      {/* Modal for deletion */}
      {/* <ModalPortal
        isOpen={openModal}
        setOn={setOpenModal}
        title={`Delete comment`}
        promptText={`Are you sure you want to delete this comment? This will remove the comment and can't be undone.`}
        handleDelete={handleDelete}
     /> */}
    </>
  )
}
