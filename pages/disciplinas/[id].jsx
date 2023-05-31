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
            const cursos = JSON.parse(window.localStorage.getItem('cursos'))
            const curso = cursos[query.id]
            
            for(let atributo in curso){
                setValue(atributo, curso[atributo])
            }
        }
            
    }, [query.id])

    function salvar(dados) {
        const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
        cursos.splice(query.id,1,dados)
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

                    <div className='text-center'>
                        <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1'/>Salvar</Button>
                        <Link href={'/cursos'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1'/>Voltar</Link>
                    </div>

                </Form>

            </Container>
        </Pagina>
    )
}

export default form
