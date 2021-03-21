import React, { createContext, useContext, useReducer } from 'react';
import { storage } from '../../utils/storage';

const SessionContext = createContext();

function sessionReducer(state, action) {
  switch (action.type) {
    case 'logout': {
      storage.set('user', null);
      return null;
    }
    case 'login': {
      storage.set('user', action.payload);
      return action.payload;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function Session({ children }) {
  const [session, dispatchSession] = useReducer(sessionReducer, storage.get('user'));
  const value = { session, dispatchSession };
  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
}

function useSession() {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a Session');
  }
  return context;
}

export { Session, useSession };
