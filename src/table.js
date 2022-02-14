import { useState } from 'react'

export default function TableComponent({ showHandler }) {
  const listArr = JSON.parse(localStorage.getItem('nameList'))
  const [nameList, setNameList] = useState(listArr)
  const DeleteRow = (name) => {
    let updateArr = nameList.filter((data) => data.id !== name.id)
    setNameList(updateArr)
    localStorage.setItem('nameList', JSON.stringify(updateArr))
  }
  return (
    <>
      <input
        type="button"
        onClick={() => showHandler()}
        name="back"
        value="Back"
      />
      <table id="List">
        <tr>
          <th>S.no</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
        <tbody id="body">
          {nameList && nameList.length !== 0 ? (
            nameList.map((data, id) => {
              return (
                <tr>
                  <td>{id + 1}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>
                    <input
                      type="button"
                      onClick={() => showHandler(data)}
                      name="update"
                      value="Update"
                    />
                  </td>
                  <td>
                    <input
                      type="button"
                      onClick={() => {
                        DeleteRow(data)
                      }}
                      name="delete"
                      value="delete"
                    />
                  </td>
                </tr>
              )
            })
          ) : (
            <div>No data available.</div>
          )}
        </tbody>
      </table>
    </>
  )
}
