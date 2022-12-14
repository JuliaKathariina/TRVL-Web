import Form from "./Form";

function FormText({ appendListEntry }) {
  function sendForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { mantra, category } = Object.fromEntries(formData);

    appendListEntry(mantra, category);
  }

  return (
    <Form onSubmit={sendForm}>
      <h3>Enter your experiences from your last trip here </h3>
      <label className="labelinput" htmlfor="Mantra">
        lorem
      </label>
      <input
        className="inputfield"
        type="text"
        id="mantra"
        name="mantra"
        rows="2"
        maxLength="240"
        required
      ></input>

      <label className="labelinput" htmlfor="Categroy">
        lorem
      </label>
      <input
        className="inputfield"
        type="text"
        id="category"
        name="category"
        rows="2"
        maxLength="10"
        required
      ></input>

      <button className="buttonsubmit" type="submit">
        Save 🧘🏽click here for your mantra
      </button>
    </Form>
  );
}

export default FormText;
