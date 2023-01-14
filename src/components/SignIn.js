import React, {useState} from 'react'
import { Select, Input, Radio, Button } from 'antd';
import './Signin.scss'
import miniLogo from '../assets/images/miniLogo.svg' 

const options=[
        {
          value: 'Scientific AI',
          label: 'Scientific AI',
        },
        {
          value: 'Automotive',
          label: 'Automotive',
        },
        {
          value: 'Tecnology',
          label: 'Tecnology',
        },
        {
          value: 'Medical',
          label: 'Medical',
        },
      ]



const SignIn = () => {
  const [input,setInput] = useState();
  const [selectedDrop,setSelectedDrop]= useState();
  const [companySize, setcompanySize] = useState();

  const onClickHandler = () => {
    alert(`company name: ${input}, industry: ${selectedDrop}, company size: ${companySize}`);
    
    }

  return (
    <div className='LoginForm'>
      <div className='formLogo'><img src={miniLogo} alt="" /></div>
      <h2>It’s a delight to have you onboard</h2>
      <h4>
        Help us know you better.<br></br>
        (This is how we optimize Wobot as per your business needs)
      </h4>

      <div className='formFields'>
        <div>
          <label>
            Company name
          </label>
          <Input style={{ width: "450px", height: "37px" }}
            placeholder="e.g. Example Inc"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div>
          <label>
            Industry
          </label>
          <Select
            onChange={(e) => setSelectedDrop(e)}
            options={options}
            className='select'
            style={{ width: "450px" }}
          />
        </div>
        <div>
          <label>
            Company size
          </label>
          <Radio.Group defaultValue="a" buttonStyle="solid" onChange={(e) => setcompanySize(e.target.value)}>
            <Radio.Button value="1-20" style={{ marginRight: "10px", borderRadius: 0 }}>1-20</Radio.Button>
            <Radio.Button value="21-50" style={{ marginRight: "10px", borderRadius: 0 }}>21-50</Radio.Button>
            <Radio.Button value="51-200" style={{ marginRight: "10px", borderRadius: 0 }}>51-200</Radio.Button>
            <Radio.Button value="201-500" style={{ marginRight: "10px", borderRadius: 0 }}>201-500</Radio.Button>
            <Radio.Button value="500+" style={{ borderRadius: 0 }}>500+</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{paddingBotton:"60px"}}>
          
          <Button type="primary" style={{ width: "450px" }}
          onClick={ onClickHandler}
          >Get Started
          </Button>
        </div>



      </div>



    </div>
  )
}

export default SignIn