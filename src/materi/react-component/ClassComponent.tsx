import { Component } from "react";

interface Props {}
interface State {}

export default class ClassComponent extends Component<Props, State> {
    state = {}

    render(){
        return (
            <div>
               <h1>Ini Class Component</h1> 
            </div>
        );
    }
}