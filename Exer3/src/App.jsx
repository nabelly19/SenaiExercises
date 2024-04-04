import { useState, useEffect } from 'react'
import { Cards } from './components/Card'
import Modals from './components/Modal'
import Card from 'react-bootstrap/Card';
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardBody from 'react-bootstrap/esm/CardBody'

function App() {
  const [show, setShow] = useState("")
  const [data, setData] = useState([])
  const [page, setPage] = useState("")

  useEffect(() => {
    api.get(`/character/?page=${page}`).then((response) => {
      if(!response.data.results){
        console.log("Vazio")
      }
      setData(response.data.results)
    }).catch((error) => {
      if(error.response.status === 404){
        console.log("Esta pagina nao contem este personagem")
      }
      console.error(error)
    })
  }, [page])

  return (
    <>
    <div className={style.wrapBtns}>
      <button onClick={() => setShow("prod")}>Produtos</button>
      <button onClick={() => setShow("api")}>API</button>
      <button onClick={() => setShow("map")}>Mapa</button>
    </div>
    <div  className={style.wrapPage}>
      <h1 className={style.title}>Exercícios de manutenção</h1>
     {show === "prod" &&
        <>
        <Row>
          <h2 className={style.title}>Showroom de produtos</h2>
            <div className={style.wrapCard}>
            {produtos.map((item) => {
              return(
                <Cards name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id}/>
              )
             })}
            </div>
          </Row>
        </>
      }
     {show === "api" &&
        <>
          <h2>Rick and Morty API</h2>
            <div>
               <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
            </div>
            <div>
            {data.map((item) => { 
             return(
              <div key={item.id}>
                <Cards name={item.name} desc={item.species} value={item.gender} image={item.image}>
                  <CardBody>
                    <Modals/>
                  </CardBody>
                </Cards>
        
                
              </div>
              )
           })}
            </div>
       </>
      }
     {show === "map" &&
        <>
      <h2>Mapa</h2>
          <div>
              mapa aqui
          </div>
         </>
      }
    </div>
    </>
  )
}

export default App
