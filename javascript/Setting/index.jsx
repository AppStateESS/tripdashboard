'use strict'
import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import {saveDirectory, getList, deleteSite} from '../api/Fetch'
import Listing from './Listing'

const Setting = () => {
  const [branchDirectory, setBranchDirectory] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const [loading, setLoading] = useState(true)
  const [listing, setListing] = useState([])

  const load = () => {
    getList('./tripdashboard/Site/list').then((response) => {
      setListing(response.data)
    })
  }

  const removeSite = (id) => {
    deleteSite(id).then(() => {
      load()
      setBranchDirectory('')
    })
  }

  const addDirectory = () => {
    saveDirectory(branchDirectory)
      .then((response) => {
        if (response.data.success) {
          setErrorMessage(null)
          setSuccessMessage('Branch added')
          setBranchDirectory('')
          load()
          setTimeout(() => {
            setSuccessMessage(null)
          }, 3000)
        } else {
          setErrorMessage(response.data.message)
          setSuccessMessage(null)
        }
      })
      .catch(() => {
        setErrorMessage('Could not connect to server')
      })
  }

  useEffect(() => {
    load()
  }, [])
  return (
    <div>
      <h3>Settings</h3>
      <div className="row">
        <div className="col-sm-4">
          <label>Trip Track Branch Directory</label>
        </div>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            placeholder="e.g. /var/www/branches/branchName"
            value={branchDirectory}
            onChange={(e) => {
              setBranchDirectory(e.target.value)
            }}
          />
          {errorMessage && (
            <span className="badge badge-danger">{errorMessage}</span>
          )}
          {successMessage && (
            <span className="badge badge-success">{successMessage}</span>
          )}
        </div>
      </div>
      <button
        className="btn btn-success"
        onClick={addDirectory}
        disabled={branchDirectory.length === 0}>
        Add Trip Track installation
      </button>
      <hr />
      <h3>Current Trip Track branches</h3>
      <Listing {...{listing, removeSite}} />
    </div>
  )
}

ReactDOM.render(<Setting />, document.getElementById('Setting'))
