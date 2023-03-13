import React from 'react'

import { Select } from 'antd';
  
const { Option } = Select;
  
 function Drop() {
  
  return (
    <div style={{
      display: 'block', width: 700, padding: 30
    }}>
      <h4>ReactJS Ant-Design Select Component</h4>
      <>
        <Select defaultValue="Monday"
          >
          <Option value="Monday">Monday</Option>
          <Option value="Tuesday">Tuesday</Option>
          <Option value="Wednesday">Wednesday</Option>
          <Option value="Thursday">Thursday</Option>
          <Option value="Friday">Friday</Option>
          <Option value="Saturday">Saturday</Option>
          <Option value="Sunday">Sunday</Option>
        </Select>
      </>
    </div>
  );
}
export default Drop;