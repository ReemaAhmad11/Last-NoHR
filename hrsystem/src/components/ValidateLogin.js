const ValidateLogin = (email, password) => {

  let errors={};

  if(!email){
    errors.email="يرجى إدخال الإيميل" 
  } else if(!/\S+@\S+\.\S+/.test(email)){
    errors.email="الإيميل غير صحيح"
  }

  if(!password){
    errors.password="يرجى إدخال كلمة المرور"
  } else if(password.length < 5){
    errors.password="الحد الأدنى ٥ خانات"
  }

  return errors.password || errors.email? errors: null;

}

export default ValidateLogin;