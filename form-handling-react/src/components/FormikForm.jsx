import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log("User registered:", data);
      alert("Registration successful!");
      resetForm();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Formik Registration Form</h2>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <div className="mb-2">
            <label>Username</label>
            <Field name="username" type="text" className="border p-2 w-full" />
            <ErrorMessage name="username" component="p" className="text-red-500" />
          </div>

          <div className="mb-2">
            <label>Email</label>
            <Field name="email" type="email" className="border p-2 w-full" />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>

          <div className="mb-2">
            <label>Password</label>
            <Field name="password" type="password" className="border p-2 w-full" />
            <ErrorMessage name="password" component="p" className="text-red-500" />
          </div>

          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;

