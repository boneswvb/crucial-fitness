import React, { useState, useEffect, useContext } from 'react';

import { Context } from '../contextProvider/LogonContextP';
import UserProfile from '../components/userProfile/UserProfile';

function PatientPersonalDetailsCon() {
  const { userInfo } = useContext(Context);
  const [allResults, setAllResults] = useState([]);
  console.log('userInfo', userInfo);
  console.log('allResults', allResults);

  const ListOfResults = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/PatientDetails')
      const jsonData = await response.json()
      for (let i = 0; i < jsonData.length; i++) {
        return jsonData.map(data => userInfo.email === data.email ? setAllResults(allResults => [...allResults, data]) : null)
      }
    }
    catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    ListOfResults()
  }, [userInfo])

  return (
    <div>
      {
        allResults.map((items, i) => {
          return (
            < UserProfile
              key={i}
              id={allResults[i].p_id}
              email={allResults[i].email}
              fullname={allResults[i].fullname}
              lastname={allResults[i].lastname}
              dateofbirth={allResults[i].dateofbirth}
              adress={allResults[i].adress}
              cellno={allResults[i].cellno}
              econtact={allResults[i].econtact}
              ecellno={allResults[i].ecellno}
              relationship={allResults[i].relationship}
              date={allResults[i].date}
              allresults={allResults}
            />
          );
        })
      }
    </div>
  )
}

export default PatientPersonalDetailsCon;