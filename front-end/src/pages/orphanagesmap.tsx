import React, { useEffect, useState} from 'react';

//map import
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

//route import
import { Link } from 'react-router-dom';

//image and icon import
import mapMarkerImg from '../images/map-marker.svg';
import { FiPlus, FiArrowRight} from 'react-icons/fi';

//css import
import '../styles/pages/orphanages-map.css';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanage{
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap(){
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            console.log(response.data);
            setOrphanages(response.data);
        });
    }, []);

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

            {orphanages.map(orphanage => {
                return (
                    <Marker
                    icon={mapIcon}
                    position={[orphanage.latitude,orphanage.longitude]}
                    key={orphanage.id}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        {orphanage.name}
                        <Link to={`/orphanages/${orphanage.id}`}>
                            <FiArrowRight size={20} color="#FFF"/>
                        </Link>
                    </Popup>
                </Marker>
                )
            })}
            </Map>

            <Link to='/orphanages/create' className="create-orphanage">
                 <FiPlus size={32} color='#FFF' />
            </Link>
        </div>
    );
}

export default OrphanagesMap;