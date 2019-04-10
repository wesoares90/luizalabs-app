import React, { Component } from 'react';
import './Maps.scss';
import GoogleMapReact from 'google-map-react';

const Marker = () => (
  <div className="marker"></div>
);

class Maps extends Component {
  render() {
    if (this.props.address.erro) {
      return (
        <div className="row justify-content-md-center">
          <div className="col-md-6">
            <div className="content-map">
              <p>Não foi possivel localizar o endereço através do CEP digitado.</p>
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
                  bootstrapURLKeys={{ key: 'AIzaSyDeQ0Td3ryfHSrEP2_1KAytnkyLPsUvmdQ' }}
                  defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}
                  defaultZoom={18}
                >
                  <Marker
                    lat={this.props.lat}
                    lng={this.props.lng}
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