import React from 'react';
import SurveyForm from '../components/SurveyForm';

const Form = () => {
  return (
    <div className='is-space'>
      <h2 className='heading is-xl is-strong'>Form demo</h2>
      <p>
        Form機能のデモです。<br />
        動的に追加されたFormタグはNetlifyがビルドの際に認識してくれないので、HTMLに手を加える必要があります。
      </p>
      <p>
        参考: <a
          href='https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/'
          className='text is-link is-primary'
          target='_blank'
          rel='noopener noreferrer'
        >How to Integrate Netlify’s Form Handling in a React App | Netlify</a>
      </p>
      <hr />
      <SurveyForm />
    </div>
  );
}

export default Form;