import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile" data-testid="profile">
      <div className="profile-avatar" role="img" aria-label="Profile avatar" />
      <div className="profile-info">
        <div className="profile-name">Jane Doe</div>
        <div className="profile-email">jane.doe@example.com</div>
      </div>
    </div>
  );
}

export default Profile;
