import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export const Contactocomponente = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const [inputValue, setInputValue] = useState({
    user_name: "",
    user_email: "",
    asunto: "",
    message: ""
  });

  const handleBlur = (e) => {
    console.log('Evento blur activado');
    const { name, value } = e.target;
    setInputValue(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fy8rz3c', 'template_ec8n3gc', form.current, 'UsP3scySiipuFGoh0')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          setEmailSent(true);
          form.current.reset(); 
      }, (error) => {
          console.log(error.text);
      });
  };

  useEffect(() => {
    const inputs = document.querySelectorAll('.input-field input, .input-field textarea');
    inputs.forEach(input => {
      if(input.value !== "") {
        input.classList.add('has-value');
      } else {
        input.classList.remove('has-value');
      }
    });
  }, [inputValue]);

  return (
    <div className='content'>
        <div className="contact-wrapper">
        {emailSent && <p className='p-enviado'>Email enviado.</p>}
      
        <form ref={form} onSubmit={sendEmail} className='form-contacto'>

        <div class="input-field">
  <input type="text" id="nombre" required onBlur={handleBlur} className='input-contacto' name="user_name"/>
  <label for="nombre" className='nombre'>Nombre</label>
</div>

<div class="input-field">
  <input type="email" id="email" required onBlur={handleBlur} className='input-contacto' name="user_email" />
  <label for="email" className='nombre'>Email</label>
</div>

<div class="input-field">
  <input type="text" id="asunto" required onBlur={handleBlur} className='input-contacto' name="asunto"/>
  <label for="asunto" className='nombre'>Asunto</label>
</div>

<div class="input-field">
  <textarea id="mensaje" required onBlur={handleBlur} className='input-contacto2' name="message"></textarea>
  <label for="mensaje" className='nombre'>Mensaje</label>
</div>

        <p className='block'>
        <button className="btn-contacto" type="submit" value="Send" >ENVIAR</button>
        </p>
        

    </form>
    </div>

    
    </div>
    

   
  );
};
