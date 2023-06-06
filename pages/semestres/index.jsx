import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { Button, Container, Table } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/Ai';
import { HiPencil } from 'react-icons/Hi';
import { AiOutlinePlus } from 'react-icons/Ai';

const index = () => {

    const [semestres, setSemestres] = useState([])

    useEffect(() => {
        setSemestres(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('semestres')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const semestres = getAll()
            semestres.splice(id, 1)
            window.localStorage.setItem('semestres', JSON.stringify(semestres))
            setSemestres(semestres)
        }
    }

    return (
        <Pagina titulo='semestres'>

            <Container>

                <Link href={'/semestres/form'} className="btn btn-primary mb-2"><AiOutlinePlus size={20} className="me-1"/>Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Data de inicio</th>
                            <th>Data do final</th>
                        </tr>
                    </thead>
                    <tbody>
                        {semestres.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link href={'/semestres/' + i} ><HiPencil  className='text-primary' size={25}/></Link>
                                    <AiOutlineDelete onClick={() => excluir(i)} className='text-danger ms-2' size={25}/>
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.dataInicio}</td>
                                <td>{item.dataFim}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Container>



        </Pagina>
    )
}

export default index