import React from 'react'
import Card from './Components/Card'

const App = () => {

  const jobOpenings = [
  {
    id: 1,
    companyName: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png",
    posted: "5 days ago",
    jobProfile: "Frontend Software Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$120/h",
    location: "Bangalore, India",
    saved: false
  },
  {
    id: 2,
    companyName: "Microsoft",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
    posted: "1 week ago",
    jobProfile: "React Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$140/h",
    location: "Hyderabad, India",
    saved: true
  },
  {
    id: 3,
    companyName: "Amazon",
    logo: "https://images.seeklogo.com/logo-png/29/2/amazon-icon-logo-png_seeklogo-297884.png",
    posted: "3 days ago",
    jobProfile: "UI Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$110/h",
    location: "Delhi, India",
    saved: false
  },
  {
    id: 4,
    companyName: "Meta",
    logo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    posted: "2 days ago",
    jobProfile: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$150/h",
    location: "Remote",
    saved: false
  },
  {
    id: 5,
    companyName: "Apple",
    logo: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
    posted: "1 week ago",
    jobProfile: "UI/UX Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$160/h",
    location: "Bangalore, India",
    saved: true
  },
  {
    id: 6,
    companyName: "Netflix",
    logo: "https://static.vecteezy.com/system/resources/previews/020/335/987/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
    posted: "4 days ago",
    jobProfile: "Frontend Platform Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$170/h",
    location: "Remote",
    saved: false
  },
  {
    id: 7,
    companyName: "Adobe",
    logo: "https://i.pinimg.com/736x/56/3a/a2/563aa2189ef92dc242a7db5b91078804.jpg",
    posted: "6 days ago",
    jobProfile: "UI Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$115/h",
    location: "Noida, India",
    saved: false
  },
  {
    id: 8,
    companyName: "Tesla",
    logo: "https://toppng.com/uploads/preview/tesla-cars-png-download-11664186508vx0lfwqs7v.png",
    posted: "2 weeks ago",
    jobProfile: "Frontend Web Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$145/h",
    location: "Remote",
    saved: true
  },
  {
    id: 9,
    companyName: "Spotify",
    logo: "https://png.pngtree.com/element_our/png/20181011/spotify-social-media-icon-design-template-vector-png_127005.jpg",
    posted: "3 days ago",
    jobProfile: "Web UI Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$130/h",
    location: "Remote",
    saved: false
  },
  {
    id: 10,
    companyName: "Uber",
    logo: "https://download.logo.wine/logo/Uber/Uber-Logo.wine.png",
    posted: "5 days ago",
    jobProfile: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$135/h",
    location: "Bangalore, India",
    saved: false
  }
];



  return (
    <div className='parent'>

    {jobOpenings.map(function(elem, idx){
      return <div key={idx}>
        <Card  company={elem.companyName} logo = {elem.logo} posted={elem.posted} profile= {elem.jobProfile} tag1= {elem.tag1} tag2={elem.tag2} location ={elem.location} pay={elem.pay} saved={elem.saved} />
      </div>
    })}
    </div>
  )
}

export default App