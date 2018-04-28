import React,{Component} from 'react';
import './Navbar.css'
import Displaycard from './Cards'
import { Col ,Card,CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';
import $ from 'jquery'
import {Line,Doughnut} from 'react-chartjs-2';


var chartData=[],donutData=[]

class Navbar extends Component{
constructor(props){
    super(props)
    this.state={userName:'',sMedia:'',options:'' ,data:[],
  cardData:[ 
                {
                post:'He will Be killed Very Soon',
                postNumber:'1',
                polarity:'1.8'
            },
            {
                post:'max will commit Suicide',
                postNumber:'2',
                polarity:'1.9'
            },
            {
                post:'The Building Should be Bombarded',
                postNumber:'3',
                polarity:'1.8'
            },
            {
                post:'its Time to Kill',
                postNumber:'4',
                polarity:'1.8'
            }

    ]}
    
       
    this.handleSearch=this.handleSearch.bind(this);
    this.smediadd=this.smediadd.bind(this);
    this.getdata=this.getdata.bind(this);
    this.changeText=this.changeText.bind(this);

}


changeText(event){
    this.setState({userName:event.target.value});
    }


smediadd(event){
    var a=$('#sdia').val();
    this.state.sMedia=a;
    
}

getdata(event){
    var b=$('#gdata').val();
    this.state.options=b;
   
}

    handleSearch(event)
    {
       
$( document ).ready(function() {
   $(".infoData").css({display: "none"});
   $(".dataDisplayed").css({display: "block"});
});

var name=this.state.userName;
var mdia=this.state.sMedia;
var tp=this.state.options;


console.log(name);
fetch('http://192.168.43.181:8000/twitter/cnn').
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
            this.state.cardData=[];
            chartData=[];
        
        this.state.data=d;
        

        this.setState({cardData : this.state.data});

        console.log(this.state.data);
        } 
        else
        {
         alert("No Records Found");
        }
chartData = {
         labels: this.state.data.map(k => k.postNumber),
            datasets: [
              {
                 fill: false,
                label: 'polarity of post',
                data: this.state.data.map(d => d.polarity),
                borderColor: 'rgb(10, 58, 135)',             
                backgroundColor: '#4FC3F7',
                borderCapStyle: 'butt',
              },
             
            ]
          };
          this.setState({ chartData });         // alert(chartData); snivios code for chart here
                this.setState({
                  
              });
//this.state.data.map(d=>d.json())

//console.log(this.state.data.polarity[1]);
var dummy1=0,dummy2=0,total,pospercent,negpercent;

    for (var i = 0; i < this.state.data.length; i++) {
        if(this.state.data[i].polarity > 1.5){
            dummy1++;
        }
        else{
            dummy2++;
        }
    } 

    total=dummy1+dummy2;
    negpercent= Math.ceil((dummy1*100)/total);
    pospercent=Math.ceil((dummy2*100)/total);
    console.log(pospercent,negpercent);
 

   donutData = {
	labels: [
		'Positive User Data',
		'Negative User Data',
	],
	datasets: [{
		data: [pospercent,negpercent],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		]
	}]
};
this.setState({ donutData });         
                this.setState({
                  
              });
            //comment             
              }, () => {
                     this.setState({
                       requestFailed: true
                     })
                   })

        event.preventDefault();
    }    

    render(){
            let dCards= this.state.cardData.map(c=>{
                return(
                        <Col  className="cardspace">
                        <Displaycard c={c}/>
                        </Col>
                )
            })

    


        return(
            <div className="parent">
                                <div className="parentNavbar">
                                <nav class="navbar navbar-expand-lg navbar-light bg-light">


                                    <form onSubmit={this.handleSearch}>
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                            
                                    <input type="text" class="form-control" placeholder="User Name" value={this.state.userName} onChange = {this.changeText}/>
                                    </div>
                                    <div class="form-group col-md-4">

                                  


                                    <select id="inputState" class="form-control" onChange={this.smediadd} id="sdia">
                                        <option selected>Social Media</option>
                                        <option value="Facebook">Facebook</option>
                                        <option value="Twitter">Twitter</option>
                                    </select>
                                    </div>
                                    <div class="form-group col-md-2">
                                    <select id="inputState" class="form-control" onChange={this.getdata} id="gdata">
                                        <option selected>Get</option>
                                        <option value="Users">Users</option>
                                        <option value="Followers">Followers</option>
                                    </select>
                                    </div>
                                    <div class="form-group col">
                                    <button type="submit" class="btn btn-secondary">Search</button>
                                    </div>
                                </div>
                                    
                                </form>
                                </nav>
                                 </div>
                                 
<div className="infoData">
  <div class="parallax"></div>


 <Card>
        <CardBody>
         
            <br/>
            <br/>


          <CardTitle>SOCIAL MEDIA THREAT ANALYSIS USING DATA MINING AND SENTIMENT ANALYSIS</CardTitle>
          <br/>
          <br/>
          <CardSubtitle>With the increase in the use of social media by terrorist organizations and 
          the likes for things like recruitment along with the rise of Cyber Crime,Cyber bullying etc.We Provide a tool
         to help law enforcement agencies such as the police department assess the threat levels of individuals on social media 
         networks such as Facebook and Twitter and take necessary actions.
         <br/>
         <br/>
          By Just Entering the Name of the Suspect and Choosing From The Media Source Like Facebook or Twitter the details of
             the Suspect can be Obtained Which can be used For Investigation Person
             </CardSubtitle>

            <br/>
            <br/>
        </CardBody>
      </Card>


   <div class="parallax"></div>
</div> 




                    <div className="dataDisplayed">
                                <div className="dispc">
                                    {dCards}      
                                </div>
                                    <div className="graphs">
                                                <div class="card">
                                                
                                                <Line data={this.state.chartData}  height="170px" />
                                                
                                                </div>

                                                <div class="card">
                                                
                                                <Doughnut data={this.state.donutData}  height="170px" />
                                                
                                                </div>
                                    </div>
                                

                    </div>
                



             </div>   
              
        )
    }
}
export default Navbar;