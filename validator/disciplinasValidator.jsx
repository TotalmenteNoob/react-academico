const disciplinasValidator = {
    nome: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 3,
            message: 'A quantidade de caractetes minima é 3'
        },
        maxLength: {
            value: 100,
            message: 'A quantidade máxima de caracteres é 100'
        }
    },
    curso: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 3,
            message: 'A quantidade de caractetes minima é 3'
        },
        maxLength: {
            value: 100,
            message: 'A quantidade máxima de caracteres é 100'
        }
    },

}

export default disciplinasValidator