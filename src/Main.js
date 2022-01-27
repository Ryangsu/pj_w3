import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaAutoprefixer, FaStar } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import './App.css';




const Main = (props) => {

    const list = ["월", "화", "수", "목", "금", "토", "일"]
    const random_circle = list.map((d, index) => {
        return {
            list: d,
            rate: Math.floor(Math.random() * 5),
        }
    })
    return (

        <div>
            <Title>
                <H1Text>이번 주 기분 어때?</H1Text>
                <Hr1 />
                {random_circle.map((d, index) => {
                    return (
                        <IndexBox key={index} >
                            {d.list}
                            {Array.from({ length: 5 }, (circle, index) => {
                                return (
                                    <Star color = {d.rate < index}>
                                        <FaStar key={index}size="40"/>
                                    </Star>
                                )
                            })}
                            <Link to={`/Detail/${d.list}`}><Button><IoIosArrowDropright size="45" /></Button></Link>
                        </IndexBox>);
                })}
            </Title>
        </div>
    );
}



const IndexBox = styled.div`
    font-family: "Yfont";
    background-color: #cfafbf;
    margin: 10px auto;
    padding: 10px;
    width: 350px;
    height: 5vh;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 20px;
    line-height: 40px;
    text-align: start;
    font-weight: 1000;
    color: #555555;
    display: flex;
    overflow: auto;
    &::-webkit-scrollbar { display: none; }
`
const Star = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 30px;
    margin: 2px 11px;
    color: ${(props) => props.color ?  "#aaa" : "#f5fa00"};

    
`

const Title = styled.div`
    background-color: #ddcccc;
    text-align: center;
    width: 500px;
    height: 80vh;
    border: 1px solid #ddd;
    margin: 50px auto;
    border-radius: 10px;
    overflow: auto;
    &::-webkit-scrollbar { display: none; }
  
`
const Hr1 = styled.hr`
    width: 400px;
    margin: auto 50px 50px;
`

const H1Text = styled.h1`
    color: #555555;
    font-family: "Yfont";
`

const Button = styled.div`
    color: #555555;
`


export default Main;