import React from "react";
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useState } from "react";
import { Link } from 'react-router-dom';
import './App.css';



const root = document.getElementById("root");

const Detail = (props) => {
    const { day_list } = useParams();
    const [rating, setRating] = React.useState(0);
    const Click = (index) => {
        setRating(index+1);
    }

    return (
        <div>
            <Title>
            <H1Text>{day_list}요일!</H1Text>
            <IndexBox> 
            {Array.from({ length: 5 }, (circle, index) => {  
            return (
                <Star
                key={index}
                clicked={rating < index + 1}
                onClick={()=>{
                Click(index);
                }} 
                >
                <FaStar size="40"/>   
                </Star>
                    )
            
            })}
            </IndexBox>
            <Button><Link to="/ ">평점 남기기</Link></Button>
            </Title>
        </div>)
};

export default Detail;

const IndexBox = styled.div`
    background-color: #cfafbf;
    margin: 20px auto;
    padding: 10px;
    width: 250px;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 18px;
    line-height: 40px;
    text-align: start;
    font-weight: 550;
    color: #505000;
    display: flex;
    overflow: auto;
`

const Button = styled.button`
    font-family: "Yfont";
    width: 100px;
    height: 30px;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 1000;
    background-color: #ddddff;
`
const Title = styled.div`
    font-family: "Yfont";
    background-color: #ddcccc;
    text-align: center;
    width: 350px;
    height: 50vh;
    border: 1px solid #ddd;
    margin: 50px auto;
    border-radius: 10px;   
    overflow: auto;
`

const H1Text = styled.h1`
    color: #505000;
`

const Star = styled.a`
    color: ${(props) => props.clicked ?  "#aaa" : "#f5fa00"};
    margin-left: 8px;
    align-items: center;
`
