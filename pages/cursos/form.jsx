import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '@/components/Pagina';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useRouter } from 'next/router';

const form = () => {

    const { register, handleSubmit } = useForm()
    const {push} = useRouter()

    function salvar(dados) {
        const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
        cursos.push(dados)
        window.localStorage.setItem('cursos', JSON.stringify(cursos))
        push('/cursos/')
    }

    return (
        <Pagina titulo='formulários'>
            <Container>

                <Form>

                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control type="text" {...register('nome')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="duracao">
                        <Form.Label>Duração:</Form.Label>
                        <Form.Control type="text" {...register('duracao')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="modalidade">
                        <Form.Label>Modalidade:</Form.Label>
                        <Form.Control type="text" {...register('modalidade')} />
                    </Form.Group>

                    <Button variant="success" onClick={handleSubmit(salvar)}>Salvar</Button>

                </Form>

            </Container>
        </Pagina>
    )
}

export default form
