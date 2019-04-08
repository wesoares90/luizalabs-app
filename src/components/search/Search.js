import React, { Component } from 'react';
import './Search.scss';
import fetchJsonp from 'fetch-jsonp';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import Maps from '../maps/Maps';

class Search extends Component {

  constructor() {
    super();
    this.state = {
      dataAddress: null
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
      this.setState({ dataAddress })
    }).catch(function (error) {
      console.log('parsing failed', error)
    })

  }

  render() {

    let viewMap;

    if (this.state.dataAddress !== null) {
      viewMap = <Maps address={this.state.dataAddress} />
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

Search.propTypes = {
  cep: PropTypes.string,
  logradouro: PropTypes.string,
  complemento: PropTypes.number,
  bairro: PropTypes.string,
  localidade: PropTypes.string,
  uf: PropTypes.string,
  unidade: PropTypes.number,
  ibge: PropTypes.number,
  gia: PropTypes.number
};

export default Search;