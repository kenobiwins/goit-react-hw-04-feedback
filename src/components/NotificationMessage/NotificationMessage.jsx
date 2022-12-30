import PropTypes from 'prop-types';

export const NotificationMessage = ({ message }) => {
  return <p>{message}</p>;
};

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
