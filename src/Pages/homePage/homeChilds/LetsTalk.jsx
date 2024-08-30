import React from 'react'


function LetsTalk() {
  return (
    <div id='LetsTalk' className='LetsTalk'> 
    <div className="container"> 
        <div className="my-container"> 
            <h1> I'm Just a Click Away </h1>
            <p> 
            I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to chat about design, feel free to drop me a message
            </p>

            <form action="/action_page.php">

                <input type="text" id="fname" name="fname"  placeholder='Your Name' /> <br />

                <input type="email" id="email" name="email" placeholder='Your Email address' /> <br />        

                <input type="text" id="subject" name="subject" placeholder='Subject' /> <br /> 
        
                
                <textarea id="message"  name="message" rows="4" cols="50" placeholder='Message'>
                </textarea>
            
                <input type="submit" defaultValue="Submit" /> 
            </form>


        </div>
    </div>
    </div>
  )
}

export default LetsTalk