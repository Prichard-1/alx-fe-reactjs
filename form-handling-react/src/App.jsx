import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";  // Capitalize here

function App() {
  return (
    <div className="p-6">
      <RegistrationForm />
      <hr className="my-6" />
      <FormikForm />   {/* Capitalized usage */}
    </div>
  );
}

export default App;

