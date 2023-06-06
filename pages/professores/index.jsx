import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { Button, Container, Table } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/Ai';
import { HiPencil } from 'react-icons/Hi';
import { AiOutlinePlus } from 'react-icons/Ai';

const index = () => {

    const [professores, setProfessores] = useState([])

    useEffect(() => {
        setProfessores(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('professores')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const professores = getAll()
            professores.splice(id, 1)
            window.localStorage.setItem('professores', JSON.stringify(professores))
            setProfessores(professores)
        }
    }

    return (
        <Pagina titulo='professores'>

            <Container>

                <Link href={'/professores/form'} className="btn btn-primary mb-2"><AiOutlinePlus size={20} className="me-1"/>Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Cpf</th>
                            <th>Matrícula</th>
                            <th>Salário</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Cep</th>
                            <th>Logradouro</th>
                            <th>Complemento</th>
                            <th>Número</th>
                            <th>Bairro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {professores.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link href={'/professores/' + i} ><HiPencil  className='text-primary' size={25}/></Link>
                                    <AiOutlineDelete onClick={() => excluir(i)} className='text-danger ms-2' size={25}/>
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.cpf}</td>
                                <td>{item.matricula}</td>
                                <td>{item.salario}</td>
                                <td>{item.email}</td>
                                <td>{item.telefone}</td>
                                <td>{item.cep}</td>
                                <td>{item.logradouro}</td>
                                <td>{item.complemento}</td>
                                <td>{item.numero}</td>
                                <td>{item.bairro}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Container>



        </Pagina>
    )
}

export default index