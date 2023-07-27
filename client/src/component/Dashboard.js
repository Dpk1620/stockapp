import React, { useState } from 'react'
import axios from 'axios'

// import for using DatePicker, React-ui-kit and also use bootstraps classes for UI
import { MDBIcon, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Dashboard = () => {

    // state changes for From Date And ToDate And Ticker also
    const [data, setData] = useState([]);
    const [fromDate, setfromDate] = useState(new Date("2023-09-01"));
    const [toDate, setToDate] = useState(new Date("2023-09-01"));
    const [Ticker, setTicker] = useState()

    // Initial State for form Data for Every Field
    const [stockData, setstockData] = useState({
        stocksTicker: "AAPL",
        multiplier: "",
        timespan: "second",
        from: fromDate,
        to: toDate,
        adjusted: true,
        sort: "asc",
        limit: "",
    });

    // This handleChange Function use for adding the data in Form Section
    const handlechange = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target;

        setstockData((preve) => {
            return {
                ...preve,
                [name]: value,
            };
        });
    };

    // Handle Form Submit and call api function 
    const handleFormSubmit = async (e) => {
        // handle the reload Page option using prevent at event happening
        e.preventDefault();

        //defactor value from stockData 
        const { multiplier, timespan, stocksTicker, limit, sort } =
            stockData;

        // call Api for getting data 
        if (multiplier && timespan && stocksTicker && limit && sort) {
            axios.post('/fetchStockData', stockData)
                .then((response) => {
                    response = response.data

                    //handle response for results count not found or set data for rendering User-Interface
                    if (response.resultsCount > 0) {
                        setData(response.results)
                        setTicker(response.ticker)
                    } else {
                        setData([])
                        console.log("Data Not Found")
                    }

                });
        } else {
            console.log("All field required")
        }

    };
    return (
        <div >
            <div className="card text-center">
                <div className="card-header alert alert-success" role="alert">
                    <h3 > WHAT YOU EXPECT FROM THE UPCOMING <b style={{ textDecoration: "underline" }}>Stock</b> EVENT</h3>
                </div>
                <form onSubmit={handleFormSubmit}>

                    <div className="card-body">
                        <div className="row m-1">
                            <div className="col-sm-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="rowSame">
                                            <label htmlFor='stocksTicker' className='m-2'><b>stockTicker :</b></label>
                                            <select type="stocksTicker" name='stocksTicker'
                                                className='inputField'
                                                value={stockData.stocksTicker}
                                                onChange={handlechange}
                                                required placeholder="Select Ticker" >
                                                <option value="AAPL">AAPL</option>
                                                <option value="A">A</option>
                                                <option value="AAAU">AAAU</option>
                                                <option value="AA">AA</option>
                                                <option value="AAAU">AAAU</option>
                                                <option value="AABB">AABB</option>
                                                <option value="AAC">AAC</option>
                                                <option value="AAC.WS">AAC.WS</option>
                                                <option value="AACAY">AACAY</option>
                                                <option value="AACG">AACG</option>
                                                <option value="AACI">AACI</option>
                                                <option value="acdf">axsdf</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="rowSame">
                                            <label htmlFor="number" className='m-2 font-bold'> <b>Multipler : </b></label>
                                            <input type="number" value={stockData.multiplier} className='inputField' onChange={handlechange} id="number" name='multiplier' required placeholder="ex-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="rowSame">
                                            <label htmlFor="Timespan" className='m-2'><b>Timespan :</b></label>
                                            <select type="Timespan"
                                                value={stockData.timespan}
                                                className='inputField'
                                                onChange={handlechange}
                                                id="Timespan"
                                                name='timespan'
                                                required placeholder="select your Timespan" >
                                                <option value="second">second</option>
                                                <option value="minute">minute</option>
                                                <option value="hour">hour</option>
                                                <option value="day">day</option>
                                                <option value="week">week</option>
                                                <option value="month">month</option>
                                                <option value="quarter">quarter</option>
                                                <option value="year">year</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="rowSame">
                                            <label htmlFor="date" className='m-2'><b>From :</b></label>
                                            <DatePicker className='inputField' selected={fromDate} onChange={(date) => setfromDate(date)} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row m-1">
                            <div className="col-sm-3">
                                <div className="card">
                                    <div className="card-body ">
                                        <div className="rowSame">
                                            <label htmlFor="date" className='m-2'><b>To :</b></label>
                                            <DatePicker className='inputField' name='to' onChange={(date) => setToDate(date)} selected={toDate} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card p-0">
                                    <div className="card-body">
                                        <div className="rowSame">
                                            <label htmlFor="sort" className='m-2'><b>Sort :</b></label>
                                            <select type="sort"
                                                className='inputField'
                                                value={stockData.sort}
                                                onChange={handlechange}
                                                id="sort"
                                                name='sort'
                                                required placeholder="Enter your sort" >
                                                <option value="asc">asc</option>
                                                <option value="desc">desc</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card p-0">
                                    <div className="card-body">
                                        <div className="rowSame">
                                            <label htmlFor="limit" className='m-2'><b>Limit:</b></label>
                                            <input type="number" value={stockData.limit} name='limit' className='inputField' onChange={handlechange} id="limit" required placeholder="ex-1" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card-body">
                                    <button className='buttonStock' >
                                        click
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <MDBTable>
                    <MDBTableHead light>
                        <tr><th scope='col'>S.No</th>
                            <th scope='col'>Stock Ticker</th>
                            <th scope='col'>Close Price</th>
                            <th scope='col'>Highest Price</th>
                            <th scope='col'>Lowest Price</th>
                            <th scope='col'>No. of Transactions</th>
                            <th scope='col'>Open Price</th>
                            <th scope='col'>Trading Volume</th>
                            <th scope='col'>Volume Weighted Avg Price</th>
                        </tr>
                    </MDBTableHead>

                    <MDBTableBody>
                        {data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope='col'>{index + 1}</th>
                                    <td className='text-danger'>
                                        <MDBIcon className='me-1' fas icon='caret-down' />
                                        {Ticker}
                                    </td>
                                    <td className='text-success'>
                                        <MDBIcon className='me-1' fas icon='caret-up' />
                                        {item.c}
                                    </td>
                                    <td className='text-success'>
                                        <MDBIcon className='me-1' fas icon='caret-up' />
                                        {item.h}
                                    </td>
                                    <td className='text-success'>
                                        <MDBIcon className='me-1' fas icon='caret-up' />
                                        {item.l}
                                    </td>
                                    <td className='text-success'>
                                        <MDBIcon className='me-1' fas icon='caret-up' />
                                        {item.n}
                                    </td>
                                    <td className='text-danger'>
                                        <MDBIcon className='me-1' fas icon='caret-down' />
                                        {item.o}
                                    </td>
                                    <td className='text-danger'>
                                        <MDBIcon className='me-1' fas icon='caret-down' />
                                        {item.v}
                                    </td>
                                    <td className='text-danger'>
                                        <MDBIcon className='me-1' fas icon='caret-down' />
                                        {item.vw}
                                    </td>
                                </tr>
                            )
                        })}
                    </MDBTableBody>
                </MDBTable>
            </div>

        </div>
    )
}

export default Dashboard