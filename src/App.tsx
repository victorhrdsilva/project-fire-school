import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/index';
import RegisterPage from './components/RegisterPage/RegisterPage';
import GlobalStyle from './styles/GlobalStyles';

function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          {/*                         <Route
                            path="/home"
                            element={
                                <PrivatePage>
                                    <Home />
                                </PrivatePage>
                            }
                        /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
