import { Card } from 'antd';
import React from 'react';
import './Card.css'
import {Typography} from 'antd';
import Progressbar from './Progressbar';

const { Paragraph, Text } = Typography;
const Cards = (props) => (
  <div className="site-card-border-less-wrapper">
    <Card className='cardheading' 
      title="Credit Limit Available for Smartpaddle Technologies Private Limited"
      bordered={false}
      style={{
        width: "1200px", 
        height : " 388px" ,
     

      }}
    >
        <Paragraph className='subheading' >  Credit limit available : </Paragraph>
        <Paragraph className = 'green' > INR {props.obj[0].total}</Paragraph>
        
        <Progressbar prof = {props.obj[0].profit} ret = {props.obj[0].return } debt = {props.obj[0].debt} curr = {props.obj[0].current} />
    </Card>
  </div>
);
export default Cards;