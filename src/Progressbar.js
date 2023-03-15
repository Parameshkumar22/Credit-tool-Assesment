import { Progress } from 'antd';
import './Progressbar.css';
import React from 'react';

const Progressbar = (props) => {
  const calculateFraction = (value) => {
    const numerator = Math.round(value);
    const denominator = 5;
    return  <span className='textcolour'>{`${numerator}/${denominator}`}</span>;
  };

  const getStrokeColor = (value) => {
    return  '#1890ff';
  };

  return (
    <div className='progress' >
      <p> Profit Margin</p>
      <Progress percent={props.prof*20} format={() => calculateFraction(props.prof)} strokeColor={getStrokeColor(props.prof)} />
      <p>Return on Asset</p>
      <Progress percent={props.ret*20} format={() => calculateFraction(props.ret)} strokeColor={getStrokeColor(props.ret)} />
      <p>Debt Ratio</p>
      <Progress percent={props.debt*20} format={() => calculateFraction(props.debt)} strokeColor={getStrokeColor(props.debt)} />
      <p>Current Ratio</p>
      <Progress percent={props.curr*20} format={() => calculateFraction(props.curr)} strokeColor={getStrokeColor(props.curr)} />
    </div>
  );
};


export default Progressbar;