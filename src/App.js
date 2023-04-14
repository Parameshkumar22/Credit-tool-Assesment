import React, { useEffect } from 'react';
import './App.css';
import { Input ,Typography, Menu } from 'antd';
import tick from './Tickmark.svg';

import imag from './Bannerimage.svg';

import { Button } from 'antd';

import { useState } from 'react';
import {handleClick} from '@smartpaddle/biz-bamboo.ui.ga4-dev'
import {Add_to_Cart} from '@smartpaddle/biz-bamboo.ui.hello-world'
// import DropdownInput from './Dropdown.js';
import Cards from './Card';
import { Layout } from 'antd';

import ReactGA from 'react-ga';


ReactGA.initialize('G-R6M3PRGD7C');

const { Header} = Layout;
let obj = [
  { total : 10000000,
   profit : 5,
   return : 5, 
   debt : 3, 
    current : 5
  }
]

const { Title ,Paragraph } = Typography;
function App() {
  var now = new Date();
   let  var1= window.location.href;
    // let time  = now.toLocaleString().slice(0, 19).replace('T', ' ');
  // let var1 = 'button';
  let var2 = 'hi';
  function inputHandler () {
    console.log ("inputting ")
    window.gtag('event', 'user_input_start', {
      'event_category': 'User Input',
      'event_label': 'User started inputting',
    });
  }

  
   let [submitValue , setSubmitValue] =useState('false');
   
  return ( 
  
  <>


    
   {/* <div className='black'>
   
  </div> */}
  <Layout  >
    <Header >
     
      <Menu
        theme="dark"
        
       
        
      />
    </Header>

    </Layout>
    
   
   
   <div className='dashboard'>
 
   
   <Title style={{   fontSize : '20px', fontFamily : 'Open Sans', fontWeight : 400 , display : 'flex' , flex : 'none' , order : '1' , flexGrow : '0' , position : 'absolute' ,  marginLeft : '24px' , marginTop : '30px' }} level={3}>Credit Limit Assessment  </Title>    
</div>
<div className='img' >
  <img  className = 'image'   src={imag}  alt = 'image not found' />
   </div>
  

  
   
   <Paragraph className='head' onmouseover>Please provide your MCA issued CIN (Company Identification Number)</Paragraph>
   
    
   
   <Input className='input' onInput={inputHandler()} maxLength={21} 
		placeholder="Enter 21-Digit-CIN" />
    <div className='circle'>
   <img  src={tick} alt='not found' />
    
   </div>
  
  
    {/* <DropdownInput/> */}

  


<a  className = "button" id='buttto'  style={{ positon : 'absolute'  , right : '40px'}} href='https://github.com/orgs/Bizongo/repositories' >link</a>


     <div className='button1'>
     
     <Button  className = "button" onClick={(event)=>handleClick({ui : var1 , ctc:var2})} type="primary"  size={'large'}  shape = "default" style={{ borderRadius: 0 }} >Proceed</Button>
     
     </div>
     <div className='card'>
      
      
      <Cards obj = {obj} />
     
    
      
    
      
     
     </div> 
    
    
    
   
   
    

     
      
     
    
		
	
      
   </>
  );
}

export default App;