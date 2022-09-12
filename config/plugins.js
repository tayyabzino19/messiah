 module.exports = ({ env }) => ({
   
  email: {
    config: {
      provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey:'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',
      },
      settings: {
        defaultFrom: 'tayyab@zinormous.com',
        defaultReplyTo: 'tayyab@zinormous.com',
        testAddress: 'tayyab@zinormous.com',
      },
    },
  },
   
});

