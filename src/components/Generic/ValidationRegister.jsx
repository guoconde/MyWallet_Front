import * as yup from 'yup';

const signUpSchema = yup.object().shape({
    name: yup.string().required('Nome é um campo obrigatório.'),
    email: yup.string().email('Por favor adicione um email válido.').required('Email é um campo obrigatório.'),
    password: yup.string()
        // .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, 'A senha precisa conter no mínimo 8 digitos, caracteres maiúsculo, minúsculo e especial')
        .required('Senha é um campo obrigatório.'),
    confirmPassword: yup.string().required('A confirmação de senha é um campo obrigatório.'),
}).required();

export default signUpSchema