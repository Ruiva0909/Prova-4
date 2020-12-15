import React from 'react'; 
import Header from '../Header/Header';
import {useState} from 'react'
import ListContato from '../LandingPage/Contato/Contato.json'
import '../Styles/Contato.css';

function Contato(){

    const [número, setNúmero] = useState("")
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [contatos, setContatos] = useState(ListContato)

    function SubmitChange(e){


        const novaCompra = {
            número: número,
            nome: nome,
            email: email
        }

        setContatos([...contatos, novaCompra])

        e.preventDefault()
        console.log(contatos)
    }
        const SubmitChangeNúmero = (e) => {
            setNúmero(e.target.value);
        } 
        const SubmitChangeNome = (e) => {
            setNome(e.target.value);
        }
        const SubmitChangeEmail = (e) => {
            setEmail(e.target.value);
        }



    return(
     <div className="ctt">
         <Header/>
        <form onSubmit={SubmitChange}>
        <div className="contato">
            <h1 className="title"><strong>Página de contato</strong></h1>
            <div className="dados-pessoais">
            <label className="form-numero inpt">
                 Número da compra:
                 <input id="número" type="text" onChange={SubmitChangeNúmero} value={número}/>
            </label>
            <label className="form-nome inpt">
                 Nome:
                 <input id="nome" type="text" onChange={SubmitChangeNome} value={nome}/>
            </label>
            <label className="form-email inpt">
                 Email:
                 <input id="email" type="text" onChange={SubmitChangeEmail} value={email}/>
            </label>
            </div>
            <input type="submit" value="Enviar"/>
        </div>
        </form>
        <table className="table-json">
                <thead>
                    <tr>
                        <th>Número da compra</th>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    { contatos.map((e) =>
                    <tr>
                        <td>{e.número}</td><td>{e.nome}</td><td>{e.email}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>             
    );
}          
export default Contato;