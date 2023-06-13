const semestresValidator = {
    nome: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 3,
            message: 'A quantidade mínima de caracteres é 3'
        },
        maxLength: {
            value: 50,
            message: 'A quantidade máxima de caracteres é 50'
        }
    },
    dataInicio: {
        required: 'O campo é obrigatório',
        pattern: {
            value: /^\d{2}\/\d{2}\/\d{4}$/,
            message: 'Digite uma data no formato DD/MM/YYYY'
        }
    },
    dataFim: {
        required: 'O campo é obrigatório',
        pattern: {
            value: /^\d{2}\/\d{2}\/\d{4}$/,
            message: 'Digite uma data no formato DD/MM/YYYY'
        }
    }
};

export default semestresValidator;
