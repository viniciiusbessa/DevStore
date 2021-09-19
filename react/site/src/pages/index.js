import { Styled } from "./styled";
import Index from "../components/cabecalho/index"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import Api from '../service/api';
import { useState, useEffect, useRef } from "react";
const api = new Api();


export default function IndexPrincipal() {

         
    const [produtos, setProdutos] = useState([]);
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [preco_de, setPreco_de] = useState('');
    const [preco_por, setPreco_por] = useState('');
    const [avaliacao, setAvaliacao] = useState('');
    const [descricao, setDescricao] = useState('');
    const [estoque, setEstoque] = useState('');
    const [image, setImage] = useState('');
    const [idAlterando, setIdAlterando] = useState(0);

    const loading = useRef(null);
    

    async function  listar() {
        let r = await api.listar();
        setProdutos(r);
        loading.current.complete();
    } 

    async function inserir() {
        loading.current.complete();
        if (idAlterando == 0) {

        let r = await api.inserir(nome, categoria, preco_de, preco_por, avaliacao, descricao, estoque, image);
        if (r.erro){
            toast.error(r.erro);
        } else {
            toast.success('✔️ Produto inserido com sucesso!! :)');
        }

    } else {
        let r = await api.alterar(idAlterando, nome, categoria, preco_de, preco_por, avaliacao, descricao, estoque, image);
        if (r.erro){
            toast.error(r.erro);
        } else {
            toast.success('✔️ Produto Alterado com sucesso!! :)');
        }
    }
        LimparCampos();
        listar();
    }

    function LimparCampos() {
        setNome('');
        setCategoria('');
        setPreco_de('');
        setPreco_por('');
        setAvaliacao('');
        setDescricao('');
        setEstoque('');
        setImage('');
        setIdAlterando(0);   
    }

    async function remover(id) {
        loading.current.complete();

        confirmAlert({
            title: 'Remover Produto',
            message: `Tem certeza que deseja remover o prooduto ${id}?`,
            buttons:[
            {
                label: 'Sim',
                onClick: async () => {
                    let r = await 
                api.removerProduto(id);

                if (r.erro){
                    toast.error(r.erro);
                } else {
                    toast.success('🗑️  Produto removido com sucesso!! :)');
                }
                listar();

                }
            },
             {
                 label: 'Não'
             }
            ]
        });
    }

    async function editar(item) {
        loading.current.complete();
        setNome(item.nm_produto);
        setCategoria(item.ds_categoria);
        setPreco_de(item.vl_preco_de);
        setPreco_por(item.vl_preco_por);
        setAvaliacao(item.vl_avaliacao);
        setDescricao(item.ds_produto);
        setEstoque(item.qtd_estoque);
        setImage(item.img_produto);
        setIdAlterando(item.id_produto);

        
        listar();
    }
    

    useEffect(() => {
      listar();
    }, [])



 
    return(
<Styled>
    <Index/> 
     <ToastContainer/>
     <LoadingBar color= "#13D3D3" ref= {loading}/>
    <div class="Box-Site">
      <div class="right-box"> 
        <div class="reader-right-box">
           <div class = "box-user"> 
             <div class="user-image">  <img src="/images/bruninhokk.svg" alt = ""/> <div class="absolute">  3   </div> </div>
             
             <div class="user-name"> Olá, <b>  Bruno de Oliveira </b> </div>
            </div>
            <div class="box-image">
                <div class="refresh-button"> <button> <img src="/images/refresh.svg" alt = "" />  </button> </div>
                <div class="left-button"> <button> <img src="/images/log-out.svg" alt = "" />  </button> </div>
            </div>
        </div>
        <div class="bottom-bar-right-header"> </div>
      
        <div class="body-right-box">
            <div class="new-student-box">
                <div class="text-new-student">
                    <div class="bar-new-student"></div>
                    <div class="text-new-student">{idAlterando == 0 ? "Novo Produto" : "Alterando Produto" + idAlterando }</div>
                </div>
                <div class="input-new-student"> 

                   <div class="input-text">
                    <div class="inputs">
                    <div class="input-left">
                       <div class="agp-input"> 
                        
                        <div class="name-student"> Nome: </div>  
                        <div class="input"> <input type="text" value={nome} onChange={e => setNome(e.target.value)} /> </div>  
                    </div> 
                    <div class="agp-input">
                        <div class="number-student"> Categoria: </div>  
                        <div class="input"> <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)} /> </div> 
                       </div>
                    <div class="agp-input">
                        <div class="number-student"> Avaliação: </div>  
                        <div class="input"> <input type="text" value={avaliacao} onChange={e => setAvaliacao(e.target.value)} /> </div> 
                    </div> 

                    
                    
                    </div>

                    <div class="input-right">
                     <div class="agp-input">
                        <div class="corse-student"> Preço De: </div>  
                        <div class="input"> <input type="text" value={preco_de} onChange={e => setPreco_de(e.target.value)} /> </div>  
                        </div>
                     <div class="agp-input">
                        <div class="class-student"> Preço Por: </div>  
                        <div class="input"> <input type="text" value={preco_por} onChange={e => setPreco_por(e.target.value)} /> </div> 
                        </div>
                    <div class="agp-input">
                            <div class="number-student"> Estoque: </div>  
                            <div class="input"> <input type="text" value={estoque} onChange={e => setEstoque(e.target.value)} /> </div> 
                    </div>    
                    </div>
                </div>

                    <div class="principal-input">

                    <div class="agp-input">
                        <div class="number-student"> Link do Produto: </div>  
                        <div class="input-link"> <input type="text" value={image} onChange={e => setImage(e.target.value)} /> </div> 
                    </div>
                    <div class="agp-input">
                        <label for="nome">Descrição:</label>
                        <textarea
                          id="nome"
                          name="nome"
                          class="area-input"
                        ></textarea>
                      </div>
                    </div>  
                </div>

                    <div class="button-create"> <button onClick={inserir}> {idAlterando == 0 ? "Cadastrar" : "Alterar"} </button> </div>
                
            </div>

            


            <div class="student-registered-box">
                <div class="row-bar"> 
                    <div class= "bar-new-student"> </div>
                    <div class="text-registered-student"> Produtos Cadastrados </div>
                </div>
            
                <table class ="table-user">
                    <thead>
                        <tr>
                            <th > ID </th>
                            <th> Nome </th>
                            <th> Categoria </th>
                            <th> Preço De </th>
                            <th> Preço Por </th>
                            <th> Avaliação </th>
                            <th> Descrição </th>
                            <th> Estoque </th>
                            <th> Imagem </th>
                            
                            <th class="a"> </th>
                            <th class="a"> </th>
                        </tr>
                    </thead>
            
                    <tbody>
                       
                       {produtos.map((item, i) =>
                        

                        <tr className={i % 2 == 0 ? "linha-alternada" : ' '}>
                        <td className= "imagem-tabela"> <img src= {item.img_produto}/> </td>
                        <td> {item.id_produto} </td>
                            <td> {item.nm_produto}</td>
                            <td> {item.ds_categoria} </td>
                            <td> {item.vl_preco_de} </td>
                            <td> {item.vl_preco_por} </td>
                            <td> {item.vl_avaliacao} </td>
                            <td> {item.ds_produto} </td>
                            <td> {item.qtd_estoque} </td>
                            
                            <td className= "a"> <button onClick={() => editar(item)}> <img src="/images/edit.svg" alt="" /> </button> </td>
                            <td className = "a">   <button onClick={() => remover(item.id_produto)}> <img src="/images/trash-2.svg" alt="" /> </button> </td>
                        </tr>

                       )} 
                        
                    </tbody> 

                </table>
          
            </div>
        </div>
    </div>
 </div>
 </div>
 
</Styled>
    );
}
