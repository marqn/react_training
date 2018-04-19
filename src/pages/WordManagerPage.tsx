import * as React from "react";

interface State{
    
}

interface Props {
    txt?:string
}

export class WordManagerPage extends React.Component<Props, State> {
    
    static defaultProps = {
        txt: 'WordManagerPage'
      }

    render() { 
        
        return <div>
            <p>{this.props.txt}</p>
        </div>
    }
}