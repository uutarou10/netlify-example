import React from 'react';
import { Link } from 'react-router-dom';
import misoSoup from '../images/miso_soup.jpg';

const NotFound = () => {
  return (
    <div className='is-space is-center'>
      <h2 className='heading is-xxl'>Sorry, not found...</h2>
      <p>お探しのページは残念ながらありませ〜ん。</p>
      <img
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
        src={misoSoup} alt='みそスープ'
      />
      <Link
        to='/'
        className='btn is-plain is-primary is-round'
      >トップへ戻る</Link>

    </div>
  );
};

export default NotFound;