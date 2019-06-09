import React, { Component } from 'react';


class Validation extends Component{

    
    render(){
       
        if(this.props.textLength<5){
            return( 
                <p > {this.props.textLength} is too short !</p>
            )
        }else{
            return( 
                <p > {this.props.textLength} is enough length !</p>
            )
        }
       
    }

}



export default Validation;