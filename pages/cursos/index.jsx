import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { Container, Table } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/Ai';

const index = () => {

    const [cursos, setCursos] = useState([])

    useEffect(()=>{
        setCursos(JSON.parse(window.localStorage.getItem('cursos')) || [])
    }, [])

    return (
        <Pagina titulo='cursos'>

            <Container>

                <Link href={'/cursos/form'} className="btn btn-primary mb-2">Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Duração</th>
                            <th>Modalidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cursos.map(item => (
                            <tr>
                                <td><AiOutlineDelete className='text-danger' /></td>
                                <td>{item.nome}</td>
                                <td>{item.duracao}</td>
                                <td>{item.modalidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Container>



        </Pagina>
    )
}

export default index