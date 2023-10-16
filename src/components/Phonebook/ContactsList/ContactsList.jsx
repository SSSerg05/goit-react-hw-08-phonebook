import { useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/selectors';
import { Contact } from '../Contact/Contact';
import { List, ListItem, } from './ContactsList.styled';


export const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const showContacts = Array.isArray(visibleContacts) && visibleContacts.length > 0;
  
  if (!showContacts) {
    return (
      <p>Sorry, you don't have more contacts</p>
    )
  }

  return (
    <List>
      {
        visibleContacts.map((item) =>
          <ListItem key={ item.id }>
            <Contact contact={ item } />
          </ListItem>)
      }
    </List>
  );
}
