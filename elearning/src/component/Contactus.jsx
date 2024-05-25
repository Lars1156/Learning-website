import React,{useState} from "react";
import '../css file/contact.css';
export function Contactus(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message , setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState('');

  const handleSubmitted = (event) =>{
    event.preventDefalut();
    
    console.log("From is Submitted: ",{name,email,message});
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitted(true);
  };

  return(
         <section className="contact-us">
            <div className="container">
                <h2>Contact-us</h2>
                <p>Have any questions or feedback? Feel free to reach out!</p>
                <from onSubmit = {handleSubmitted}>
                    <div className="from-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} required placeholder="Enter fullname"/>  
                    </div>
                    <div className="from-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"value={email} onChange={(e)=>setEmail(e.target.value)}required placeholder="Enter Your email" />
                    </div>
                    <div className="from-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" value={message} onChange={(e)=>setMessage(e.target.value)} required/>
                    </div>
                    <button type="submit">Send-Message</button>
                </from>
                {isSubmitted &&(<p className="success-message">
                    Thank You for Your message! We'll get back to soon
                </p>)}
            </div>
         </section>
  )
}