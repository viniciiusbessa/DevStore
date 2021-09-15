import { Styled } from "./styled";
import {Index} from "../components/cabecalho/index"
export default function IndexPrincipal() {

    return(
<Styled>
    <Index>
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
                    <div class="text-new-student">Novo Produto</div>
                </div>
                <div class="input-new-student"> 

                   <div class="input-text">
                    <div class="inputs">
                    <div class="input-left">
                       <div class="agp-input"> 
                        
                        <div class="name-student"> Nome: </div>  
                        <div class="input"> <input /> </div>  
                    </div> 
                    <div class="agp-input">
                        <div class="number-student"> Categoria: </div>  
                        <div class="input"> <input /> </div> 
                       </div>
                    <div class="agp-input">
                        <div class="number-student"> Avaliação: </div>  
                        <div class="input"> <input /> </div> 
                    </div> 

                    
                    
                    </div>

                    <div class="input-right">
                     <div class="agp-input">
                        <div class="corse-student"> Preço De: </div>  
                        <div class="input"> <input /> </div>  
                        </div>
                     <div class="agp-input">
                        <div class="class-student"> Preço Por: </div>  
                        <div class="input"> <input /> </div> 
                        </div>
                    <div class="agp-input">
                            <div class="number-student"> Estoque: </div>  
                            <div class="input"> <input /> </div> 
                    </div>    
                    </div>
                </div>

                    <div class="principal-input">

                    <div class="agp-input">
                        <div class="number-student"> Link do Produto: </div>  
                        <div class="input-link"> <input /> </div> 
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

                    <div class="button-create"> <button> Cadastrar </button> </div>
                
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
                            <th> Chamada </th>
                            <th> Turma </th>
                            <th> Curso </th>
                            <th class="a"> </th>
                            <th class="a"> </th>
                        </tr>
                    </thead>
            
                    <tbody>
                        <tr >
                            <td> 1 </td>
                            <td> Fulao da Silva Sauro</td>
                            <td> 15 </td>
                            <td> InfoX </td>
                            <td > Informática </td>
                            <td> <button> <img src="/images/edit.svg" alt="" /> </button> </td>
                            <td class = "aa">   <button> <img src="/images/trash-2.svg" alt="" /> </button> </td>
                        </tr>

                        
                    

                    
                        <tr class="int">
                            <td> 1 </td>
                            <td> Fulao da Silva Sauro</td>
                            <td> 16 </td>
                            <td> InfoX </td>
                            <td > Informática </td>
                            <td>   </td>
                            <td>   </td>
                        </tr>

                        
                    

                    
                        <tr>
                            <td> 1 </td>
                            <td> Fulao da Silva Sauro</td>
                            <td> 17 </td>
                            <td> InfoX </td>
                            <td > Informática </td>
                            <td>   </td>
                            <td>   </td>
                        </tr>

                        
                    

                    
                        <tr class="int">
                            <td> 1 </td>
                            <td> Fulao da Silva Sauro</td>
                            <td> 18 </td>
                            <td> InfoX </td>
                            <td > Informática </td>
                            <td>   </td>
                            <td>   </td>
                        </tr>

                        
                    </tbody> 

                </table>
          
            </div>
        </div>
    </div>
 </div>
 </div>
 </Index>
</Styled>
    );
}
