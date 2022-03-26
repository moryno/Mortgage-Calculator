import React, {useState} from "react";
import {Button, Container, Form,Header, Label, Input, Payment} from "./Styled";


function Calculator(){
    const [content, setContent] = useState({
        principal: "",
        years: "",
        rate: ""
    });


    const [payment, setPayment] = useState("");
    

    const handleChange = (event)=>{
        const {name, value} = event.target;

        setContent(prevValue=>{
            return {
                
                ...prevValue,[name]: value
            }
        });
        

    }
    
    const calculatePayment = ()=>{
        let inititalPrincipal = parseFloat(content.principal);
        let numberOfYears = parseFloat(content.years);
        let currentRate = parseFloat(content.rate);
        if(isNaN(inititalPrincipal) || isNaN(numberOfYears) || isNaN(currentRate)) return;

        const monthlyRate = currentRate/100/12;
        const duration = numberOfYears * 12;
        const monthlyPayment = inititalPrincipal * monthlyRate * (Math.pow((1 + monthlyRate), duration ))/((Math.pow(( 1 + monthlyRate), duration)) - 1);
        

        return monthlyPayment.toFixed(2);
       
    }
    
    const compute = (event)=>{
        event.preventDefault();
        let value = calculatePayment();
        if(value === undefined || value === null) return;
        
        setPayment(value);
        setContent({
            principal: "",
            years: "",
            rate: ""
        });
    }
    

    return( 
        <div>
        
        <Container>
         
          
          <Form onSubmit={compute}>
              <Header>Mortgage Calculator</Header>
              <Label>Principal: </Label>
              <Input name="principal" value={content.principal} onChange={handleChange} /> <br />
              <Label>Years: </Label>
              <Input name="years" value={content.years} onChange={handleChange} /><br />
              <Label>Rate: </Label>
              <Input name="rate" value={content.rate} onChange={handleChange} /><br />
              <Label>Monthly Payment:</Label>
               <span className="currency">{payment}</span>
              <Button type="submit">Compute</Button><br></br>
          </Form>
           
          
      </Container>
      
        </div>
      
    );
}

export default Calculator;