import React,{Component} from 'react'
import './Covid.css'

const url = "https://data.covid19india.org/data.json"

class Covid extends Component{
   constructor(props){
    super(props)

    this.state={
        covidData:[]
    }
   }
    render(){
        console.log(this.state.covidData)
        return(
            <section className='tracker'>
                <h1>React CovidTracker</h1>
                 <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 cards">
                            <h4>Country Name</h4>
                            <h2>India</h2>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 cards">
                            <h4>Active Cases in India</h4>
                            <h2>{this.state.covidData.active}</h2>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 cards">
                            <h4>Confirmed Cases in India</h4>
                            <h2>{this.state.covidData.confirmed}</h2>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 cards">
                            <h4>Recovered Cases in India</h4>
                            <h2>{this.state.covidData.recovered}</h2>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 cards">
                           <h4>Deaths in India</h4>
                           <h2>{this.state.covidData.deaths}</h2>
                        </div>   
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 cards">
                            <h4>Last Updated</h4>
                            <h2>{this.state.covidData.lastupdatedtime}</h2>
                        </div>  
                    </div>
                 </div>
            </section>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data)=>{
            this.setState({covidData:data.statewise[0]})
        })
    }
}

export default Covid