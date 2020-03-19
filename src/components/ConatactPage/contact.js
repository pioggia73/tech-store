import React from 'react';
import Title from '../Title';

export default function Contact () {
    
    return <section className = "py-5">
        <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
            <Title  title = "contact us"/>
                <form 
                action="https://formspree.io/webdevelopermonika@gmail.com" 
                method = "POST" 
                className = "mt-5">

                    {/* FIRST */}

                    <div className="form-group">
                        <input 
                        type="text"  
                        name = "firstName" 
                        className = "form-control" 
                        placeholder = "John Smith"
                        />
                    </div>

                    {/* EMAIL */ }

                    <div className = "form-group">
                        <input
                        type = "email"
                        name = "email"
                        className = "form-control"
                        placeholder = "email@email.com"
                        />
                    </div>

                    {/* SUBJECT */ }

                    <div className = "form-group">
                        <input
                        type = "text"
                        name = "subject"
                        className = "form-control"
                        placeholder = "important!!!!" 
                        />
                    </div>

                    {/* MESSAGE */}

                    <div className="form-group">
                        <textarea 
                        name="message" 
                        className = "form-control" 
                        row = "10"
                        placeholder = "Hello there!!!"
                        />
                    </div>
                    {/* SUBMIT  */}
                    <div className="form-group mt-3">
                    <input 
                    type="submit" 
                    value = "Send" 
                    className = "form-control bg-primary text-white" 
                    />
                    </div>

                </form>
            </div>
        </div>
    
    
    </section>
    
}
