import React, { Component } from 'react';
import './Search.scss';
import fetchJsonp from 'fetch-jsonp';
import InputMask from 'react-input-mask';
import Maps from '../maps/Maps';

const apiLatLon = 'https://nominatim.openstreetmap.org/?format=json&addressdetails=1&format=json&limit=1&q='

class Search extends Component {

  constructor() {
    super();
    this.state = {
      dataAddress: null,
      lat: null,
      lng: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {

    event.preventDefault();
    const cep = event.target.cep.value;
    const apiRest = 'https://viacep.com.br/ws/' + cep + '/json/';

    fetchJsonp(apiRest, {
      jsonpCallback: 'callback',
    }).then(function (response) {
      return response.json()
    }).then(dataAddress => {
      console.log(dataAddress)
      this.getLatLon(dataAddress);
    }).catch(function (error) {
      console.log('parsing failed', error)
    })

  }

  getLatLon(dataAddress) {
    fetch(apiLatLon + dataAddress.logradouro)
      .then(response => response.json())
      .then(dataLatLon => {
        this.setState({
          lat: Number(dataLatLon[0].lat),
          lng: Number(dataLatLon[0].lon),
          dataAddress: dataAddress
        })
      }).catch(function (error) {
        console.log('parsing failed', error)
      })
  }

  render() {

    let viewMap;

    if (this.state.dataAddress !== null) {
      viewMap = <Maps address={this.state.dataAddress} lat={this.state.lat} lng={this.state.lng} />
    }

    return (
      <div>
        <div className="row justify-content-md-center">
          <div className="col-md-6">
            <h2>Consulta de endereço</h2>
            <div className="bg-header">
              <h6>Consultar</h6>
              <form className="form-inline" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>CEP</label>
                  <InputMask type="text" id="cep " name="cep" mask="99999-999" className="form-control mx-sm-2" />
                </div>
                <button className="btn btn-primary">Buscar</button>
              </form>
            </div>
          </div>
        </div>
        {viewMap}
      </div>
    );
  }
}

export default Search;