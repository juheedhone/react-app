
// always keep component pure
let count = 0;

const Message = () => {
  console.log('message', count)
  count++;
  return <div>Message {count}</div>;
};

export default Message;
