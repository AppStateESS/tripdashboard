'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

const Trip = ({trip}) => {
  const {
    approved,
    contactName,
    contactEmail,
    contactPhone,
    destinationCity,
    destinationState,
    destinationCountry,
    host,
    housingAddress,
    secContactEmail,
    secContactName,
    secContactPhone,
    submitEmail,
    submitName,
    submitDate,
    timeDeparting,
    timeEventStarts,
    timeReturn,
    visitPurpose,
  } = trip
  return (
    <div>
      <div className="mb-3">
        {approved === 1 ? (
          <span className="float-right badge badge-success">Approved</span>
        ) : (
          <span className="float-right badge badge-danger">Not approved</span>
        )}
        <h4>Submitted</h4>
        <p>
          <strong>Submitted by</strong>:{' '}
          <a href={`mailto:${submitEmail}`}>{submitName}</a> on{' '}
          {dayjs().format('MMM D, YYYY', submitDate)}
          <br />
          <strong>Purpose:</strong> {visitPurpose}
        </p>
      </div>
      <div className="mb-3">
        <h4>Destination</h4>
        <p>
          <strong>Host:</strong> {host}
          <br />
          <strong>Location:</strong> {destinationCity}, {destinationState},{' '}
          {destinationCountry}
          <br />
          <strong>Housing:</strong> {housingAddress}
        </p>
      </div>

      <div className="row">
        <div className="col-6 mb-3">
          <h4>Primary contact</h4>
          <p>
            {contactName}
            <br />
            <a href="mailto:{contactEmail}">{contactEmail}</a>
            <br />
            <a href="tel:+1{contactPhone}">{contactPhone}</a>
          </p>
        </div>
        <div className="col-6 mb-3">
          <h4>Secondary contact</h4>
          <p>
            {secContactName}
            <br />
            <a href={`mailto:${secContactEmail}`}>{secContactEmail}</a>
            <br />
            <a href={`mailto:${secContactPhone}`}>{secContactPhone}</a>
          </p>
        </div>
      </div>

      <div className="mb-3">
        <h4>Itinerary</h4>
        <p>
          <strong>Departing:</strong>{' '}
          {dayjs.unix(timeDeparting).format('MMM D, YYYY')} <br />
          <strong>Event start:</strong>{' '}
          {dayjs.unix(timeEventStarts).format('MMM D, YYYY')} <br />
          <strong>Returning:</strong>{' '}
          {dayjs.unix(timeReturn).format('MMM D, YYYY')}
          <br />
        </p>
      </div>
    </div>
  )
}

Trip.propTypes = {trip: PropTypes.object}

export default Trip
