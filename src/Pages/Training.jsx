import React ,{useEffect}from 'react'

const Training = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
    return (
        <div className="  z-20 my-36 overflow-x-auto" >
            <table>
    <tr>
      <th>Category / Day</th>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wednesday</th>
      <th>Tursday</th>
      <th>Friday</th>
      <th>Saturday</th>
      <th>Sunday</th>
    </tr>
    <tr>
      <td className="font-extrabold">Ecole</td>
      <td className="font-bold"></td>
      <td className="font-bold">15.00</td>
      <td className="font-bold"></td>
        <td className="font-bold">18.00</td>
        <td className="font-bold">15.00</td>
      <td className="font-bold"></td>
        <td className="font-bold">17.30</td>
    </tr>
    <tr>
        <td className="font-extrabold">Minime</td>
          <td className="font-bold">15.00</td>
          <td className="font-bold"></td>
          <td className="font-bold">15.30</td>
          <td className="font-bold">15.30</td>
          <td className="font-bold"></td>  
          <td className="font-bold"></td>
          <td className="font-bold">16.30</td>
      </tr>
      <tr>
        <td className="font-extrabold">Cadet</td>
          <td className="font-bold">15.00</td>
          <td className="font-bold"></td>
          <td className="font-bold"></td>
          <td className="font-bold">17.00</td>
          <td className="font-bold">15.00</td>
          <td className="font-bold"></td>
          <td className="font-bold"></td>
      </tr>
      <tr>
        <td className="font-extrabold">Cadette</td>
        <td className="font-bold"></td>
        <td className="font-bold"></td>
          <td className="font-bold">21.00</td>
          <td className="font-bold"></td>
          <td className="font-bold"></td>
          <td className="font-bold">20.00</td>
          <td className="font-bold"></td>
      </tr>
      <tr>
        <td className="font-extrabold">Junior</td>
          <td className="font-bold">15.00</td>
          <td className="font-bold"></td>
          <td className="font-bold"></td>
          <td className="font-bold">19.00</td>
          <td className="font-bold"></td>
          <td className="font-bold">14.00</td>
          <td className="font-bold"></td>
      </tr>
   
  
  </table>
        </div>
    )
}

export default Training
