import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const [userData, setUserData] = useState(null);
  const { USER_ID } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${USER_ID}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error();
      })
      .then(userData => {
        setUserData(userData);
      });
  }, [USER_ID]);

  if (!userData) {
    return null;
  }
  const { avatar_url, location, name } = userData;
  return (
    <div className="user">
      <img src={avatar_url} alt="User Avatar" className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

// class User extends React.Component {
//   state = {
//     userData: null
//   };

//   componentDidMount() {
//     this.fetchUserData();
//   }

//   componentDidUpdate(prevProps) {
//     const prevUser = prevProps.match.params.userId;
//     const curentUser = this.props.match.params.userId;

//     if (prevUser !== curentUser) {
//       this.fetchUserData();
//     }
//   }

//   fetchUserData() {
//     const { match } = this.props;
//     fetch(`https://api.github.com/users/${match.params.userId}`)
//       .then(res => {
//         if (res.ok) {
//           return res.json();
//         }

//         throw new Error();
//       })
//       .then(userData => {
//         this.setState({
//           userData,
//         });
//       });
//   }

//     render() {
//       const { userData } = this.state;
//       if(!userData) {
//         return null;
//       }
//   const { avatar_url, location, name } = userData;
//       return (
//         <div className='user'>
//           <img src={avatar_url} alt="User avatar" className='user__avatar'/>
//           <div className='user__info'>
//             <span className='user__name'>{name}</span>
//             <span className='user__location'>{location}</span>
//           </div>
//         </div>
//       );
//     }
// }

export default User;
