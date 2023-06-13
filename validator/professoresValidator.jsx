const professoresValidator = {
    nome: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 3,
            message: 'A quantidade de caractetes minima é 3'
        },
        maxLength: {
            value: 100,
            message: 'A quantidade máxima de caracteres é 10'
        }
    },
    cpf: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 11,
            message: 'A quantidade de caracteres máxima é 11'
        },
        min: {
            value: 99999999999,
            message: 'O valor mínimo é 99999999999'
        },

    },
    matricula: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 20,
            message: 'A quantidade máxima de caracteres é 20'
        },
    },

    salario: {
        required: 'O campo é obrigatório',
        min: {
            value: 0,
            message: 'O valor mínimo é 0'
        },
        max: {
            value: 10000,
            message: 'O valor máximo é 10000'
        }
    },
    
    email: {
        required: 'O campo é obrigatório',
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Digite um endereço de e-mail válido'
        },
    },
    telefone: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 8,
            message: 'A quantidade mínima de caracteres é 8'
        },
        maxLength: {
            value: 14,
            message: 'A quantidade máxima de caracteres é 14'
        },
    },
    cep: {
        required: 'O campo é obrigatório',
        pattern: {
            value: /^\d{5}-?\d{3}$/,
            message: 'Digite um CEP válido'
        },
    },
    logradouro: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 50,
            message: 'A quantidade máxima de caracteres é 50'
        },
    },
    complemento: {
        maxLength: {
            value: 50,
            message: 'A quantidade máxima de caracteres é 50'
        },
    },
    numero: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 10,
            message: 'A quantidade máxima de caracteres é 10'
        },
    },
    bairro: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 50,
            message: 'A quantidade máxima de caracteres é 50'
        },
    }
}

export default professoresValidator