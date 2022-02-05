import * as yup from 'yup';

const inputOutputSchema = yup.object().shape({
    description: yup.string().required('Este campo é obrigatório'),
    values: yup.number().positive().required('Informe o valor.'),
}).required();

export default inputOutputSchema