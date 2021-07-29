
const Validation = (values) => {
    let errors={};
  
    if(!values.fullname){
        errors.fullname="Name is required."
    }
    if(!values.lastname){
        errors.lastname="Surname is required."
    }
    if(!values.designation){
        errors.designation="Designation is required."
    }
    if(!values.email){
        errors.email="Email is required."
    }
    if(!values.password){
        errors.password="Password is required."
    }else if(values.password.length < 5){
        errors.password="Password must be more than 5 charachters."
    }
 
    return errors;
};

export default Validation
