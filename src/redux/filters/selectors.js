import { createSelector } from "@reduxjs/toolkit";
import { statusFilters, } from 'redux/constants';
import { selectContacts } from "../contacts/selectors";

// Filters
export const selectStatusFilter = state => state.filters.status;
export const selectFindQuery = state => state.findQuery;

// findQuery
export const selectVisibleContacts = createSelector(
  [ selectContacts, selectStatusFilter, selectFindQuery],
  (contacts, statusFilter, query) => {

    const {findQuery} = query;
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase()
    .includes(findQuery.toLowerCase()));

    switch (statusFilter) {
      case statusFilters.active:
        return visibleContacts.filter(contact => !contact.selected);
      case statusFilters.selected:
        return visibleContacts.filter(contact => contact.selected);
      default:
        return visibleContacts;
    }
});

