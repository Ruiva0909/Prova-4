import React from 'react'; 
import Header from '../Header/Header';
import '../Styles/Ajuda.css';

function Ajuda(){
    return(
     <div className="ajuda">
         <Header/>
         
        <div className="texto">
                <h2 className="text-warning">! Dúvidas frequentes     </h2>
        </div>
        
        <div className="texto">
            <h2>1. Cadastro</h2>
            <div className="hidden">
                <p>"Entre no menu"
                    <b>Cadastro</b>
                    "cadastre os seus dados."
                </p>
                <p className="text-warning">
                    "Não esqueça de informar o seu CPF/RG e dados corretamente."
                </p>
            </div>
            
            <div className="texto">
                <h2>2. Forma de Pagamento</h2>
                <div className="hidden">
                    <span className="text-warning">ATENÇÃO!</span>
                    <p className="text-error">"Aceitamos somente cartões de crédito."</p>
                    <span className="text-warning">ATENÇÃO!</span>
                    <p className="text-error">"Boletos estarão disponíveis dependendo do evento."</p>
                </div>
            
            <div className="texto">
                <h2>3. Obrigatório</h2>
                <div className="hidden">
                    <p>
                       "Para compras feitas com cartão de crédito, o responsável deverá apresentar:"
                       <br/>
                       1. Um documento oficial com foto;
                       <br/>
                       2. Procuração preenchida, impressa e assinada;
                       <br/>
                       3. Uma cópia simples do documento oficial do titular da compra;

                    </p>
                </div>
            
            <div className="texto">
                <h2>4. Cancelamentos</h2>
                <div className="visib">
                    <p>
                        <strong>Cancelamento de Compras</strong>
                        Conforme o Código de Defesa do Consumidor (Art 49), serão aceitos pedidos
                        de cancelamento da compra até 7 dias após o pedido.
                    </p>
                    <p>
                        <span className="label label-warning">ATENÇÃO</span>
                        Lembramos que após o evento, não serão realizados cancelamentos e devoluções de valores.
                    </p>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>            
    );
}      
export default Ajuda;    