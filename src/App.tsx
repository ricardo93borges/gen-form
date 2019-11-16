import React from 'react';
import Form from './gen-form/Form';
import User from './models/User';
import 'react-milligram';

const submit = (event: Event, data: object) => {
  event.preventDefault()
  alert(JSON.stringify(data))
}

const App: React.FC = () => {
  return (
    <div className="container">

      <h1>NextGen Form</h1>

      <Form
        instance={new User()}
        action={submit}
      />

    </div>
  );
}

export default App;
