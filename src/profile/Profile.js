import propTypes from "prop-types";
import { MDBBtn } from "mdbreact";

const Profile = (props) => {
  const { fullName, bio, profession } = props;
  const handleName = () => alert(`my name is: ${fullName}`);

  Profile.propTypes = {
    fullName: propTypes.string,
    bio: propTypes.string,
    profession: propTypes.string,
    handleName: propTypes.func,
  };

  Profile.defaultProps = {
    fullName: "this is the default fullname",
    bio: "this is the default bio",
    profession: "this is the default profession",
  };
  return (
    <>
      <h1 style={{ color: "green" }}>fullName: {fullName}</h1>
      <h1 style={{ color: "red", textDecoration: "underline" }}>Bio: {bio}</h1>
      <h1 style={{ color: "blue" }}>Profession: {profession}</h1>
      <MDBBtn style={{ color: "warning" }} onClick={handleName}>
        Name
      </MDBBtn>
      <img
        src={props.children}
        alt="user"
        style={{
          height: "400px",
          width: "500px",
          position: "absolute",
          left: "20%",
          border: "1rem solid black",
          borderRadius: "1rem",
        }}
      ></img>
    </>
  );
};
export default Profile;
