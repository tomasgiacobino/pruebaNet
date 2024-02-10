import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  return (
    <div id='contact' className='divContacto'>
      <p className='txtContactame'>Contactame</p>
      <div className='divContactos'>
          <div className='contactoWpp'>
              <p>Via whatsapp</p>
              <a className='iconoWpp' href='https://wa.me/3874069341?text=Hola me pongo en contacto por los apartments' target='_blank'>
                <WhatsAppIcon></WhatsAppIcon>
              </a>
          </div>
          <div className='contactoMail'>
              <p>Via Mail</p>
              <p>logo de Mail</p>
          </div>
      </div>
    </div>
  )
}

export default Contact