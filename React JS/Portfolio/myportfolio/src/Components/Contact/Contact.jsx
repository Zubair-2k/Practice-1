import {useState} from 'react'
import "./Contact.css"

const Contact = () => {

  const [message, setMessage] = useState({name:"",email:"",feedback:""});
  const [emailStatus, setEmailStatus] = useState("");

  const handleFormChange = (e)=>{
    let {name,value} = e.target
    setMessage({...message,[name]:value})

    if (name === "email") {
      if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value)) {
        setEmailStatus("Please enter a valid Email address");
      } 
      else {
        setEmailStatus("");
      }
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(message.name === "" || message.email === "" || message.feedback === "") return;

    const formData = new FormData(e.target);
    console.log(formData)
    console.log(message)

    const response = await fetch(`https://formspree.io/f/${process.env.REACT_APP_FORM_ID}`, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    console.log(response)

    if (response.ok) {
      alert("Message sent successfully!");
      setMessage({ name: "", email: "", message: "" }); // resets state
      e.target.reset(); // clears uncontrolled inputs
    } else {
      alert("Oops! There was a problem.");
    }

    console.log(message)
    console.log(formData)
  };

  return (
    <>
      <section className='contact' id='contactPage'>
          <h1 className='contact_heading'>My Contact</h1>
          <div className="contact_container">
              <div className="get_in_touch">
                <h1>Get in Touch</h1>
                <p>Feel free to drop us a line below !</p>
                  
                <form className="get_in_touch_form" onSubmit={handleSubmit}>
                 
                  <input type='text'
                  name='name'
                  placeholder='Your Name'
                  value={message.name}
                  onChange={handleFormChange}
                  autoComplete='true'
                  required/>

                  <input 
                  type='email' 
                  name='email' 
                  placeholder='Your Email'
                  value={message.email}
                  onChange={handleFormChange}
                  autoComplete='true' 
                  required/>

                  {emailStatus && <p style={{color:"red"}}>{emailStatus}</p>}
                  
                  <textarea 
                  name='feedback'
                  placeholder='Typing your message here...' 
                  value={message.feedback}
                  onChange={handleFormChange}
                  required/>
                  
                  {!emailStatus && <button className='send_contact'>Send</button>}
                  
                </form>

              </div>

              <div className="contactUs_page">
                <h3>Contact Us</h3>
                  
                <div className="contact_details">
                  <div className="contact_detail contact_address">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>Erode</p>
                  </div>

                  <div className="contact_detail contact_email">
                    <i class="fa-solid fa-envelope"></i>
                    <p>zubairarif2k@gmail.com</p>
                  </div>

                  <div className="contact_detail contact_phone">
                    <i class="fa-solid fa-phone"></i>
                    <p>+91 6374232052</p>
                  </div>

                  <div className="contact_detail contact_github">
                    <i class="fa-brands fa-github"></i>
                    <p>www.github.com</p>
                  </div>

                </div>

              </div>

            </div>

        </section>
      
        
      
    </>
  )
}

export default Contact;