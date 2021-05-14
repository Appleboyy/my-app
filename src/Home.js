import logo from './logo.svg';
import './App.css';
import { Form, Field } from 'react-final-form'

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const MyForm = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <h2>Form</h2>
        <div>
          <label>Name</label>
          <Field name="Name" component="input" placeholder="Name" />
        </div>

        <h2>Phone Number</h2>
        <Field name="phone">
          {({ input, meta }) => (
            <div>
              <label>Phone</label>
              <input type="text" {...input} placeholder="Phone" />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        </Field>

        <button type="submit">Submit</button>
      </form>
    )}
  />
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <MyForm></MyForm>
      </header>
    </div>
  );
}

export default App;
