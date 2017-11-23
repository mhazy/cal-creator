export const initialize = () =>
  window.gapi.client.init({
    apiKey: 'AIzaSyDzYoLaiFT5ubmjNc7Hri3k616NdgwKCuc',
    clientId: '198424686452-ij9cjpoasv6bem4udsam8e1lgc284t2v.apps.googleusercontent.com',
    scope: 'https://www.googleapis.com/auth/calendar',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
  });

export const authorize = () => {
  const auth = window.gapi.auth2.getAuthInstance();
  return auth.signIn().then(result => result.getAuthResponse());
};

export const loadClient = () =>
  new Promise(resolve =>
    window.gapi.load('client:auth2', () => {
      resolve();
    }));
