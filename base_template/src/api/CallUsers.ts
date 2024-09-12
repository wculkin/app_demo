export const makeCall = (email: string, password: string) => {
let functionUrl = "https://helloworld-c2aaywm6rq-uc.a.run.app";
if (window.location.hostname === "localhost") {
  functionUrl = "http://127.0.0.1:5001/globaluser-ef76d/us-central1/helloWorld"
}
// Email and password to send
const data = {
  email,
  password
};

// Make the HTTP POST request
fetch(functionUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then(response => response.text())
  .then(result => {
      console.log('Response from Cloud Function:', result);

      return(result)
  })
  .catch(error => {
    console.error('Error:', error);
  });
}