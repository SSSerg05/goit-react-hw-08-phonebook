import { createSelector } from "@reduxjs/toolkit";
import { statusFilters, } from 'redux/constants';


// User authetification
export const selectUserLoading = state => state.auth.loading;
export const selectUserError = state => state.auth.error;
export const selectToken = state => state.auth.token;
export const selectUserData = state => state.auth.userData;
export const selectAuthetification = state => state.auth.authetification;
export const selectIsRefreshing = state => state.isRefreshing;

// Contacts
export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

// Filters
export const selectStatusFilter = state => state.filters.status;
export const selectFindQuery = state => state.findQuery;

//Theme
export const selectStatusTheme = state => state.theme.status;

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

