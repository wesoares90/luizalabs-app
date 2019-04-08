import React, { Component } from 'react';
import './Maps.scss';

class Maps extends Component {
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
            </div>
          </div>
        </div>
      );
    }

  }
}

export default Maps;