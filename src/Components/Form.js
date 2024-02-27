import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/Form.css';
import girl from './Assets/girl.webp';
import linkedin from './Assets/linkedin.png';
import github from './Assets/github.png';
import twitter from './Assets/twitter.png';
import instagram from './Assets/instagram.png';
import youtube from './Assets/youtube.png';

// Note we have used form spree to push requests and all mails are currently receiving to askme.anmol@gmail.com
function Form(){
    return(
        <div className='Form-sec flex' id='contact'>
            <div className='form-div'>
                <p>Drop your Queries Below: </p>
                <br></br>
                <form action='https://formspree.io/f/mvojeozn' method='POST' className='contact-inputs'>
                    <input className='name-btn'
                    type='text'
                    name='username'
                    placeholder='Enter Your Name'
                    autoComplete='off'
                    required
                    />
                    <input className='email-btn'
                    type='email'
                    name='username'
                    placeholder='Enter Your Email'
                    autoComplete='off'
                    required
                    />
                    <textarea className='txt-btn'
                    name='message'
                    placeholder='Enter Your Message....'
                    cols='30'
                    rows='6'
                    autoComplete='off'
                    required>
                    </textarea>
                    <input className='submit-btn'
                    type='submit'
                    value='Submit'
                    />
                </form>
            </div>
            <div className='img-div2'>
                <img src={girl} alt="" className='girl-img'></img>
                <div className='social-icons'>
                    <a href='https://www.linkedin.com/in/anmol-tiwari-0bbb14227/'><img src={linkedin} alt="" className='social-imgs'></img></a>
                    <a href='https://github.com/anmoltiwari0712'><img src={github} alt="" className='social-imgs'></img></a>
                    <a href='https://www.instagram.com/oanmoltiwari7/'><img src={instagram} alt="" className='social-imgs'></img></a>
                    <a href='https://twitter.com/oanmoltiwari7'><img src={twitter} alt="" className='social-imgs'></img></a>
                    <a href='https://www.youtube.com/channel/UCOxXIz9W47IIwGDQb6JEt9w'><img src={youtube} alt="" className='social-imgs'></img></a>
                </div>
                <br></br>
                <p class="txt">© 2023 Anmol Tiwari. All rights reserved.</p>
            </div>
        </div>
    )
}
export default Form;
