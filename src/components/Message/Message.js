import './Message.css';

function Message({ message, showMessage }) {
  return (
    <p className={`message ${!showMessage ? 'message_hidden' : ''}`}>
      {message}
    </p>
  );
}

export default Message;