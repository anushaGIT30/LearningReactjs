import { useEffect, useState } from "react"


const App = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1)
  //here first is the side effect
  //second is the clean-up-function
  //third is the comma seperated dependiencies

  //variation 1   :  runs on every render
  /*useEffect(() => {
    alert("this is useEffect")
  })*/

  //variation 2 : runs on only 1st render
  /* useEffect(() => {
     alert("i will run for first render");
 
   }, [])*/
  //variation 3: runs when we updated
  /*useEffect(() => {
    alert("i will run only when the count is updated")
  }, [count]) */

  //variation 4 : 
  /*
    useEffect(() => {
      alert("i will lean every time when count/total is updated ")
    }, [count, total])
    */

  //variation 5 : adding a cleanup function
  useEffect(() => {
    alert("count is updated")

    return () => {
      alert("count is unmounted from ui")
    }
  }, [count])


  function handleClick() {
    setCount(count + 1);

  }
  function handleTotal() {
    setTotal(total + 1)
  }


  /*useEffect(() => {
    first

    return () => {
      second
    }
  }, [third])
*/
  return (
    <div>
      <h1>hi iam learning useEffectHook</h1>
      <button onClick={handleClick}>updateCount</button>
      count is:{count}
      <button onClick={handleTotal}>updateTotalCount</button>
      count is:{total}
    </div>
  )
}

export default App
