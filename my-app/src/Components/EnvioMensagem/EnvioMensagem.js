import React from "react";

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
    };

    const novasMensagens = [...this.state.mensagem, novaMensagem];

    this.setState({ mensagem: novasMensagens });
  };

  onChangeInputNome = event => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputTexto = event => {
    this.setState({ valorInputTexto: event.target.value });
  };

  render() {
    const listaMensagens = this.state.mensagem.map(mensagem => {
      return (
        <div className={"listaMensagem"}>
          <p className={"pNome"}>{mensagem.nome}</p>
          <p>{mensagem.texto}</p>
        </div>
      );
    });

    return (
      <div>
        <div>{listaMensagens}</div>
        <div>
          <input className={'inputNome'}
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Usuário"}
          />
          <input className={'inputTexto'}
            value={this.state.valorInputTexto}
            onChange={this.onChangeInputTexto}
            placeholder={"Mensagem"}
          />
          <button onClick={this.adicionaMensagem}>ENVIAR</button>
        </div>
      </div>
    );
  }
}
