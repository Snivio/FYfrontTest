import React,{Component} from 'react';

class Test extends Component{
 constructor(props) {
    super(props)
    this.state={githubData:{},data:[]};
    this.state = {
      requestFailed: false
    }
  }

  componentDidMount() {
   fetch('http://localhost:8000/571978').
        then(response => 
            {
                if(!response.ok)
                {
                    throw Error("Network request failed")
                }
                return response
            }
        ).then(d => d.json()).
        then(d => {
         if(d!=null)
          {
            var t=[];
            t=d;
          //  this.setState({githubData :this.state.data});
        
           console.log(t);
        } 
        else
        {
         alert("No Records Found");
        }
            //comment             
              }, () => {
                     this.setState({
                       requestFailed: true
                     })
                   })
                
      }
  

  render() {

   
    return (
      <div>
       {this.state.githubData}
      </div>
    )
  }

}
export default Test;