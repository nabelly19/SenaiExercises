import { useState, useEffect } from 'react'

import { Cards } from './components/Card'
import { CardApi } from './components/CardApi'
import { api } from "./api/rmApi"
import Alerts from './components/Alert'
import produtos from './constants/produtos.json'
import style from './App.module.css'

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

import Row from 'react-bootstrap/Row';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {
  const [show, setShow] = useState("")
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [name, setName] = useState("")

  const position = [-25.425469399567525,-49.272850435665674]

  useEffect(() => {
    api.get(`/character/?page=${page}&name=${name}`).then((response) => {
      if (!response.data.results) {
        console.log("Vazio")
      }
      setData(response.data.results)
    }).catch((error) => {
      if (error.response.status === 404) {
        <Alerts />
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
      <div className={style.wrapPage}>
        <h1 className={style.title}>Exercícios de manutenção</h1>
        {show === "prod" &&
          <>
            <Row>
              <h2 className={style.title}>Showroom de produtos</h2>
              <div className={style.wrapCard}>
                {produtos.map((item) => {
                  return (
                    <Cards name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} />
                  )
                })}
              </div>
            </Row>
          </>
        }
        {show === "api" &&
          <>
            <Row>
              <div className={style.wrapPage}>
                <h2 className={style.title}>Rick and Morty API</h2>
              </div>
              <div>
                <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)} className={style.title} />
                <input type="text" placeholder="Procurar personagem" value={name} onChange={(event) => setName(event.target.value)} />
              </div>
              <div className={style.wrapCard2}>
                {data.map((item) => {
                  return (
                    <div key={item.id}>
                      <CardApi name={item.name} desc={item.species} value={item.gender} image={item.image}></CardApi>
                    </div>

                  )
                })}
              </div>
            </Row>
          </>
        }

        {show === "map" &&
          <>
            <h2 className={style.title}>Mapa</h2>
            <div>
              <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: "500px", height: "500px" }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    <a href="https://www.google.com/maps/place/Sistema+Fiep+-+Unidade+Centro/@-25.4248819,-49.2726859,20z/data=!4m6!3m5!1s0x94dce41197a84179:0x142fc7abe5169a05!8m2!3d-25.4249717!4d-49.272306!16s%2Fg%2F1ptznr269?entry=ttu">Google Maps</a>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default App
