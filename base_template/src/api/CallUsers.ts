let functionUrl = "https://helloworld-c2aaywm6rq-uc.a.run.app";
if (window.location.hostname === "localhost") {
  functionUrl = "http://127.0.0.1:5001/globaluser-ef76d/us-central1/helloWorld"
}

export const createUser = async(email: string, password: string, name: string) => {
const data = {
    email,
    password,
    name,
    eventType: "createUser"
};
try {
    const response = await fetch(functionUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.text();
    console.log('Response from Cloud Function:', result);
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const signInUser = async(email: string, password: string) => {
const data = {
    email,
    password,
    eventType: "signIn"
};
try {
    const response = await fetch(functionUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.text();
    console.log('Response from Cloud Function:', result);
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

