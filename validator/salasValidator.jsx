const salasValidator = {
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
    capacidade: {
        required: 'O campo é obrigatório',
        min: {
            value: 1,
            message: 'A capacidade mínima é 1'
        },
        max: {
            value: 1000,
            message: 'A capacidade máxima é 1000'
        }
    },
    tipo: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 20,
            message: 'A quantidade máxima de caracteres é 20'
        }
    }
};

export default salasValidator