import React, { useState }  from "react";
import { PieChart } from 'react-minimal-pie-chart';
import RangeSlider from 'react-bootstrap-range-slider';
import totalImg from "assets/total-sum.png";
import "./EmiCalculator.scss";

const EmiCalculator = () => {
  const [userValues, setUserValues] = useState({
    amount: 0,
    interest: 0,
    years: 0,
  });
    
  const [results, setResults] = useState({
    monthlyPayment: '',
    totalPayment: '',
    totalInterest: '',
    graphInterest: 50,
    graphPrincipal: 50,
    isResult: false,
  });
    
  const [error, setError] = useState('');
  const defaultLabelStyle = {
    fontSize: '6px',
    fontFamily: 'sans-serif',
    color: 'white'
  };
    
  //   const handleInputChange = (event) =>
  //   setUserValues({ ...userValues, [event.target.name]: event.target.value });
    
  const handleAmountInputChange = (event) => {
    setUserValues({ ...userValues, amount: event.target.value });
  }
    
  const handleInterestInputChange = (event) => {
    setUserValues({ ...userValues, interest: event.target.value });
  }
  const handleYearsInputChange = (event) => {
    setUserValues({ ...userValues, years: event.target.value });
  }
    
  // Manage validations and error messages
  const isValid = () => {
    const { amount, interest, years } = userValues;
    let actualError = '';
    if (!amount || !interest || !years) {
      actualError = 'All the values are required';
    }
    if (isNaN(amount) || isNaN(interest) || isNaN(years)) {
      actualError = 'All the values must be a valid number';
    }
    if (Number(amount) <= 0 || Number(interest) <= 0 || Number(years) <= 0) {
      actualError = 'All the values must be a positive number';
    }
    if (actualError) {
      setError(actualError);
      return false;
    }
    return true;
  };
    
  // Handle the data submited
  const handleSubmitValues = (e) => {
    e.preventDefault();
    if (isValid()) {
      setError('');
      calculateResults(userValues);
    }
    console.log('results 1', results);
  };
    
  // Calculation
  const calculateResults = ({ amount, interest, years }) => {
    const userAmount = Number(amount);
    const calculatedInterest = Number(interest) / 100 / 12;
    const calculatedPayments = Number(years) * 12;
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (userAmount * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      const monthlyPaymentCalculated = monthly.toFixed(2);
      const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(2);
      const totalInterestCalculated = (
        monthly * calculatedPayments -
        userAmount
      ).toFixed(2);
      const graphInterestCalculated = ((totalInterestCalculated / totalPaymentCalculated)*100).toFixed(0);
      const graphPrincipalCalculated = (100 - graphInterestCalculated).toFixed(0);
      // Set up results to the state to be displayed to the user
      setResults({
        monthlyPayment: monthlyPaymentCalculated,
        totalPayment: totalPaymentCalculated,
        totalInterest: totalInterestCalculated,
        graphInterest: graphInterestCalculated,
        graphPrincipal: graphPrincipalCalculated,
        isResult: true,
      });
    }
    return;
  };
    
  // Clear input fields
  // const clearFields = () => {
  //   setUserValues({
  //     amount: '',
  //     interest: '',
  //     years: '',
  //     graphInterest: 50,
  //     graphPrincipal: 50,
  //   });

  //   setResults({
  //     monthlyPayment: '',
  //     totalPayment: '',
  //     totalInterest: '',
  //     graphInterest: 50,
  //     graphPrincipal: 50,
  //     isResult: false,
  //   });
  // };
    
  return (
    <div className="emi-calculator">
      <div className="form">
        <h1><span>Easy way to </span> Calculate your EMI</h1>
        <p className='error'>{error}</p>
        <form onSubmit={handleSubmitValues}>
          <div className="row">
            <div className="col-12 col-md-8 slider-wrap">
              <div className="row slider-wrap__item">
                <div className="col-12">
                  <label id='label'>Loan Amount:</label>
                </div>
                <div className="col-9">
                  <RangeSlider
                    value={userValues.amount}
                    onChange={handleAmountInputChange}
                    size='lg'
                    variant='info'
                    min={0}
                    max={10000000}
                  />
                </div>
                <div className="col-3">
                  <div className="input-group mb-3">
                    <input
                      type='text'
                      name='amount'
                      placeholder='Loan amount'
                      className="form-control"
                      value={userValues.amount}
                      onChange={handleAmountInputChange}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text" id="amount">&#8377;</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row slider-wrap__item">
                <div className="col-12">
                  <label id='label'>Interest Rate:</label>
                </div>
                <div className="col-9">
                  <RangeSlider
                    value={userValues.interest}
                    onChange={handleInterestInputChange}
                    size='lg'
                    variant='info'
                    min={0}
                    max={100}
                  />
                </div>
                <div className="col-3">
                  <div className="input-group mb-3">
                    <input
                      type='text'
                      name='interest'
                      placeholder='Interest'
                      className="form-control"
                      value={userValues.interest}
                      onChange={handleInterestInputChange}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text" id="interest">%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row slider-wrap__item mb-4">
                <div className="col-12">
                  <label id='label'>Loan Tenure:</label>
                </div>
                <div className="col-9">
                  <RangeSlider
                    value={userValues.years}
                    onChange={handleYearsInputChange}
                    size='lg'
                    variant='info'
                    min={0}
                    max={15}
                  />
                </div>
                <div className="col-3">
                  <div className="input-group mb-5">
                    <input
                      type='text'
                      name='years'
                      placeholder='Years'
                      className="form-control"
                      value={userValues.years}
                      onChange={handleYearsInputChange}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text" id="years">Yrs</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button type='submit' className='btn btn-primary mt-2'>
                  {results.isResult ? 'Calculate Again' : 'Calculate'} 
                </button>
              </div>
            </div>
            <div className="col-4">
              <div className="results-wrap">
                <div className="graph-wrap mb-3">
                  <div className="pie-chart">
                    <PieChart
                      data={[
                        {
                          color: "#0e5fe2",
                          value: (results.graphPrincipal*10)/10
                        },
                        {
                          color: "#64e2f0",
                          value: (results.graphInterest*10)/10
                        },
                      ]}
                      radius={50}
                      label={({ dataEntry }) => dataEntry.value +'%'}
                      labelStyle={defaultLabelStyle}
                      labelPosition={60}
                    />
                  </div>
                  <p className="pt-5 text-center mb-0">
                    <span className="legend1 pr-3">Prinicipal Amount</span>
                    <span className="legend2">Loan Interest</span>
                  </p>
                </div>
                <div className='row calculation-wrap'>
                  <div className="col-12 px-0 total-amount mb-3 mt-2">
                    <div className="media">
                      <img className="mr-3 ml-3" height="50" src={totalImg} alt="icon" />
                      <div className="media-body">
                        <p className="mb-2">Total Payment (Prinicipal + Interest)</p>
                        <h3 className="mt-0">&#8377; {results.totalPayment || 0}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 px-0">
                    <label>Loan EMI</label>
                    <h4>&#8377; {results.monthlyPayment || 0}</h4>
                  </div>
                  <div className="col-4 px-0">
                    <label>Total Prinicipal</label>
                    <h4>&#8377; {userValues.amount || 0}</h4>
                  </div>
                  <div className="col-4 px-0">
                    <label>Interest Payable</label>
                    <h4>&#8377; {results.totalInterest || 0}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmiCalculator;
