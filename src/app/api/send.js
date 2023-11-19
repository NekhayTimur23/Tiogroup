import nodemailer from 'nodemailer';

export default async function handler(req, res) {


  const triogroupcom = "grupp.trio@bk.ru"
  const YnfjNHGjr454gfbg4 = "AUhFe3vzWrLDQukTxg8T"

  if (req.method === 'POST') {
    const { name, email, phone } = req.body;

    // Создайте транспорт Nodemailer с использованием SMTP транспорта
    let transporter = nodemailer.createTransport({
      host: "smtp.mail.ru", // SMTP сервер вашего почтового провайдера
      port: 465, // Порт, обычно 587 для защищенного соединения
      secure: true, // true для 465 порта, false для других портов
      auth: {
        user: triogroupcom, // ваша почта
        pass: YnfjNHGjr454gfbg4 // ваш пароль
      }
    });

    // Определите параметры письма
    let mailOptions = {
      from: `"Форма обратной связи" ${triogroupcom}`, // адрес отправителя
      to: triogroupcom, // список получателей
      subject: 'Новая заявка с сайта', // Тема письма
      text: `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone}`, // текст письма
      html: `<p>Имя: ${name}</p><p>Email: ${email}</p><p>Телефон: ${phone}</p>` // html тело письма
    };

    // Отправляем письмо
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).json({ status: 'Error', message: 'Ошибка при отправке письма' });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({ status: 'Success', message: 'Письмо успешно отправлено' });
      }
    });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}