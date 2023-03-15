
import React, { useState } from 'react';
import './Dropdown.css'
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Menu, Space, Tooltip } from 'antd';

const items = [
  {
    label: '3 months',
    key: '1',
  },
  {
    label: '6 months',
    key: '2',
  },
  {
    label: '9 months',
    key: '3',
  },
  {
    label: '12 months',
    key: '4',
  },
];

const DropdownInput = () => {
  const [selectedOption, setSelectedOption] = useState('Select Payment Terms');

  const handleMenuClick = (e) => {
    setSelectedOption(e.item.props.children);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Space wrap>
      <Dropdown overlay={menu}>
        <Button className="select">
          <Space className="placeholder">
            <>
              <span>{selectedOption}</span>
              <DownOutlined className="arrow" />
            </>
          </Space>
        </Button>
      </Dropdown>
    </Space>
  );
};

export default DropdownInput;