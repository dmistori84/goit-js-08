import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const formData = {};
const STORAGE_KEY = 'feedback-form-state';

onPageLoad();

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit)

function onFormInput(e) { 
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(e) { 
    e.preventDefault();
    
    const savedOfForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
        
    if (savedOfForm === null) { 
        return
    };
    
    console.log('данные ', savedOfForm);
    console.log('email', savedOfForm.email);
    console.log('message', savedOfForm.message);

    localStorage.removeItem(STORAGE_KEY);
    e.currentTarget.reset();
};

function onPageLoad() { 
    const savedOfForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    if (savedOfForm === null) { 
        return
    };
        
    formRef.elements.email.value = savedOfForm.email;
    formRef.elements.message.value = savedOfForm.message;   
};