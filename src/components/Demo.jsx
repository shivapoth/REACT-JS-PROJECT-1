import React from 'react'
import LeftDashboard from './left_dashboard/LeftDashboard'
import RightDashboard from './right_dashboard/RightDashboard'

const Demo = () => {
  return (
    <div>
      <h1 className=''>Example of Dashboard</h1>
      <div className='dashboard'>
        <div className='row'>
          <div className='col-lg-2 col-md-2 col-sm-12'>
            <div className='left-dashboard'>
              <h1>Left</h1>
              <LeftDashboard/>
            </div>
          </div>
          <div className='col-lg-10 col-md-10 col-sm-12'>
            <div className='right-dashboard'>
              <h1>Right</h1>
             <RightDashboard/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo
