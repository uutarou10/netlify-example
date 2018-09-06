import React from 'react';
import { withRouter } from 'react-router';

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
      member: 'mirin',
      opinion: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "survey", ...this.state })
    })
      .then(() => this.props.history.push('/form/thanks'))
      .catch(error => alert(error));
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  isValid() {
    return !(this.state.email !== '' && this.state.name !== '' && this.state.opinion !== '');
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
        <p className='heading'>推しメン</p>
        <div className='field'>
          <div className='select'>
            <select
              name='member'
              onChange={this.handleChange}
            >
              <option value='mirin'>古川未鈴</option>
              <option value='risa'>相沢梨紗</option>
              <option value='nemu'>夢眠ねむ</option>
              <option value='eitaso'>成瀬瑛美</option>
              <option value='pinky'>藤咲彩音</option>
              <option value='perorin'>鹿目凛</option>
              <option value='nemo'>根本凪</option>
            </select>       
          </div>
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
          <button
            className='btn is-plain is-primary is-mobile-full' type='submit'
            disabled={this.isValid()}
          >送信</button>
        </div>
      </form>
    )
  }
}

export default withRouter(SurveyForm);