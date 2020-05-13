import React from 'react'
import { Layout, Row, Col } from 'antd'
import { BrowserRouter as Router} from 'react-router-dom';
import { NavLinks, Home, Routes } from 'components'


const App = (props) => {
  const { Header, Footer, Sider, Content } = Layout;
  return (
   <Router>
    <div className = "app">
      <Layout style={{minHeight:'100vh'}}>
        <Header className = "app--header">
          <NavLinks/>
        </Header>          
         <Content className = "app--content">
           <Routes/>   
         </Content>          
        <Footer className = "app--footer">Footer</Footer>
      </Layout>
    </div>
  </Router>  
  )
}

export default App
