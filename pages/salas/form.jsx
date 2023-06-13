import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '@/components/Pagina';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {useHistory } from 'react-router-dom';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiOutlineCheck } from 'react-icons/Ai';
import { IoMdArrowRoundBack } from 'react-icons/Io';
import salasValidator from '@/validator/salasValidator';


const form = () => {
    const { push } = useRouter();
    const { register, handleSubmit, formState: { errors },
    } = useForm();

    function salvar(dados) {
        const salas = JSON.parse(window.localStorage.getItem('salas')) || []
        salas.push(dados)
        window.localStorage.setItem('salas', JSON.stringify(salas))
        push('/salas/')
    }

    return (
        <Pagina titulo='cadastrar sala'>
            <Container>

                <Form>

                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control isInvalid={errors.nome} type="text" {...register('nome', salasValidator.nome)} />
                        {errors.nome && <small>{errors.nome.message}</small>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="capacidade">
                        <Form.Label>Capacidade:</Form.Label>
                        <Form.Control isInvalid={errors.capacidade} type="text" {...register('capacidade', salasValidator.capacidade)} />
                        {errors.capacidade && <small>{errors.capacidade.message}</small>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="tipo">
                        <Form.Label>Tipo:</Form.Label>
                        <Form.Control isInvalid={errors.tipo} type="text" {...register('tipo', salasValidator.tipo)} />
                        {errors.tipo && <small>{errors.tipo.message}</small>}
                    </Form.Group>

                    <div className='text-center'>
                        <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1'/>Salvar</Button>
                        <Link href={'/salas'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1'/>Voltar</Link>
                    </div>

                </Form>

            </Container>
        </Pagina>
    )
}

export default form
