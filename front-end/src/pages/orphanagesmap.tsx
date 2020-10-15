import React from 'react';

//map import
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

//route import
import { Link } from 'react-router-dom';

//image and icon import
import mapMarkerImg from '../images/map-marker.svg';
import { FiPlus } from 'react-icons/fi';

//css import
import '../styles/pages/orphanages-map.css';

function orphanagesmap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Jaraguá do Sul</strong>
                    <span>Santa Catarina</span>
                </footer>
            </aside>

            <Map 
                center={[-26.4324885,-49.4361765]}
                zoom={10}
                style={{ width: '100%', height: '100%'}}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
                <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </Map>

            <Link to='' className="create-orphanage">
                 <FiPlus size={32} color='#FFF' />
            </Link>
        </div>
    );
}

export default orphanagesmap;