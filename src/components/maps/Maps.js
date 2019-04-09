import React, { Component } from 'react';
import './Maps.scss';
import GoogleMapReact from 'google-map-react';

const apiKey =  'AIzaSyDeQ0Td3ryfHSrEP2_1KAytnkyLPsUvmdQ';
const Marker = () => (
  <div className="marker"></div>
);

class Maps extends Component {
  
  static defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11
  };
  render() {
    if (this.props.address.erro) {
      return (
        <div className="row justify-content-md-center">
          <div className="col-md-6">
            <div className="content-map">
              <p>Não foi possivel localizar o endereço digitado.</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row justify-content-md-center">
          <div className="col-md-6">
            <div className="content-map">
              <h5><b>{this.props.address.logradouro}</b></h5>
              <span>{this.props.address.bairro}</span>
              <span>{this.props.address.localidade} - {this.props.address.uf}</span>
              <span>{this.props.address.cep}</span>
              <div className="google-map">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: apiKey }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                >
                  <Marker
                    lat={59.955413}
                    lng={30.337844}
                    text={this.props.address.cep}
                  />
                </GoogleMapReact>
              </div>
            </div>
          </div>
        </div>
      );
    }

  }
}

export default Maps;