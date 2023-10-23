import { useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/filters/selectors';
import { Contact } from '../Contact/Contact';
import { WarningBox, ListContacts, ListItem, } from './ContactsList.styled';


export const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const showContacts = Array.isArray(visibleContacts) && visibleContacts.length > 0;
  
  if (!showContacts) {
    return (
      <WarningBox>Sorry, you don't have more contacts</WarningBox>
    )
  }

  return (
    <ListContacts>
      {
        visibleContacts.map((item) =>
          <ListItem key={ item.id }>
            <Contact contact={ item } />
          </ListItem>)
      }
    </ListContacts>
  );
}
