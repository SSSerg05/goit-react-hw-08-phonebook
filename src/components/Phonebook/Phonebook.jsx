import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// redux
import { requestContactsThunk } from "redux/operations";
import { selectError, selectLoading, selectAuthetification, selectContacts } from "redux/selectors";

// components
import { Section } from "../Section/Section";
import { Form } from "./Form/Form";
import { Search } from "./Search/Search";
import { Filter } from "./Filter/Filter";
import { ContactsList } from "./ContactsList/ContactsList";
import { Loader } from "components/Loader/Loader";
// style
import { DeskPhonebook } from "./Phonebook.styled";


export const Phonebook = () => {
  
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const authetification = useSelector(selectAuthetification);
  const contacts = useSelector(selectContacts);

  useEffect(() =>  {
    dispatch(requestContactsThunk());
  }, [dispatch]);

  
  return (
    <DeskPhonebook>
      <Section title={"Phonebook: HW-08 LoginUser"}>
        <Form />
      </Section>
        
      <Section>
        <Search />
        <Filter />
      </Section>
      
      <Section title={"Contacts"}>

        { loading && <Loader />}

        { loading && !error && <b>Request in progress...</b> }
        <ContactsList />
      </Section>
    </DeskPhonebook>
  )
}
