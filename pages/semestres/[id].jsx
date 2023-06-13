import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '@/components/Pagina';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiOutlineCheck } from 'react-icons/Ai';
import { IoMdArrowRoundBack } from 'react-icons/Io';
import semestresValidator from '@/validator/semestresValidator';

const form = () => {
    const { push, query } = useRouter();
    const { register, handleSubmit, setValue, formState: { errors }, } = useForm();

    useEffect(() => {

        if (query.id) {
            const semestres = JSON.parse(window.localStorage.getItem('semestres'))
            const semestre = semestres[query.id]

            for (let atributo in semestre) {
                setValue(atributo, semestre[atributo])
            }
        }

    }, [query.id])

    function salvar(dados) {
        const semestres = JSON.parse(window.localStorage.getItem('semestres')) || []
        semestres.splice(query.id, 1, dados)
        window.localStorage.setItem('semestres', JSON.stringify(semestres))
        push('/semestres/')
    }

    return (
        <Pagina titulo='formulários'>
            <Container>

                <Form>

                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control isInvalid={errors.nome} type="text" {...register('nome', semestresValidator.nome)} />
                        {errors.nome && <small>{errors.nome.message}</small>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="dataInicio">
                        <Form.Label>Data de inicio:</Form.Label>
                        <Form.Control isInvalid={errors.dataInicio} type="text" {...register('dataInicio', semestresValidator.dataInicio)} />
                        {errors.dataInicio && <small>{errors.dataInicio.message}</small>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="dataFim">
                        <Form.Label>Data do fim:</Form.Label>
                        <Form.Control isInvalid={errors.dataFim} type="text" {...register('dataFim', semestresValidator.dataFim)} />
                        {errors.dataFim && <small>{errors.dataFim.message}</small>}
                    </Form.Group>

                    <div className='text-center'>
                        <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1' />Salvar</Button>
                        <Link href={'/semestres'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1' />Voltar</Link>
                    </div>

                </Form>

            </Container>
        </Pagina>
    )
}

export default form
