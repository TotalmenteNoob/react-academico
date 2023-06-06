import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagina from "@/components/Pagina";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiOutlineCheck } from "react-icons/Ai";
import { IoMdArrowRoundBack } from "react-icons/Io";

const form = () => {
  const { push, query } = useRouter();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (query.id) {
      const professores = JSON.parse(
        window.localStorage.getItem("professores")
      );
      const professor = professores[query.id];

      for (let atributo in professor) {
        setValue(atributo, professor[atributo]);
      }
    }
  }, [query.id]);

  function salvar(dados) {
    const professores =
      JSON.parse(window.localStorage.getItem("professores")) || [];
    professores.splice(query.id, 1, dados);
    window.localStorage.setItem("professores", JSON.stringify(professores));
    push("/professores/");
  }

  return (
    <Pagina titulo="formulários">
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control type="text" {...register("nome")} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="cpf">
            <Form.Label>Cpf:</Form.Label>
            <Form.Control type="text" {...register("cpf")} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="matricula">
            <Form.Label>Matrícula:</Form.Label>
            <Form.Control type="text" {...register("matricula")} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="salario">
            <Form.Label>Salário:</Form.Label>
            <Form.Control type="text" {...register("salario")} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="text" {...register("email")} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="telefone">
            <Form.Label>Telefone:</Form.Label>
            <Form.Control type="text" {...register("telefone")} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="cep">
            <Form.Label>Cep:</Form.Label>
            <Form.Control type="text" {...register("cep")} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="logradouro">
            <Form.Label>Logradouro:</Form.Label>
            <Form.Control type="text" {...register("logradouro")} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="complemento">
            <Form.Label>Complemento:</Form.Label>
            <Form.Control type="text" {...register("complemento")} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="numero">
            <Form.Label>Número:</Form.Label>
            <Form.Control type="text" {...register("numero")} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="bairro">
            <Form.Label>Bairro:</Form.Label>
            <Form.Control type="text" {...register("bairro")} />
          </Form.Group>

          <div className="text-center">
            <Button variant="success" onClick={handleSubmit(salvar)}>
              <AiOutlineCheck className="me-1" />
              Salvar
            </Button>
            <Link href={"/professores"} className="ms-2 btn btn-danger">
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
