import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagina from "@/components/Pagina";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiOutlineCheck } from "react-icons/Ai";
import { IoMdArrowRoundBack } from "react-icons/Io";
import professoresValidator from "@/validator/professoresValidator";
import { mask } from "remask";

const form = () => {
  const { push, query } = useRouter();
  const { register, handleSubmit, setValue, formState: { errors }, } = useForm();

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

  function gerarMascara(campo) {
    const mascaras = {
      cpf: "999.999.999-99",
      telefone: "(99) 9999-9999",
      cep: "99999-999",
      // Adicione outras máscaras aqui, se necessário
    };

    return mascaras[campo] || "";
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const mascara = gerarMascara(name);

    setValue(name, mask(value, mascara));
  }


  return (
    <Pagina titulo='cadastrar professor'>
      <Container>

        <Form>

          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control isInvalid={errors.nome} type="text" {...register("nome", professoresValidator.nome)} />
            {errors.nome && <small>{errors.nome.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="cpf">
            <Form.Label>Cpf:</Form.Label>
            <Form.Control isInvalid={errors.cpf} type="text" {...register("cpf", professoresValidator.cpf)} onChange={handleChange} />
            {errors.cpf && <small>{errors.cpf.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="matricula">
            <Form.Label>Matrícula:</Form.Label>
            <Form.Control isInvalid={errors.matricula} type="text" {...register("matricula", professoresValidator.matricula)} />
            {errors.matricula && <small>{errors.matricula.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="salario">
            <Form.Label>Salário:</Form.Label>
            <Form.Control isInvalid={errors.salario} type="text" {...register('salario', professoresValidator.salario)} />
            {errors.salario && <small>{errors.salario.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control isInvalid={errors.email} type="text" {...register("email", professoresValidator.email)} />
            {errors.email && <small>{errors.email.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="telefone">
            <Form.Label>Telefone:</Form.Label>
            <Form.Control isInvalid={errors.telefone} type="text" {...register("telefone", professoresValidator.telefone)} onChange={handleChange} />
            {errors.telefone && <small>{errors.telefone.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="cep">
            <Form.Label>Cep:</Form.Label>
            <Form.Control isInvalid={errors.cep} type="text" {...register("cep", professoresValidator.cep)} onChange={handleChange} />
            {errors.cep && <small>{errors.cep.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="logradouro">
            <Form.Label>Logradouro:</Form.Label>
            <Form.Control isInvalid={errors.logradouro} type="text" {...register("logradouro", professoresValidator.logradouro)} />
            {errors.logradouro && <small>{errors.logradouro.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="complemento">
            <Form.Label>Complemento:</Form.Label>
            <Form.Control isInvalid={errors.complemento} type="text" {...register("complemento", professoresValidator.complemento)} />
            {errors.complemento && <small>{errors.complemento.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="numero">
            <Form.Label>Número:</Form.Label>
            <Form.Control isInvalid={errors.numero} type="text" {...register("numero", professoresValidator.numero)} />
            {errors.numero && <small>{errors.numero.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="bairro">
            <Form.Label>Bairro:</Form.Label>
            <Form.Control isInvalid={errors.bairro} type="text" {...register("bairro", professoresValidator.bairro)} />
            {errors.bairro && <small>{errors.bairro.message}</small>}
          </Form.Group>


          <div className='text-center'>
            <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1' />Salvar</Button>
            <Link href={'/professores'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1' />Voltar</Link>
          </div>

        </Form>

      </Container>
    </Pagina>
  )
}

export default form;
