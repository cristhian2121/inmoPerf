import React, { Component } from 'react';
import * as firebase from 'firebase'

class FormComponent extends Component {

    constructor(props){
        super(props)
        this.saveButton=this.saveButton.bind(this);
    }
    
    componentWillMount() {        
        this.getType();
        this.getCity();
        this.getInmo();        
    }

    render() {
        return (
            <div>                
                <h1>hola, {this.props.name}</h1>
                <div id="formType">
                    <label htmlFor="type" type="text" className="col-md-4 col-md-offset-4">Tipo de inmueble
                    <select name="type" id="tipoinmueble" className="form-control">
                            <option value="" disabled selected>Ques buscas?</option>
                            <option value="1">Lotes</option>
                            <option value="2">Apartamentos</option>
                            <option value="3">Casas</option>
                            <option value="4">Hoteles</option>
                        </select>
                    </label>
                    <div>
                        <label htmlFor="city" type="text" className="col-md-4 col-md-offset-4">Ciudad:
                    <select name="city" id="city" className="paola">
                                <option value="" disabled selected>Donde lo buscas?</option>
                                <option value="1">Santa marta</option>
                                <option value="2">Barranquilla</option>
                                <option value="3">Cartagena</option>
                                <option value="4">Guajira</option>

                            </select>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="saleRent" type="text" className="col-md-4 col-md-offset-4">Venta y/o alquiler:
                    <select className="mdb-select md-form paola" name="saleRent" id="saleRent">
                                <option value="" disabled selected>Elige la opción</option>
                                <option value="1">Venta</option>
                                <option value="2">Alquiler</option>
                            </select>
                        </label>
                    </div>
                    <div className="button col-md-4 col-md-offset-4">
                        <button type="button" id="btnFind" className="btn btn-info btn-responsive btninter"
                            onClick={this.saveButton}>Guardar</button>
                    </div>
                </div>
            </div>
        );
    }
    getType() { 
        const databaseRef = firebase.database().ref().child('tipo');
        databaseRef.on('value', function (snapshot) {
            console.log(`Los datos son: ${snapshot.val()}`)
        })
    }

    getCity(){
        const databaseRef = firebase.database().ref().child('ciudad');
        databaseRef.on('value', function(snapshot){
            console.log(`los destinos son: ' ${snapshot.val()}`)
        })
    }

    getInmo(){
        const databaseRef = firebase.database().ref().child('inmuebles');
        databaseRef.on('value',function(snapshot){
            console.log(`disponibles ${snapshot.val()}`);
        })
    }

    saveButton(){
        let city,type,inmo;
        city = document.getElementByClassName('paola').value
        type = document.getElementById('tipoinmueble').value
        inmo = document.getElementById('saleRent').value
        console.log(city +type +inmo );
    }


}
export default FormComponent;