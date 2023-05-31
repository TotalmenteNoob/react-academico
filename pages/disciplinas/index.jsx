import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { Button, Container, Table } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/Ai';
import { HiPencil } from 'react-icons/Hi';
import { AiOutlinePlus } from 'react-icons/Ai';
import axios from 'axios';

const index = () => {

    const [disciplinas, setDisciplinas] = useState([])

    useEffect(() => {
        axios.get('/api/disciplinas').then(resultado=>{
            setDisciplinas(resultado.data)
        })
    }, [])

    return (
        <Pagina titulo='disciplinas'>

            <Container>

                <Link href={'/disciplinas/form'} className="btn btn-primary mb-2"><AiOutlinePlus size={20} className="me-1"/>Novo</Link>

                <Table striped bordered hover className='mb-5'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Duração</th>
                            <th>Modalidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {disciplinas.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link href={'/disciplinas/' + i} ><HiPencil  className='text-primary' size={25}/></Link>
                                    <AiOutlineDelete onClick={() => excluir(i)} className='text-danger ms-2' size={25}/>
                                </td>
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