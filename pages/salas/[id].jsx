import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '@/components/Pagina';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiOutlineCheck } from 'react-icons/Ai';
import { IoMdArrowRoundBack } from 'react-icons/Io';

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {

        if (query.id) {
            const salas = JSON.parse(window.localStorage.getItem('salas'))
            const sala = salas[query.id]
            
            for(let atributo in sala){
                setValue(atributo, sala[atributo])
            }
        }
            
    }, [query.id])

    function salvar(dados) {
        const salas = JSON.parse(window.localStorage.getItem('salas')) || []
        salas.splice(query.id,1,dados)
        window.localStorage.setItem('salas', JSON.stringify(salas))
        push('/salas/')
    }

    return (
        <Pagina titulo='formulários'>
            <Container>

                <Form>

                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control type="text" {...register('nome')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="capacidade">
                        <Form.Label>Capacidade:</Form.Label>
                        <Form.Control type="text" {...register('capacidade')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="tipo">
                        <Form.Label>Tipo:</Form.Label>
                        <Form.Control type="text" {...register('tipo')} />
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
