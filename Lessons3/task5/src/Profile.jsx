import React from "react";
import moment from "moment";
import "./index.scss";

const formatDate = date => moment(date).format("DD MMM YY");

const Profile = (props) => {
  return (
    <>
    <div className="profile__name">
    {`${props.userData.firstName} ${props.userData.lastName}`}
  </div>
  <div className="profile__birth">
    {`Was born ${formatDate(props.userData.birthDate)} in ${props.userData.birthPlace}`}
  </div>
  </>
  );
};

export default Profile;