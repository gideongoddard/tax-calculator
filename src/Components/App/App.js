import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Results from '../Results/Results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
    }

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm() {
    this.setState({
        formSubmitted: true
    })
    
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form formSubmitted={this.state.formSubmitted} onFormSubmit={this.submitForm} />
        <Results formSubmitted={this.state.formSubmitted} />
      </div>
    );
  }
}

export default App;
