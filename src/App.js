import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import { NavLinks } from 'components'
import { TaskCreationForm } from 'modules'

const App = () => {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Router>
      <div className = "app">
        <Layout style={{minHeight:'100vh'}}>
          <Header className = "app--header">
            <Row>
              <Col span={14} push={5}>
                <NavLinks />
              </Col>
            </Row>
          </Header>
          <Switch>
            <Content className = "app--content">
              <Route path = "/create-task" component = {TaskCreationForm} />
            </Content>
          </Switch>
          <Footer className = "app--footer">Footer</Footer>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
