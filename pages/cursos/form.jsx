import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagina from "@/components/Pagina";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiOutlineCheck } from "react-icons/Ai";
import { IoMdArrowRoundBack } from "react-icons/Io";
import cursoValidator from "@/validator/cursoValidator";

const form = () => {
  const { push } = useRouter();
  const { register, handleSubmit, formState: { errors }, } = useForm();

  function salvar(dados) {
    const cursos = JSON.parse(window.localStorage.getItem("cursos")) || [];
    cursos.push(dados);
    window.localStorage.setItem("cursos", JSON.stringify(cursos));
    push("/cursos/");
  }

  return (
    <Pagina titulo="cadastrar curso">
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              isInvalid={errors.nome}
              type="text"
              {...register("nome", cursoValidator.nome)}
            />
            {errors.nome && <small>{errors.nome.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="duracao">
            <Form.Label>Duração:</Form.Label>
            <Form.Control
              isInvalid={errors.duracao}
              type="text"
              {...register("duracao", cursoValidator.duracao)}
            />
            {errors.duracao && <small>{errors.duracao.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="modalidade">
            <Form.Label>Modalidade:</Form.Label>
            <Form.Control
              isInvalid={errors.modalidade}
              type="text"
              {...register("modalidade", cursoValidator.modalidade)}
            />
            {errors.modalidade && <small>{errors.modalidade.message}</small>}
          </Form.Group>

          <div className="text-center">
            <Button variant="success" onClick={handleSubmit(salvar)}>
              <AiOutlineCheck className="me-1" />
              Salvar
            </Button>
            <Link href={"/cursos"} className="ms-2 btn btn-danger">
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
