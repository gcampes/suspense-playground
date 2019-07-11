import React from 'react';
import { Link } from 'react-router-dom'
import styles from './styles.module.scss';
import Truncate from 'react-truncate';

const Item = ({
  id,
  title,
  body,
}, index) => (
  <div key={index} className={styles.post}>
    <Link to={`/${id}`} className={styles.title}>
      {title}
    </Link>
    <div className={styles.body}>
    <Truncate
      lines={2}
      ellipsis={<span>... <Link to={`/${id}`}>Read more</Link></span>}>
        {body}
    </Truncate>
    </div>
  </div>
)

export default Item;
