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
        getAll()
    }, [])

    function getAll(){
        axios.get('/api/disciplinas').then(resultado=>{
            setDisciplinas(resultado.data)
        })
    }

    function excluir(id) {
        if(confirm('Deseja realmente excluir?')){
            axios.delete('/api/disciplinas/' + id)
            getAll()
        }
    }

    return (
        <Pagina titulo='disciplinas'>

            <Container>

                <Link href={'/disciplinas/form'} className="btn btn-primary mb-2"><AiOutlinePlus size={20} className="me-1"/>Novo</Link>

                <Table striped bordered hover className='mb-5'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Curso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {disciplinas.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <Link href={'/disciplinas/' + item.id} ><HiPencil  className='text-primary' size={25}/></Link>
                                    <AiOutlineDelete onClick={() => excluir(item.id)} className='text-danger ms-2' size={25}/>
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.curso}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Container>



        </Pagina>
    )
}

export default index