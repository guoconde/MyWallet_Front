import * as yup from "yup";

const loginSchema = yup.object().shape({
    email: yup.string().email('Por favor adicione um email válido.').required('Email é um campo obrigatório.'),
    password: yup.string().required('Senha é um campo obrigatório.'),
}).required();

export default loginSchema