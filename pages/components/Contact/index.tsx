import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "messageEmail",
        "template_1k9pd4c",
        e.target,
        "oMfwLS1G0bSz4VBsv"
      )
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso!");
          console.log(result.text);
        },
        (error) => {
          alert("Erro não foi possível enviar a mensagem");
          console.log("error.message:", error.message);
          console.log("error.text:", error.text);
        }
      );
    e.target.reset();
  };
  return (
    //tudo feito só falta estilizar kk.
    <>
      <div className="container">
        <h2>Contato</h2>
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-lg-8 col-sm-12 form-group mx-auto">
              <label>Nome</label>
              <input
                type="text"
                autoFocus
                className="form-control"
                required
                placeholder="Nome"
                name="name"
              />
            </div>
            <div className="col-lg-8 col-sm-12 form-group mx-auto">
              <label>Assunto</label>
              <input
                type="text"
                autoFocus
                className="form-control"
                required
                placeholder="Nome"
                name="subject"
              />
            </div>
            <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                required
                placeholder="Seu email"
                name="email"
              />
            </div>

            <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
              <label>Mensagem</label>
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                required
                placeholder="Sua mensagem"
                name="message"
              ></textarea>
            </div>
            <div className="col-lg-8 col-sm-12 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Enviar mensagem"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
