import emailjs from 'emailjs-com';


export const  HandleEmail = (Message: HTMLFormElement) => {
    emailjs.sendForm("service_ofib2p9", "template_ay5px0b",Message, "dAZB-7WvMyXopw6Zp").then(
      (result) => {
        console.log('submitted');
      },
      (error) => {
        console.log(error.text);
      }
    );
  };