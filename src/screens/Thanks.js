import React from 'react';
import { Link } from 'react-router-dom';

const Thanks = () => {
  return (
    <div className='texts is-center is-space'>
      <h2 className='heading is-xxl'>Thank you!</h2>
      <p>投稿してくれてありがとう!</p>
      <Link to='/' className='btn is-primary is-round is-outline'>トップに戻る</Link>
    </div>
  );
}

export default Thanks;