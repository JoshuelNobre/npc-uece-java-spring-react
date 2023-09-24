import {useEffect, useState} from 'react'
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import React from 'react'


function App() {

  // Objeto veiculo
  const veiculo = {
      id : 0,
      marca: '',
      modelo: '',
      ano_de_fabricacao: '',
      placa: '',
      quilometragem: 0
  }

  // UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [veiculos, setVeiculos] = useState([]);
  const [objVeiculo, setObjVeiculo] = useState(veiculo);

  // UseEffect
  useEffect(()=>{
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_covertido => setVeiculos(retorno_covertido))
  }, []);

  // Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjVeiculo({...objVeiculo, [e.target.name]:e.target.value})
  }

  // Cadastrar veiculo
  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar',{
      method:'post',
      body:JSON.stringify(objVeiculo),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{
        setVeiculos([...veiculos, retorno_convertido]);
        alert('Produto cadastrado com sucesso!');
        limparFormulario();
      }
      
    })
  }

  // Alterar veiculo
  const alterar = () => {
    fetch('http://localhost:8080/alterar',{
      method:'put',
      body:JSON.stringify(objVeiculo),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{
        
        // Mensagem
        alert('Veiculo alterado com sucesso!');

        // Cópia do vetor de veiculos
        let vetorTemp = [...veiculos];

        // Índice
        let indice = vetorTemp.findIndex((p) =>{
          return p.id === objVeiculo.id;
        });

        // Alterar veiculo do vetorTemp
        vetorTemp[indice] = objVeiculo;

        // Atualizar o vetor de veiculos
        setVeiculos(vetorTemp);

        // Limpar o formulário
        limparFormulario();
      }
      
    })
  }

  // Remover veiculo
  const remover = () => {
    fetch('http://localhost:8080/remover/'+objVeiculo.id,{
      method:'delete',
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      
      // Mensagem
      alert(retorno_convertido.mensagem);

      // Cópia do vetor de veiculos
      let vetorTemp = [...veiculos];

      // Índice
      let indice = vetorTemp.findIndex((p) =>{
        return p.id === objVeiculo.id;
      });

      // Remover veiculo do vetorTemp
      vetorTemp.splice(indice, 1);

      // Atualizar o vetor de veiculos
      setVeiculos(vetorTemp);

      // Limpar formulário
      limparFormulario();
      
    })
  }

  // Limpar formulário
  const limparFormulario = () => {
    setObjVeiculo(veiculo);
    setBtnCadastrar(true);
  }

  // Selecionar veiculo
  const selecionarVeiculo = (indice) => {
    setObjVeiculo(veiculos[indice]);
    setBtnCadastrar(false);
  }

  // Retorno
  return (
    <div>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objVeiculo} remover={remover} alterar={alterar} />                                   
      <Tabela vetor={veiculos} selecionar={selecionarVeiculo} /> 
    </div>
  );
}

export default App;
