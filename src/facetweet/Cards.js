import React,{Component} from 'react';
import { Card, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';



class Displaycard extends Component{
constructor(props){
    super(props);
}

   


    render(){
        return(
           <div>
            <Card>
                <CardBody>
                <CardTitle>{this.props.c.post}</CardTitle>
                <CardSubtitle>{this.props.c.polarity}</CardSubtitle>
                </CardBody>
            </Card>
            </div>
        )
    }
}
export default Displaycard;