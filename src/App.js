import { useState } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';


const {Title}=Typography;




function App() {

const [name, setName]=useState('');
const[submittedData, setSubmittedData]=useState(null);
const[description, setDescription]=useState('');

const onFinish=()=>{
  setSubmittedData({name, description});
};


  return (
    <div style={{ padding:'20px',maxWidth:600, margin:'0 auto'}}>
      <Title level={2}> Форма с использованием Ant Design </Title>


    <Form layout='vertical' onFinish={onFinish}>
    <Form.Item label='Имя' name="name">


      <Input
      value={name}
      onChange={(e)=> setName(e.target.value)}
      placeholder='Введите ваше имя'/>
    </Form.Item>

    <Form.Item label="Описание" >
     <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Введите описание"
          />
    </Form.Item>


    <Form.Item>
      <Button type='primary' htmlType="submit">
       Отправить
       </Button>
      </Form.Item>
      </Form>

      {submittedData && (
        <Card style={{marginTop:24}}>
          <Title level={4}>Отправленные данные:</Title>
          <p><strong>Имя:</strong>{submittedData.name}</p>
          <p><strong>Описание:</strong>{submittedData.description}</p>
  </Card>
)}
    </div>
  );
}
export default App;
