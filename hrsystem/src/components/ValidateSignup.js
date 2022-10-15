const ValidateSignup = (name, phoneNum, email, password) => {

  let errors={};

  if(!name){
    errors.name="الإسم مطلوب"
  }

  if(!phoneNum){
    errors.phoneNum="رقم الجوال مطلوب"
  } else if(phoneNum.length != 10){
    errors.phoneNum="الحد المسموح ١٠ أرقام"
  }

  if(!email){
    errors.email="يرجى إدخال الإيميل" 
  } else if(!/\S+@\S+\.\S+/.test(email)){
    errors.email="الإيميل غير صحيح"
  }

  if(!password){
    errors.password="يرجى إدخال كلمة المرور"
  } else if(password.length < 5){
    errors.password="الحد الأدنى خمسة خانات"
  }

  return errors.password || errors.email? errors: null;

}

export default ValidateSignup;