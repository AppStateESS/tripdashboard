'use strict'
import React, {useState, useEffect, useRef} from 'react'
import ReactDOM from 'react-dom'
import {getItem} from '../api/Fetch'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import StudentInfo from './StudentInfo'

const Search = () => {
  const [loading, setLoading] = useState(false)
  const [bannerId, setBannerId] = useState('')
  const [searchResult, setSearchResult] = useState(null)
  const [student, setStudent] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const idInput = useRef()

  const updateBannerId = (bannerId) => {
    if (!isNaN(bannerId) && bannerId.length < 10) {
      setBannerId(bannerId)
    }
  }

  const checkEnter = (event) => {
    if (event.keyCode === 13 && !loading) {
      searchForStudent()
    }
  }

  useEffect(() => {
    if (bannerId.length === 9) {
      searchForStudent()
    }
  }, [bannerId])

  const searchForStudent = () => {
    setNotFound(false)
    setLoading(true)
    setStudent(null)
    getItem('Search/find', {studentBannerId: bannerId}).then((response) => {
      const {data} = response
      if (data.student === false) {
        setNotFound(true)
      } else {
        setSearchResult(data.trips)
        setStudent(data.student)
      }
      setLoading(false)
    })
  }

  const resetSearch = () => {
    updateBannerId('')
    setSearchResult('')
    setNotFound(false)
    setStudent(null)
    idInput.current.focus()
  }

  let backToTop = null
  if (student !== null) {
    backToTop = (
      <div className="border-top mt-4 pt-4 text-center">
        <button
          className="btn btn-outline-dark"
          onClick={() => {
            idInput.current.focus()
          }}>
          Return to top
        </button>
      </div>
    )
  }

  const printSearchResult = () => {
    if (!loading) {
      if (searchResult == 'found') {
        return (
          <div className="alert alert-success">Student information below.</div>
        )
      } else {
        switch (searchResult) {
          case 'noconnect':
            return (
              <div className="alert alert-danger">
                Could not connect to server.
              </div>
            )

          case 'timeout':
            return (
              <div className="alert alert-danger">
                Server request timed out. Try again in a few seconds.
              </div>
            )

          case 'incomplete':
            return (
              <div className="alert alert-danger">
                Server returned an incomplete result.
              </div>
            )

          case 'missing':
            return <div className="alert alert-warning">Student not found.</div>

          case 'unknown':
            return <div className="alert alert-danger">Unknown error.</div>
        }
      }
    }
  }

  return (
    <div>
      <div className="row d-print-none">
        <div className="col-8 mx-auto">
          <div className="card">
            <div className="card-body">
              <span className="float-right">
                <a
                  className="btn btn-sm btn-outline-danger"
                  href="./secure/logout.php">
                  <i className="fas fa-sign-out-alt"></i>&nbsp;Logout
                </a>
              </span>
              <h3 className="card-title">Enter student Banner ID</h3>

              <div className="input-group mb-3">
                <input
                  ref={idInput}
                  type="text"
                  name="bannerId"
                  className="form-control"
                  style={{fontSize: '28px'}}
                  onKeyUp={checkEnter}
                  onChange={(e) => updateBannerId(e.target.value)}
                  value={bannerId}
                />
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={resetSearch}>
                  Clear
                </button>
              </div>

              {loading ? (
                <p className="lead text-center">
                  <FontAwesomeIcon icon="spinner" size="lg" spin />
                  &nbsp;Searching for student...
                </p>
              ) : (
                printSearchResult()
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        {student && (
          <StudentInfo student={student} searchResult={searchResult} />
        )}
        {notFound && (
          <div className="alert alert-danger">
            This student could not be found.
          </div>
        )}
        {backToTop}
      </div>
    </div>
  )
}

ReactDOM.render(<Search />, document.getElementById('Search'))
