import * as yup from "yup";
const validation = yup.object({
  email: yup
    .string()
    .email("Geçerli bir email girin.")
    .required("Zorunlu Alan"),
  password: yup
    .string()
    .min(5, "parolanız en az 5 karakter olmalıdır.")
    .required("Zorunlu Alan"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Parolalar uyuşmuyor.")
    .required("Zorunlu Alan"), // required input boş olduğunda göndermemesini sağlıyor.
});

export default validation;
