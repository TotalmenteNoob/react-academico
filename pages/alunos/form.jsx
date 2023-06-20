import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagina from "@/components/Pagina";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiOutlineCheck } from "react-icons/Ai";
import { IoMdArrowRoundBack } from "react-icons/Io";
import alunoValidator from "@/validator/alunoValidator";
import { mask } from "remask";

const form = () => {
  const { push } = useRouter();
  const {
    register, setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function salvar(dados) {
    const alunos = JSON.parse(window.localStorage.getItem("alunos")) || [];
    alunos.push(dados);
    window.localStorage.setItem("alunos", JSON.stringify(alunos));
    push("/alunos/");
  }

  function handleChange(event){
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')

    setValue(name, mask(value, mascara))
  }

  return (
    <Pagina titulo="cadastrar alunos">
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control isInvalid={errors.nome} type="text" {...register("nome", alunoValidator.nome)} />
            {errors.nome && <small>{errors.nome.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="cpf">
            <Form.Label>Cpf:</Form.Label>
            <Form.Control mask="999.999.999-99" isInvalid={errors.cpf} type="text" {...register("cpf", alunoValidator.cpf)} onChange={handleChange} />
            {errors.cpf && <small>{errors.cpf.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="matricula">
            <Form.Label>Matrícula:</Form.Label>
            <Form.Control isInvalid={errors.matricula} type="text" {...register("matricula", alunoValidator.matricula)} />
            {errors.matricula && <small>{errors.matricula.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control isInvalid={errors.email} type="text" {...register("email", alunoValidator.email)} />
            {errors.email && <small>{errors.email.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="telefone">
            <Form.Label>Telefone:</Form.Label>
            <Form.Control mask="(99) 9999-9999" isInvalid={errors.telefone} type="text" {...register("telefone", alunoValidator.telefone)} onChange={handleChange} />
            {errors.telefone && <small>{errors.telefone.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="cep">
            <Form.Label>Cep:</Form.Label>
            <Form.Control mask="99999-999" isInvalid={errors.cep} type="text" {...register("cep", alunoValidator.cep)} onChange={handleChange} />
            {errors.cep && <small>{errors.cep.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="logradouro">
            <Form.Label>Logradouro:</Form.Label>
            <Form.Control isInvalid={errors.logradouro} type="text" {...register("logradouro", alunoValidator.logradouro)} />
            {errors.logradouro && <small>{errors.logradouro.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="complemento">
            <Form.Label>Complemento:</Form.Label>
            <Form.Control isInvalid={errors.complemento} type="text" {...register("complemento", alunoValidator.complemento)} />
            {errors.complemento && <small>{errors.complemento.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="numero">
            <Form.Label>Número:</Form.Label>
            <Form.Control isInvalid={errors.numero} type="text" {...register("numero", alunoValidator.numero)} />
            {errors.numero && <small>{errors.numero.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="bairro">
            <Form.Label>Bairro:</Form.Label>
            <Form.Control isInvalid={errors.bairro} type="text" {...register("bairro", alunoValidator.bairro)} />
            {errors.bairro && <small>{errors.bairro.message}</small>}
          </Form.Group>

          <div className="text-center">
            <Button variant="success" onClick={handleSubmit(salvar)}>
              <AiOutlineCheck className="me-1" />
              Salvar
            </Button>
            <Link href={"/alunos"} className="ms-2 btn btn-danger">
              <IoMdArrowRoundBack className="me-1" />
              Voltar
            </Link>
          </div>
        </Form>
      </Container>
    </Pagina>
  );
};

export default form;
