import React from 'react';
import './App.css';
import { Input ,Typography, Menu } from 'antd';
import tick from './Tickmark.svg';

import imag from './Bannerimage.svg';

import { Button } from 'antd';

import { useState } from 'react';


import DropdownInput from './Dropdown.js';
import Cards from './Card';
import { Layout } from 'antd';


const { Header} = Layout;
let obj = [
  { total : 1000000,
   profit : 5,
   return : 4, 
   debt : 3, 
    current : 5
  }
]

const { Title ,Paragraph } = Typography;
function App() {
   
   
  
   let [boolval , setboolval] = useState (false);
   function submithandler  ()  {

      setboolval(true);
        
   }
   
   
  return ( 
  
  <>


    
   {/* <div className='black'>
   
  </div> */}
  <Layout className="layout">
    <Header>
     
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
  

  
   
   <Paragraph className='head'>Please provide your MCA issued CIN (Company Identification Number)</Paragraph>
   
    
   
   <Input className='input' maxLength={21} 
		placeholder="Enter 21-Digit-CIN" />
    <div className='circle'>
   <img  src={tick} alt='not found' />
    
   </div>
  
  
    <DropdownInput/>

  





     <div className='button1'>
     
     <Button  className = "button" type="primary" size={'large'} onSubmit={submithandler} shape = "default" >Proceed</Button>
     </div>
     <div className='card'>
      
      
      <Cards obj = {obj} />
     
      
    
      
     
     </div> 
    
    
    
   
   
    

     
      
     
    
		
	
      
   </>
  );
}

export default App;
