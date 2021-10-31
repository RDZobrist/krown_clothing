import React from 'react';

export class AddProduct extends React.Component  {
    constructor(props){
        super(props);

        this.state= {
            nameofProductToAdd: '',
            priceofProductToAdd: null,
            
        }
    }
}
