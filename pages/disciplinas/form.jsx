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
import axios from 'axios';

const form = () => {

    const { register, handleSubmit } = useForm()
    const { push } = useRouter()

    function salvar(dados) {
        axios.post('/api/disciplinas', dados)
    }

    return (
        <Pagina titulo='cadastrar disciplina'>
            <Container>

                <Form>
                    
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control type="text" {...register('nome')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="curso">
                        <Form.Label>Curso:</Form.Label>
                        <Form.Control type="text" {...register('curso')} />
                    </Form.Group>

                    <div className='text-center'>
                        <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1'/>Salvar</Button>
                        <Link href={'/disciplinas'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1'/>Voltar</Link>
                    </div>

                </Form>

            </Container>
        </Pagina>
    )
}

export default form
