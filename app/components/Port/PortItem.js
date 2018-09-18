import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const PortItem = ({loading, error, repo}) => {
  if (loading) {
    // return <List component={LoadingIndicator}/>;
  }

  if (error !== false) {
    // const ErrorComponent = () => (
    //   <ListItem item={'Something went wrong, please try again!'}/>
    // );
    // return <List component={ErrorComponent}/>;
  }

  if (repo !== false) {
    return (<div className="list-item-wrapper">
      <div className="list-item">{repo.id}</div>
      <div className="list-item">{repo.name}</div>
      <div className="list-item">{repo.country}</div>
    </div>)
  }

  return null;


};

PortItem.propTypes = {
  repo: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ])
};

export default PortItem;
