import './Inputs.css';

function Inputs(){

    function handleSubmit(event){
        event.preventDefault();
        const input_email = document.getElementById('email_input');
        const email_invalid = document.getElementById('email_invalid');
        let value = input_email.value;

        if (value === '' || (value.includes('@') === false && value.includes('.') === false)){
            input_email.classList.add('validation_empty');
            email_invalid.style.visibility = 'visible';
            input_email.value = 'example@email.com';
        }else{
            input_email.classList.remove('validation_empty');
            email_invalid.style.visibility = 'hidden';
        }
    }

    function handletxt(){
        const input_txt = document.getElementById('email_input');
        input_txt.value = '';
    }

    return(
        <div className="Inputs_container">
            <form onSubmit={handleSubmit} className='form_container'>
                <div className="input_container_validation">
                    <input 
                    onFocus={handletxt}
                    className='input_txt input_container' 
                    type="text" 
                    name="email_address" 
                    id="email_input" 
                    placeholder="Your email address..."/>

                    <span id='email_invalid' className='email_invalid'>Please provide a valid email address</span>
                </div>
                
                <input 
                className="button"
                type="submit" 
                id="button"
                value="Notify Me" />

            </form>
            
        </div>
    );
}

export default Inputs;