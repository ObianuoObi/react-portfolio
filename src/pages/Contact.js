import { useState } from "react";

const styles = {
    header: {
        textAlign: 'center',
        margin: '20px 0'
    },

    submitBtn: {
       backgroundColor: 'lightseagreen',
       color: '#fff',
       cursor: 'pointer'
    }
};

function Contact () {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        meaasge: ''
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData);

    };

    return (
    <> 
    <h1 style={styles.header}>Contact</h1>

    <form onSubmit={handleSubmit}>
        <input name= "name "onChange= {handleChange} type='text' placeholder="Enter your Name"/>
        <input name= "email "onChange={handleChange} type='text' placeholder="Enter your Email Address"/>
        <textarea name= "messasge "onChange={handleChange} placeholder="Enter your message..." cols= "30" rows= "10"></textarea>
        <button style= {styles.submitBtn}>Submit</button>
    </form>
    </>
          
    )
}

export default Contact;