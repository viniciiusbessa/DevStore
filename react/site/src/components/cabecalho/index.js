import {StyledCabe} from "../cabecalho/styled";
export default function Index (){
    return (
    <StyledCabe>
        <div class="left-box">
        <header class="header-left-box">
            <div class="svg-cabecalho-left-box"> <img src="./images/Vector (1).svg" /></div>
            <div class="devSchool"> <span>Dev</span>Store</div>
        </header> 
        <div class="black-box"></div>
        <div class="left-box-management">
            <div> Gerenciamento </div>
            <img src="/images/chevron-down.svg" />
        </div>
        <div class="left-box-aluno">
            <div> Alunos </div>
        </div> 
     </div>

    </StyledCabe>
    );
}
