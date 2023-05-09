import PropTypes from 'prop-types';
import { NotificationEl } from './Notifications.styled';

export const Notification = ({ message }) => {
  return <NotificationEl>{message}</NotificationEl>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
