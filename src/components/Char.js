import React, {Component} from 'react';


class Char extends Component {
    
    render(){
        const style = {
            display: 'inline-block',
            padding: '16px',
            margin: '16px',
            border: '1px solid black',
            textAlign: 'center'
        };


        return (
            <div style={style} onClick={this.props.clicked}>
             {this.props.character}
            </div>
        );
    }
}

export default Char;