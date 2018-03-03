import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/register'>Register here</Link>
    </div>
  );
}
