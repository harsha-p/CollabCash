// src/redux/actions/index.js
export const INVITE_FRIEND = 'INVITE_FRIEND';

export const inviteFriend = (email) => {
  return {
    type: INVITE_FRIEND,
    payload: email,
  };
};