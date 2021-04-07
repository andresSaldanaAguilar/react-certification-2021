import React, { createContext, useContext, useReducer } from 'react';
import { storage } from '../../utils/storage';

const SessionContext = createContext();

function getStarredVideos(user) {
  const allStarredVideos = storage.get('starredVideos');
  if (allStarredVideos) {
    return allStarredVideos[user.id];
  }
  const starredVideos = { [user.id]: [] };
  storage.set('starredVideos', starredVideos);
  return starredVideos[user.id];
}

function starVideo(videoId, user, starredVideos) {
  const index = starredVideos.indexOf(videoId);
  if (index > -1) {
    starredVideos.splice(index, 1);
  } else {
    starredVideos.push(videoId);
  }
  const allStarredVideos = storage.get('starredVideos');
  allStarredVideos[user.id] = starredVideos;
  storage.set('starredVideos', allStarredVideos);
  return starredVideos;
}

function sessionReducer(state, action) {
  switch (action.type) {
    case 'logout': {
      storage.set('user', null);
      return { user: null, starredVideos: null };
    }
    case 'login': {
      storage.set('user', action.payload);
      const usrStarredVideos = getStarredVideos(action.payload);
      return { user: action.payload, starredVideos: usrStarredVideos };
    }
    case 'starVideo': {
      const usrStarredVideos = starVideo(action.payload, state.user, state.starredVideos);
      return { user: state.user, starredVideos: usrStarredVideos };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function Session({ children }) {
  const [session, dispatchSession] = useReducer(sessionReducer, {
    user: storage.get('user'),
    starredVideos: storage.get('user') ? getStarredVideos(storage.get('user')) : null,
  });
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
