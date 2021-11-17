'use strict'
import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Listing = ({listing, loading, removeSite}) => {
  if (loading) {
    return <div>Loading sites...</div>
  }
  if (listing.length === 0) {
    return <div>No triptrack sites added.</div>
  }
  return (
    <div>
      <table className="table table-striped">
        <tbody>
          {listing.map((value) => {
            return (
              <tr key={`thing-${value.id}`}>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      removeSite(value.id)
                    }}>
                    X
                  </button>
                </td>
                <td>{value.branchDirectory}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

Listing.propTypes = {listing: PropTypes.array, loading: PropTypes.bool}

export default Listing
