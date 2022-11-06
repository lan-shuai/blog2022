import React, { memo } from 'react';

import { Link } from 'react-router-dom';
import { routes, IRouter } from '../../router';
import Style from './index.module.less';

const renderLinks = (routers: IRouter[]) => (
  <div className={Style.headerContainer}>
    {routers.map((router, index) => {
      const { path, text } = router;
      return (
        <Link key={index} to={path}>
          {text}
        </Link>
      );
    })}
  </div>
);

export default memo(() => <div>{renderLinks(routes)}</div>);
