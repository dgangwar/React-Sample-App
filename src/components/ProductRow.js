import {React, Component} from 'react';

class ProductRow extends Component{

    constructor(props){
        super(props);
    }

    render(){
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                {props.price}
            </td>
        </tr>
    }

}