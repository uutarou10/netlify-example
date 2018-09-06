import React from 'react';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class SurveyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      opinion: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "survey", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form
        className='form is-space'
        onSubmit={this.handleSubmit}
      > 
        <p className='heading'>お名前</p>
        <div className='field'>
          <input
            className='input is-mobile-full'
            type='text'
            name='name'
            placeholder='山田 太郎'
            onChange={this.handleChange}
          />
        </div>
        <p className='heading'>メールアドレス</p>
        <div className='field'>
          <input
            className="input is-mobile-full"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            onChange={this.handleChange}
          />
        </div>
        <p className='heading'>ご意見・感想など</p>
        <div className='field'>
          <textarea
            className='textarea is-mobile-full'
            name='opinion'
            onChange={this.handleChange}
          />
        </div>
        <div className='btns'>
          <button className='btn is-plain is-primary is-mobile-full' type='submit'>送信</button>
        </div>
      </form>
    )
  }
}

export default SurveyForm;