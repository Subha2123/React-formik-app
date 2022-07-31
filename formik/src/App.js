import ReactDOM from "react-dom";
import { useFormik } from "formik";
import './styles.css'

export default function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      alert("login successfully");
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (!/[A-Z0-9]+@[A-Z0-9]+.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.password) errors.password = "Required";
      return errors;
    }
  });
  return (
    <>
    <h2>Login Form</h2>
    <form onSubmit={formik.handleSubmit}>
        <label>email</label>
      <input
        id="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      ></input>
               
      {formik.errors.email ? (
        <div style={{ color: "red" }}>{formik.errors.email}</div>
      ) : null}
            <label>Password</label>   
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
                   
      {formik.errors.password ? (
        <div style={{ color: "red" }}>{formik.errors.password}</div>
      ) : null}
            <button type="submit">Submit</button>  
    </form>
    </>
  );
}
