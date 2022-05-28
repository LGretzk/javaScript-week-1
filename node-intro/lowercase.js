const lowercase = (message) => {
  return message.toLowerCase();
};

const transform = (message, someFunction) => {
  return someFunction(message);
};

const notifyByEmail = (email) => {
  return `Email sent to: ${email}`;
};

const notifyByText = (phoneNumber) => {
  return `Text sent to: ${phoneNumber}`;
};

const notify = (contact, fn) => {
  return fn(contact);
};

const printHello = () => {
  console.log('Hello!');
};

setTimeout(printHello, 2000);

const executeAfterDelay = (num, method) => {
  return setTimeout(method, num*1000);
};