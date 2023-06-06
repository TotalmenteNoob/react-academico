import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { Button, Container, Table } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/Ai';
import { HiPencil } from 'react-icons/Hi';
import { AiOutlinePlus } from 'react-icons/Ai';

const index = () => {

    const [salas, setSalas] = useState([])

    useEffect(() => {
        setSalas(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('salas')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const salas = getAll()
            salas.splice(id, 1)
            window.localStorage.setItem('salas', JSON.stringify(salas))
            setSalas(salas)
        }
    }

    return (
        <Pagina titulo='salas'>

            <Container>

                <Link href={'/salas/form'} className="btn btn-primary mb-2"><AiOutlinePlus size={20} className="me-1"/>Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Capacidade</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salas.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link href={'/salas/' + i} ><HiPencil  className='text-primary' size={25}/></Link>
                                    <AiOutlineDelete onClick={() => excluir(i)} className='text-danger ms-2' size={25}/>
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.capacidade}</td>
                                <td>{item.tipo}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Container>



        </Pagina>
    )
}

export default index