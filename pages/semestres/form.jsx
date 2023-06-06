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

const form = () => {

    const { register, handleSubmit } = useForm()
    const { push } = useRouter()

    function salvar(dados) {
        const semestres = JSON.parse(window.localStorage.getItem('semestres')) || []
        semestres.push(dados)
        window.localStorage.setItem('semestres', JSON.stringify(semestres))
        push('/semestres/')
    }

    return (
        <Pagina titulo='cadastrar semestre'>
            <Container>

                <Form>

                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control type="text" {...register('nome')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="dataInicio">
                        <Form.Label>Data de inicio:</Form.Label>
                        <Form.Control type="text" {...register('dataInicio')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="dataFim">
                        <Form.Label>Data do fim:</Form.Label>
                        <Form.Control type="text" {...register('dataFim')} />
                    </Form.Group>

                    <div className='text-center'>
                        <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1'/>Salvar</Button>
                        <Link href={'/semestres'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1'/>Voltar</Link>
                    </div>

                </Form>

            </Container>
        </Pagina>
    )
}

export default form
