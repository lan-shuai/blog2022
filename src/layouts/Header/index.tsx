import React, { memo } from 'react';

import { Link } from 'react-router-dom';
import { routes, IRouter } from '../../router';

const renderLinks = (routers: IRouter[]) =>
  routers.map((router, index) => {
    const { path, text } = router;
    return (
      <Link key={index} to={path}>
        {text}
      </Link>
    );
  });

export default memo(() => (
  <div>
    {/* <Link to='/test1'>test1</Link>
    <Link to='/test2'>test2</Link> */}
    {renderLinks(routes)}
  </div>
));
