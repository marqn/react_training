import * as React from "react";

interface State{
    
}

interface Props {
    txt?:string
}

export class LearnPage extends React.Component<Props, State> {
    
    static defaultProps = {
        txt: 'Learn me'
      }

    render() { 
        
        return <div>
            <p>{this.props.txt}</p>
        </div>
    }
}