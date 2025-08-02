import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import { UserContext } from './components/UserContext'; 
import ProfilePage from './components/ProfilePage';

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    age: "25",
    bio: "Loves hiking and photography"
  };

  return (
    <UserContext.Provider value={userData}>
      <>
        <Header />
        <MainContent />
        <UserProfile /> 
        <Counter />
        <ProfilePage />
        <Footer />
      </>
    </UserContext.Provider>
  );
}

export default App;

