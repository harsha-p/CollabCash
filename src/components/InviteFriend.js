import React, { useState } from 'react';
import { connect } from 'react-redux';
import { inviteFriend } from '../../redux/actions'; // Adjust the path as necessary
import './InviteFriend.css'; // Import the CSS file

const InviteFriend = (props) => {
  const [email, setEmail] = useState('');

  const handleInvite = (event) => {
    event.preventDefault();
    props.inviteFriend(email);
    setEmail('');
  };

  return (
    <div className="invite-friend-container">
      <h2>Invite a Friend</h2>
      <form onSubmit={handleInvite}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Friend's Email"
          required
        />
        <button type="submit">Invite</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  inviteFriend,
};

export default connect(null, mapDispatchToProps)(InviteFriend);