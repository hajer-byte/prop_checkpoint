import Profile from "./profile/Profile";
function App() {
  return (
    <div className="App">
      <Profile
        fullName="Hajer Mejri"
        bio="Always aiming to be a rainbow at the end of a thunderstorm!"
        profession="front-end developer"
        handleName="handleName"
      >
        /me.jpg
      </Profile>
    </div>
  );
}

export default App;
