import Form from "./Form";

function FormText({ appendListEntry }) {
  function sendForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { travel, experiences } = Object.fromEntries(formData);

    appendListEntry(travel, experiences);
  }

  return (
    <Form onSubmit={sendForm}>
      <h3>Enter your experiences from your last trip here </h3>
      <label className="labelinput" htmlfor="travel">
        Travel destination
      </label>
      <input
        className="inputfield"
        type="text"
        id="travel"
        name="travel"
        rows="2"
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
