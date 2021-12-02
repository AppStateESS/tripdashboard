'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Trip from './Trip'

const StudentInfo = ({student, searchResult}) => {
  return (
    <div>
      <div>
        <h3>Student</h3>
        <p>
          {student.firstName} {student.lastName} |{' '}
          <a href="mailto:{student.email}">{student.email}</a> |{' '}
          <a href="tel:+1{student.phone}">{student.phone}</a>
        </p>
        <hr />
        <h3>Upcoming trips</h3>
        {searchResult.length === 0 ? (
          <div className="alert alert-info">No current trips found.</div>
        ) : null}
        <div className="row">
          {searchResult.map((trip, key) => {
            return (
              <div className="col-6" key={key}>
                <div className="card mb-3">
                  <div className="card-body">
                    <Trip trip={trip} key={key} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

StudentInfo.propTypes = {
  student: PropTypes.object,
  searchResult: PropTypes.array,
}

export default StudentInfo
