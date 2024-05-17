export const environment = {
  production: false,
  msalConfig: {
      auth: {
          clientId: '3c89569b-ea01-4315-b532-374184eaedcd',
          authority: 'https://login.microsoftonline.com/ff463ea8-92b7-4e5a-a417-cf03db333692'
      }
  },
  apiConfig: {
    scopes: ['user.read'],
    uri: 'https://graph.microsoft.com/v1.0/me'
  }
};
