import React from "react";
import './EnvioMensagem.css'

export class EnvioMensagem extends React.Component {
  state = {
    mensagem: [
      {
        nome: "",
        texto: ""
      }
    ],

    valorInputNome: "",
    valorInputTexto: ""
  };

  adicionaMensagem = () => {
    const novaMensagem = {
      nome: this.state.valorInputNome,
      texto: this.state.valorInputTexto

    }

    const novasMensagens = [...this.state.mensagem, novaMensagem];

    this.setState({ mensagem: novasMensagens });
  };

  onKeyDown = event => {
    if (event.key === "Enter") {
      this.adicionaMensagem();
    }
  };
  onChangeInputNome = event => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputTexto = event => {
    this.setState({ valorInputTexto: event.target.value });
  };

  render() {
    const listaMensagens = this.state.mensagem.map(mensagem => {
      if (mensagem.usuario === "eu") {
        return (
          <div className={"box-lista-eu"}>
            <p classNome={"pNomeEu"}>{mensagem.nome}</p>
            <p>{mensagem.texto}</p>
          </div>
        );

      } else {
      return (
        <div className={"listaMensagem"} id="lista">
          <p className={"pNome"} id="nome">{mensagem.nome}</p>
          <p>{mensagem.texto}</p>
        </div>
      );

      }
    });

    return (
      <div>
        <div className={"div-mensagens"}>{listaMensagens}</div>
        <div className={"inputs"} >
          <input className={'inputNome'} id={"input"}
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Usuário"}
          />
          <input className={'inputTexto'}
            value={this.state.valorInputTexto}
            onChange={this.onChangeInputTexto}
            placeholder={"Mensagem"}
            onKeyDown={this.onKeyDown}
          />
          <button onClick={this.adicionaMensagem}>ENVIAR</button>
        </div>
      </div>
    );


  }
}
