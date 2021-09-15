import styled from "styled-components"
const Styled = styled.div`

display: flex;
flex-direction: row;
position: sticky;
top: 0px;
heigth: 100vh;
padding-bottom: 0em
min-width: 100%;

.right-box {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.reader-right-box {
   display: flex;
   flex-direction: row;
   background-color:  #fff;
   padding: 1.3em;
   align-items: center;
   justify-content: space-between;
}

.user-name  {
    padding-left: 1em;
    font-size: 16px;
}

.user-name b {
    color: #4a4a4a;
}





.left-button button {
    border-radius: 50%;
    background-color: #119FDC;
    width: 44px;
    height: 44px;
    border: none;
    margin: .4em;
}

.refresh-button button {
    border-radius: 50%;
    background-color: #119FDC;
    width: 44px;
    height: 44px;
    border: none;
    margin: .4em;
    
}



.box-image {
    display: flex;
    flex-direction: row;
    padding: 0.5em;
}

.box-user {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.bottom-bar-right-header {
    border-bottom: .5px solid #e9e9e9;
    width: 97%;
    align-self: center;
    background-color: #e9e9e9;
}

.new-student-box {
    display: flex;
    flex-direction: column;

    background-color: white;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
    padding: 2em;
        
}

.bar-new-student {
    border: 3px solid #119FDC;
    border-radius: .5em;
    margin-right: .4em;
    background-color: #119FDC;
}

.text-new-student {
    display: flex;
    flex-direction: row;

   font-size: 32px;
}
.text-new-student div {
    font-weight: bolder;
}

.input-new-student {
    display: flex;
    flex-direction: row;
    padding-top: 2.4em;
}

.agp-input {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.input {
    margin-top: .5em;
    margin-bottom: .5em;
}

.input-left {
    display: flex;
    flex-direction: column;
    margin-right: 0em;
}

.input-right {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    margin-left: 10px;
}

input {
    width: 209px;
    height: 36px;

    background: #FFFFFF;
    border: 1px solid #A8A8A8;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: 0em;

}

.name-student {
    font-size: 18px;
    color: #615858;
    width: 5.5em;
    padding-left: 1em;
    font-weight: 800;
}


.number-student {
    font-size: 18px;
    color: #615858;
    width: 5.5em;
    font-weight: 800;
}

.class-student {
    font-size: 18px;
    color: #615858;
    margin-right: 0.8em;
    font-weight: 800;
}

.corse-student {
    font-size: 18px;
    color: #615858;
    margin-right: 1em;
    font-weight: 800;
}


.button-create {
    align-self: flex-end;
    justify-self: flex-end;
    padding-bottom: 1.5em;
}

.button-create  button {
    width: 106px;
    height: 36px;

    background: #119FDC;
    border-radius: 44px;
    border: none;
    color: white;
    font-size: 14px;
    margin-left: 2em;
    font-weight: bold;
}

.student-registered-box {
    display: flex;
    flex-direction: column;

    background-color: white;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
    padding: 2em;
    margin-top: 2em;
    
}
.text-registered-student {
    display: flex;
    flex-direction: row;
    font-weight: bolder;
   font-size: 32px;
   padding-left: .3em;
}

.row-bar {
    display: flex;
    flex-direction: row;
}

.information-purple {
    display: flex;
    flex-direction: row;
    background: #119FDC;
    width: 1454px;
    height: 67px;
    color: #FFFFFF;
    justify-content: space-evenly;
    margin-top: 2em;
    align-items: center;
    font-size: 18px ;
    margin-bottom: 1em;
}



.gray{
    width: 1454px;
    height: 61.93px;
    background: #F5F5F5;
    display: flex;
    flex-direction: row;
    
    align-items: center;
    font-size: 18px;
}
.white {
    width: 1454px;
    height: 61.93px;
    background: #FFFFFF;
    display: flex;
    flex-direction: row;
    
    align-items: center;
    font-size: 18px;
}

.box-information {
    border: 1px solid #E2E2E2;
 }

 .body-right-box {
    display: flex;
    flex-direction: column;

    background-color: #F5F5F5;

    height: 100%;
    padding: 3em;
    
    margin-bottom: 0em;
    margin-right: 0em;
 }


 .reader-right-box {
     margin-top: 0em;
     padding-right: 0em;
    
 }

 td button {
     border-radius: 50%;
     background-color: #565656;
     border: none;
     width: 31px;
     height: 31px;
 }
 
 .box-image {
     margin-right: 2em;
 }

 thead {
     background-color: #6cc3df;
    
     
     
 }

table {
    margin-top: 2em;
}





 tbody {
     background-color: #F5F5F5;
 }

td {
    text-align: left;
    height:  61.93px;
    padding: 1em;
    color: #6D6868;
    font-weight: 600;
}

.white {
    background-color: #fff;
}

th {
    height: 61.93px;
    text-align: left;
    padding: 1em;
    color: #ffff;
    font-weight: 800;
} 
.table-user {
    border-collapse: collapse;
}
.int {
    background-color: #fff;
}

.a {
    width: .1em;
}

button {
    cursor: pointer;
}

.button-create button:hover {
    background-color: #6cc3df;
    transition: 2s;
}

img {
    cursor: pointer;
}

.absolute {
    color: white;
    background-color: #119FDC;
    border: 3px solid white;
    border-radius: 50%;
    position: absolute;
    width: 20px;
    height: 20px;
    text-align: center;
   font-size: .7em;
}



.user-image {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    border-radius: 50%;
    
}

.user-image img {
    width: 57px;
    height: 57px;
    border-radius: 50%;
    height: 57px;
    
}

.link-input {
    display: flex;
    flex-direction: row;
    
}

.input-link input {
    width: 525px;
    height: 36px;

    background: #FFFFFF;
    border: 1px solid #A8A8A8;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: 0em;
}

.inp {
    display:flex;
    flex-direction: column;
}

.inputs {
    display:flex;
    flex-direction: row;
}

.input-text {
    display: flex;
    flex-direction: column; 
}


textarea {
 width: 525px;
 height: 100px;

 background: #FFFFFF;
 border: 1px solid #A8A8A8;
 box-sizing: border-box;
 border-radius: 5px;
 padding-left: 0em;
}

label {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    color: #615858;
    width: 5.5em;
    font-weight: bolder; 
}

`;
export {Styled};