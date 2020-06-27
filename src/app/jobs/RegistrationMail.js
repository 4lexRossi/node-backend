import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  options: {
    delay: 5000,
    priority: 3,
    lifo: true
  },
  async handle({ data }){
    const { user } = data;
      await Mail.sendMail({
        from: 'ALex <alex-93f687@inbox.mailtrap.io>',
        to: `${user.name} <${user.email}>`,
        subject: 'Cadastro usuário',
        html: `Olá, ${user.name}, Bem vindo.`
      });
  },
};
