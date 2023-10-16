import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MdAddIcCall } from 'react-icons/md';

// redux
import { requestContactsThunk } from "redux/operations";
import { selectError, selectLoading, selectAuthetification } from "redux/selectors";

// components
import { Loader } from "components/Loader/Loader";
import { Section } from "../Section/Section";
// import { Form } from "../Forms/FormContact/FormContact";
import { Search } from "./Search/Search";
import { Filter } from "./Filter/Filter";
import { ContactsList } from "./ContactsList/ContactsList";

// style
import { DeskPhonebook } from "./Phonebook.styled";
import { ButtonAddContact } from "components/Forms/Buttons.styles";


export const Phonebook = () => {
  
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const authetification = useSelector(selectAuthetification);

  useEffect(() =>  {
    dispatch(requestContactsThunk());
  }, [dispatch]);

  if (!authetification) return;

  const handleAddContact = () => {dispatch()}
  
  return (
    <DeskPhonebook>

      <Section title={"Phonebook: HW-08"}>
        {/* <Form /> */}
        <ButtonAddContact onClick={handleAddContact}>
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
        
        <ContactsList />
      </Section>
    </DeskPhonebook>
  )
}
