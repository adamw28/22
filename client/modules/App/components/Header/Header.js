import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  const languageNodes = props.intl.enabledLanguages.map(lang => (
    <li
      key={lang}
      onClick={() => props.switchLanguage(lang)}
      className={lang === props.intl.locale ? styles.selected : ''}
    >
      {lang}
    </li>
  ));

  return (
    <div className={styles.header}>
      <div className={styles['header-menu']}>
        <ul>
          <li>
            <span>
              <a href="/posts">Lista postów</a>
            </span>
          </li>
          <li>
            <span>
              <a href="/About">About</a>
            </span>
          </li>
          <li>
            <FormattedMessage id="switchLanguage" />
          </li>
          {languageNodes}
        </ul>
      </div>
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <Link to="/">
            <FormattedMessage id="siteTitle" />
          </Link>
        </h1>
          {
          context.router.isActive('/', true)
            ? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>
            : null
        }
        {
          context.router.isActive('/posts', true)
            ? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>
            : null
        }
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired
};

export default Header;
