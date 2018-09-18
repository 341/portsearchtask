/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import PortItem from 'components/Port';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.portname && this.props.portname.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repo } = this.props;
    const repoItemProps = {
      loading,
      error,
      repo,
    };

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>Start your next react project in seconds</h2>
            <p>A minimal <i>React-Redux</i> boilerplate with all the best practices</p>
          </section>
          <section>
            <h2>Try me!</h2>
            <form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="username">
              Show Port by Name
                <span className="at-prefix"></span>
                <input
                  id="username"
                  type="text"
                  placeholder="NOOSL"
                  value={this.props.portname}
                  onChange={this.props.onChangePortname}
                />
              </label>
            </form>
            <PortItem {...repoItemProps} />

            {/*<ReposList {...reposListProps} />*/}
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repo: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  portname: PropTypes.string,
  onChangePortname: PropTypes.func,
};
