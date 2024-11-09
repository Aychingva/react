 export function Experience({experience}){
    return <>
      <h3>Experience</h3>
      {
        experience.map(element=><p key={element.id}>{element.companyName}:{element.companyposition}
          </p>)}
    </>
  }
  