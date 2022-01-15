import React from 'react'
import { useEffect ,useState } from 'react';
import Tracker from './Tracker';

const Covid = () => {
    
    const [data,setData] = useState([]);
    const getCovidData = async () => {
        try{
       const res = await fetch('https://data.covid19india.org/data.json');
       const resData = await res.json();
       console.log(resData.statewise[0]);
       setData(resData.statewise[0]);
       console.log(data);
        } 
        catch(err){
            throw err;
            console.log(err);
        }

    }

    useEffect(() => {

        getCovidData();
        
    },[]);
    return (
        <>
            <h1 className='text-center mt-5 pb-5'>Covid tracker App</h1>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Tracker heading='Country' values='INDIA'/>
                    </div>
                    <div className='col-md-4'>
                    <Tracker heading='Confirmed' values={data.confirmed}/>
                    </div>
                    <div className='col-md-4'>
                    <Tracker heading='Deaths' values={data.deaths}/>
                    </div>
                </div>
            </div>
            <div className='container mt-5 pb-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Tracker heading='Recovered' values={data.recovered}/>
                    </div>
                    <div className='col-md-4'>
                    <Tracker heading='Active' values={data.active}/>
                    </div>
                    <div className='col-md-4'>
                    <Tracker heading='Last Updated' values={data.lastupdatedtime}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Covid;
