import React from "react";
import moment from "moment";
import "./index.scss";

const formatDate = date => moment(date).format("DD MMM YYYY");

const Profile = (props) => {
  return (
    <>
    <div className="profile__name">
    {`${props.user.firstName} ${props.user.lastName}`}
  </div>
  <div className="profile__birth">
    {`Was born ${formatDate(props.user.birthDate)} in ${props.user.birthPlace}`}
  </div>
  </>
  );
};

export default Profile;