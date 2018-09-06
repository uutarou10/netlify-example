import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='is-space'>
      <h1 className='heading is-xxl is-strong'>
        <a className='link is-primary' href='https://www.netlify.com/'>Netlify</a> Example Page
      </h1>
      <p>このページはNetlifyの各機能(というかForms?)を試すために作りました。</p>

      <h2 className='heading is-xl'>使用ライブラリ</h2>
      <ul className='list is-disc'>
        <li className='item'>React</li>
        <li className='item'>react-router-dom</li>
        <li className='item'>react-helmet</li>
        <li className='item'>musubii (CSS Framework)</li>
      </ul>

      <h2 className='heading is-xl'>Demo</h2>
      <Link to='/form' className='btn is-success is-plain'>Formのデモ</Link>
    </div>
  )
}

export default Home;