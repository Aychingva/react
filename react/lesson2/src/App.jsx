import User from "./components/User"


function App() {
  

  return (
    <>
      <User
        fullname="jane"
        desc="lorem"
        experience={[
          {
            id:1,
            companyName:"meta",
            companyposition:"full stack"
          },
          {
            id:2,
            companyName:"tesla",
            companyposition:"full stack"
          },
        ]}
      />
    </>
  )
}

export default App
