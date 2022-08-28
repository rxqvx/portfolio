import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Formik, Field, Form } from "formik";
import {
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { TextH1 } from "../../styles/styled";
import { FormValues, FormItems } from "./interface.types";

const Contact = () => {
  const form = useRef();
  const [isError, setIsError] = React.useState<boolean>();
  const [message, setMessage] = React.useState<string>("");
  const [emailValues, setEmailValues] = React.useState<FormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const formValues: FormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "messageEmail",
        "template_1k9pd4c",
        // e.target,
        form.current,
        "oMfwLS1G0bSz4VBsv"
      )
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso!");
          setMessage("Mensagem enviada com sucesso!");
          setIsError(false);
          console.log("mensagem enviada:", result.text);
        },
        (error) => {
          alert("Erro não foi possível enviar a mensagem");
          setMessage("Erro não foi possível enviar a mensagem");
          setIsError(true);
          console.log("error.message:", error.message);
          console.log("error.text:", error.text);
        }
      );
    if (isError) return;
    setEmailValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    e.target.reset();
  };

  const validateSubject = () => {
    return <></>;
  };
  const validateEmail = () => {
    return <></>;
  };

  function validateName(value) {
    let error;
    if (!value) {
      error = "Insira um nome";
    } else if (value.length > 2) {
      error = "Insira um nome válido 😱";
    }
    return error;
  }

  const formItems: FormItems = [
    {
      name: "name",
      placeholder: "Nome",
      type: "text",
      validate: validateName,
      emailValue: emailValues.name,
    },
    {
      name: "email",
      placeholder: "Email",
      type: "email",
      validate: validateEmail,
      emailValue: emailValues.email,
    },
    {
      name: "subject",
      placeholder: "Assunto",
      type: "text",
      validate: validateSubject,
      emailValue: emailValues.subject,
    },
  ];

  const handleInput = (e) => {
    setEmailValues({ ...emailValues, [e.target.name]: e.target.value });
    return;
  };
  const handleMessage = () => {
    if (isError)
      return (
        <Text color="#FF9494" fontWeight="bold">
          {message}
        </Text>
      );
    return (
      <Text color="#4BB543" fontWeight="bold">
        {message}
      </Text>
    );
  };

  return (
    <>
      <Flex flexDir="column" padding="3rem" backgroundColor="#1c0057">
        <TextH1
          paddingLeftDisabled
          style={{ alignSelf: "center", padding: 10, paddingLeft: 0 }}
        >
          Contato
        </TextH1>
        <Flex
          borderRadius="10px"
          boxShadow="box-shadow: 0 0 1em #000;"
          padding="3em"
          width="45%"
          alignSelf="center"
          backgroundColor="#5E5FAD"
          overflow="hidden"
          justifyContent="center"
        >
          <Formik onSubmit={sendEmail} initialValues={formValues}>
            <Form onSubmit={sendEmail} ref={form}>
              {formItems.map((item) => (
                <Field
                  name={item.name}
                  validate={item.validate}
                  key={(item, index) => String(index)}
                >
                  {({ field, form }) => (
                    <FormControl
                      width="40em"
                      paddingTop="10px"
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel>{item.placeholder}</FormLabel>
                      <Input
                        name={item.name}
                        value={item.emailValue}
                        backgroundColor="#f5f5f5"
                        color="#444"
                        width="100%"
                        type={item.type}
                        autoFocus
                        required
                        placeholder={item.placeholder}
                        onChange={handleInput}
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              ))}
              <FormLabel marginTop="10px">Mensagem</FormLabel>
              <Textarea
                name="message"
                height="200px"
                backgroundColor="#f5f5f5"
                borderRadius="5px"
                value={emailValues.message}
                onChange={handleInput}
                placeholder="Sua Mensagem"
                size="sm"
                color="#555"
              />
              <Button mt={4} colorScheme="purple" type="submit">
                Submit
              </Button>
              {handleMessage()}
            </Form>
          </Formik>
        </Flex>
      </Flex>
    </>
  );
};

export default Contact;
