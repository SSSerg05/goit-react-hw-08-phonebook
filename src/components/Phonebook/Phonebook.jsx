import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { MdAddIcCall } from 'react-icons/md';


// redux
import { requestContactsThunk } from "redux/operations";
import { selectError, selectLoading, selectAuthetification } from "redux/selectors";

// components
import { Loader } from "components/Loader/Loader";
import { Section } from "../Section/Section";
import { FormContact } from "../Forms/FormContact/FormContact";
import { Search } from "./Search/Search";
import { Filter } from "./Filter/Filter";
import { ContactsList } from "./ContactsList/ContactsList";
import { Modal } from 'components/Modal/Modal';

// style
import { DeskPhonebook } from "./Phonebook.styled";
import { ButtonAddContact } from "components/Forms/Buttons.styles";


export const Phonebook = () => {
  
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const authetification = useSelector(selectAuthetification);

  const [showModal, setShowModal] = useState(false);

  useEffect(() =>  {
    if (!authetification) return

    dispatch(requestContactsThunk());
  }, [dispatch, authetification]);

  
  const handleAddContact = () => {toggleModal()}
  
  // відкриття / закриття модалки
  const toggleModal = () => {
    setShowModal( !showModal );
  }


  return (
    <DeskPhonebook>

      <Section>
        <ButtonAddContact onClick={handleAddContact}>
          Add contact
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
      
      { showModal && (
          <Modal
            onClose={ toggleModal }
          >
            <FormContact contact={{name:"", number:""}} onClose={ toggleModal }/>
          </Modal> 
        )}
    </DeskPhonebook>
  )
}
