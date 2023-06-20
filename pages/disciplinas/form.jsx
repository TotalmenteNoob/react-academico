import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '@/components/Pagina';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiOutlineCheck } from 'react-icons/Ai';
import { IoMdArrowRoundBack } from 'react-icons/Io';
import axios from 'axios';
import disciplinasValidator from '@/validator/disciplinasValidator';
import { mask } from 'remask';


const form = () => {
    const { push } = useRouter();
    const { register, handleSubmit, formState: { errors }, } = useForm();

    function salvar(dados) {
        axios.post('/api/disciplinas', dados)
        push('/disciplinas')
    }

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(value, mascara))
    }

    return (
        <Pagina titulo='cadastrar disciplina'>
            <Container>

                <Form>
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control isInvalid={errors.nome} type="text" {...register("nome", disciplinasValidator.nome)} />
                        {errors.nome && <small>{errors.nome.message}</small>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="curso">
                        <Form.Label>Curso:</Form.Label>
                        <Form.Control isInvalid={errors.curso} type="text" {...register('curso', disciplinasValidator.curso)} />
                        {errors.curso && <small>{errors.curso.message}</small>}
                    </Form.Group>

                    <div className='text-center'>
                        <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1' />Salvar</Button>
                        <Link href={'/disciplinas'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1' />Voltar</Link>
                    </div>
                </Form>

            </Container>
        </Pagina>
    )
}

export default form
