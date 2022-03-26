import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    width: 400px;
    margin: 40px auto;
    grid-template-rows: minmax(120px, auto) repeat(2);
    box-shadow: 2px 2px 10px #333;
    border-radius: 10px;
`
// export const Screen = styled.div`
//    grid-column: 1 / -1;
//    background-color: rgba(60, 64, 67, 0.75 );
//    display: grid;
//    justify-content: space-around;
//    flex-direction: column;
//    padding: 5px;
//    width: 400px;
//    margin: 40px auto;
//    word-wrap: break-word;
//    word-break: break-all;
//    text-align: center;
//    grid-template-rows: minmax(60px, auto) ;
//    box-shadow: 2px 2px 10px #333;
//    border-radius: 10px;
   
// `

export const Payment = styled.div`
    color: white;
    font-size: 2.5rem;
`
export const Header = styled.header`
   font-family: "sans-serif";
   font-weight: bold;
   margin: 10px auto;
   padding: 0;
   
`
export const Form = styled.form`
  align-content: center;
  justify-content: center;
  margin: 10px auto;
  overflow: hidden;
  ${'' /* grid-template-rows: minmax(120px, auto) repeat(3, 300px); */}

`

export const Button = styled.button`
    float: right;
    cursor:pointer;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px outset white;
    outline: none;
    background-color: rgba(255, 255, 255, 0.75);
    &:hover{
        background-color: rgba(255,255,255, 0.9);
    }
    margin-top: 50px;
    
`
export const Label = styled.label`
  display: inline-block;
  width:80px;
  text-align: right;
  margin: 10px;
`
export const Input = styled.input`
 -webkit-appearance: none;
 background-color: rgba(60, 64, 67, 0.75 );
 width: 150px;
 height: 24px;
 padding: 3px 8px;
 font-size: 14px;
 line-height: 1.42857143;
 color: white;
 border: 1px solid #ccc;
 border-radius: 5px;
 -webkit-box-shadow: none;
 box-shadow:none;
 margin: 10px;
  
`