require("dotenv").config();

const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const genearteToken = async (user) => {
  return jwt.sign(
    {
      name: user.name,
      email: user.email,
    },
    process.env.ACCESSS_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

const sendEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: [req.body.email],
    // dusty mail "dustyarcher@yahoo.com"
    subject: "Dosh Capital",
    html: `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;" />
    <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet" />
    <!-- <link href="https://fonts.cdnfonts.com/css/helvetica-neue-55" rel="stylesheet"> -->
    <title>Doscapital Mail</title>
  </head>
  <body
    style="
      margin: 0;
      padding: 0;
      outline: 0;
      font-family: 'Helvetica Neue', sans-serif;
    ">
    <div style="width: 420px; padding: 20px; border: 1px solid gray; border-radius: 15px; margin: 0 auto">
      <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        width="100%"
        >
        <tr>
          <td colspan="12" width="100%" vertical-align="middle">
            <tr>
              <!-- logo -->
              <td
                colspan="10"
                width="100%"
                style="border-bottom: 1px solid #ceab8e">
                <p style="font-weight: 300; margin: 0; padding: 0">
                  Enjoy Automated Trading
                </p>
                <p style="font-weight: 300; margin: 0; padding: 0">
                  Like Never Before
                </p>
              </td>
              <!-- logo end -->
              <!-- top contact info -->
              <td
                colspan="2"
                width="100%"
                style="
                  border-bottom: 1px solid #c1c3c3;
                  padding-top: 20px;
                  padding-bottom: 20px;
                ">
                <span
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    justify-content: end;
                    margin: 0;
                  ">
                  <span>
                    <!-- phone -->
                    <p
                      style="
                        margin: 0;
                        margin-bottom: 5px;
                        padding: 0;
                        display: flex;
                        align-items: center;
                      ">
                      <a
                        href="https://doshcapital.com.au/"
                        style="
                          display: flex;
                          align-items: center;
                          gap: 10px;
                          text-decoration: none;
                          justify-content: start;
                          font-size: 18px;
                          font-weight: 700;
                          color: #696969;
                          font-family: 'Inter', sans-serif;
                        ">
                        <span> DoshCapital.com.au </span>
                      </a>
                    </p>
                    <!-- phone end -->
                    <!-- web -->
                    <p
                      style="
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: end;
                        align-items: center;
                      ">
                      <a
                        style="
                          display: flex;
                          align-items: center;
                          gap: 10px;
                          text-decoration: none;
                          justify-content: start;
                          font-size: 12px;
                          font-weight: 400;
                          color: #075759;
                          font-family: 'Inter', sans-serif;
                        ">
                        <span
                          style="
                            color: #000;
                            font-family: 'Inter', sans-serif;
                            font-size: 16px;
                          ">
                          Invest Smart
                        </span>
                      </a>
                    </p>
                    <!-- web end -->
                  </span>
                </span>
              </td>
              <!-- top contact info -/end -->
            </tr>
          </td>
        </tr>
        <!-- message -->
        <tr>
          <td colspan="12" width="100%">
            <p
              style="
                font-size: 16px;
                font-weight: 500;
                line-height: 20px;
                padding: 0;
                margin: 10px 0;
                text-align: center;
                font-weight: 700;
              ">
              Dear ${req.body.firstName}
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="12" width="100%">
            <p
              style="
                padding: 0;
                margin: 0;
                margin-bottom: 15px;
                font-size: 14px;
                line-height: 22px;
                font-weight: 400;
                color: #363636;
                font-family: 'Inter', sans-serif;
                text-align: center;
                font-weight: 500;
              ">
              Please Confirm Your Email Address
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="12" width="100%" style="text-align: center">
            <a
              style="
                display: inline-block;
                font-size: 14px;
                text-decoration: none;
                font-weight: 500;
                color: white;
                background-color: #a13bb6;
                padding: 8px 40px;
                border-radius: 30px;
                cursor: pointer;
                border: none;
                width: 180px;
              "
              href="https://doshcapital.com.au/?email=${req.body.email}">
              CONFIRM EMAIL
            </a>
          </td>
        </tr>
        <tr>
          <td colspan="12" width="100%">
            <p
              style="
                padding: 0;
                margin: 0;
                margin-bottom: 40px;
                font-size: 14px;
                line-height: 22px;
                font-weight: 400;
                color: #363636;
                font-family: 'Inter', sans-serif;
                text-align: center;
              ">
              Click on the button or copy the link on your browser
              <a href="https://doshcapital.com.au/?email=${req.body.email}" style="color: #ceab8e">
              https://doshcapital.com.au/?email=${req.body.email}</a>
              to confirm your email
            </p>
          </td>
        </tr>
        <tr>
          <td
            colspan="12"
            width="100%"
            style="border-bottom: 1px solid #ceab8e">
            <p
              style="
                padding: 0;
                margin: 0;
                margin-bottom: 40px;
                font-size: 14px;
                line-height: 22px;
                font-weight: 400;
                color: #363636;
                font-family: 'Inter', sans-serif;
                text-align: center;
              ">
              Thank you and welcome
              <span style="font-weight: bold">DoshCapital</span>
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="0" style="padding-bottom: 10px; padding-top: 20px">
            <img src="https://i.postimg.cc/5NZP7chS/image-2.png" alt="" />
          </td>
          <td colspan="6" style="padding-bottom: 10px; padding-top: 20px">
            <p style="margin: 0; padding: 0">Best wishes from Dusty</p>
            <p
              style="
                margin: 0;
                padding: 0;
                font-size: 21px;
                font-weight: 700;
                text-decoration: none;
              ">
              <a
                href="mailto: doshcapital.com.au"
                style="text-decoration: none; color: #464646">
                DoshCapital.com.au
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td
            colspan="12"
            width="100%"
            style="
              text-align: center;
              padding-top: 20px 0;
              padding-bottom: 15px;
            ">
            Connect with us
          </td>
        </tr>
        <tr>
          <td colspan="12" width="100%">
            <p style="text-align: center; margin: 0; padding: 0">
              <a href="#" style="width: 30px">
                <img
                  style="width: 30px"
                  src="https://i.postimg.cc/sDYZNcJq/face.png"
                  alt="" />
              </a>
              <a href="#" style="width: 30px">
                <img
                  style="width: 30px"
                  src="https://i.postimg.cc/qvQ6kvSG/linkedin.png"
                  alt="" />
              </a>
              <a href="#" style="width: 30px">
                <img
                  style="width: 30px"
                  src="https://i.postimg.cc/BnJ19KY6/twitter.png"
                  alt="" />
              </a>
              <a href="#" style="width: 30px">
                <img
                  style="width: 30px"
                  src="https://i.postimg.cc/PJsvSSN3/instagram.png"
                  alt="" />
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td
            colspan="12"
            width="100%"
            style="padding: 20px; text-align: center">
            <a style="margin-right: 10px; font-weight: bold"
              >DoshCapital.com.au</a
            >
            <a style="margin-right: 10px">Terms and conditon</a>
            <a style="margin-right: 10px">Unsubscibe</a>
          </td>
        </tr>
        <tr>
          <td colspan="12" width="100%">
            <p
              style="
                border: 1px solid gray;
                border-radius: 8px;
                padding: 20px;
                color: #696969;
                line-height: 30px;
              ">
              CFDs are complex leveraged instruments and come with a high risk
              of losing money. These products are not suitable for everyone and
              you should therefore consider your objectives, financial
              situation, needs and experience with these products before
              investing in them. Our Product Disclosure Statement (PDS) and
              Target Market Determination provides important information about
              our products and who our products are more likely to be suited to.
              Capital.com does not provide investment advice and you should seek
              independent advice if you are unsure of the risks or whether our
              products are suitable for you. Capital Com Australia Pty Ltd (ABN
              47 625 601 489) is a company incorporated in Australia and
              regulated by the Australian Securities and Investments Commission
              (AFSL 513393). Our offices are located at Level 34, 120 Collins
              Street, Melbourne, 3000.
            </p>
          </td>
        </tr>
        <tr>
          <td
            colspan="12"
            width="100%"
            style="text-align: center; text-decoration: none">
            © 2022
            <a
              href="mailto: doshcapital.com.au"
              style="text-decoration: none; color: #000"
              >DoshCapital.com.au</a
            >
            | 7.2302.01
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (!req.body.email) {
      return res.status(500).send({
        message: "Please put a valid email",
      });
    }
    if (error) {
      console.log(error);
    } else {
      return res.status(200).send({
        message: "Email sent successfully!",
        status: 200,
      });
    }
  });
};

module.exports = {
  genearteToken,
  sendEmail,
};
