import * as yup from 'yup';

const inputOutputSchema = yup.object().shape({
    description: yup.string().required('Este campo é obrigatório'),
    values: yup.number().typeError('Por favor adicione um número válido').test(
        "maxDigitsAfterDecimal",
        "O valor deve conter no máximo 2 dígitos após a vírgula",
        (number) => /^\d+(\.\d{1,2})?$/.test(number)).positive()
            .required('Informe o valor.'),
}).required();

export default inputOutputSchema