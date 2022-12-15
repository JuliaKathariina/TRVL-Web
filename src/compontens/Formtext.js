import Form from "./Form";
import DatePicker from "react-multi-date-picker";
import { useState } from "react";
import "../compontens/FormText.css";
function FormText({ appendListEntry }) {
  function sendForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { travel, experiences, setValues } = Object.fromEntries(formData);

    appendListEntry(travel, experiences, setValues);
  }

  const today = new Date();
  const tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate() + 1);

  const [values, setValues] = useState([today, tomorrow]);

  return (
    <Form onSubmit={sendForm}>
      <h3 className="headline_h3">
        Enter your experiences from your last trip here{" "}
      </h3>
      <DatePicker
        className="datapicker"
        multiple
        value={values}
        onChange={setValues}
      />
      <label className="labelinput" htmlfor="travel">
        Travel destination
      </label>
      <input
        className="inputfield"
        type="text"
        id="travel"
        name="travel"
        rows="6"
        maxLength="240"
        required
      ></input>

      <label className="labelinput" htmlfor=" experiences">
        Experiences
      </label>
      <input
        className="inputfield"
        type="text"
        id=" experiences"
        name=" experiences"
        rows="2"
        maxLength="10"
        required
      ></input>

      <button className="buttonsubmit" type="submit">
        Save your journey
      </button>
    </Form>
  );
}

export default FormText;
