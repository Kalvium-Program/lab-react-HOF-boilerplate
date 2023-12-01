import React, { Component } from "react"

class HigherOrderComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
                { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
                { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }

            ]
        }
    }

    render() {
        const { userData } = this.state
       let FirstletterData = userData.filter(ele => ele.name[0]=="J")
       let UserTypeData = userData.filter(ele=> ele.user_type == "Designer")
       let AgeFilterData = userData.filter(ele=> ele.age > 28 && ele.age<=58)
       let DesignerExperience = UserTypeData.reduce((a,b)=> a.years+b.years)
        return <>
             {userData.map((ele) => (
                <li key={ele.id}>
                    <span>ID: {ele.id}</span>
                    <span>NAME: {ele.name}</span>
                    <span>USERTYPE: {ele.user_type}</span>
                    <span>AGE:{ele.age}</span>
                    <span>YEARS: {ele.years}</span>
                </li>
            ))}
             <div>
                <h2>
                    Display First Letter J
                </h2>
                {FirstletterData.map((ele) => (
                <li key={ele.id}>
                    <span>ID: {ele.id}</span>
                    <span>NAME: {ele.name}</span>
                    <span>USERTYPE: {ele.user_type}</span>
                    <span>AGE:{ele.age}</span>
                    <span>YEARS: {ele.years}</span>
                </li>
            ))}
             </div>
            <div>
                <h3>
                    Display on the Basic of Age
                </h3>
                {AgeFilterData.map((ele) => (
                <li key={ele.id}>
                    <span>ID: {ele.id}</span>
                    <span>NAME: {ele.name}</span>
                    <span>USERTYPE: {ele.user_type}</span>
                    <span>AGE:{ele.age}</span>
                    <span>YEARS: {ele.years}</span>
                </li>
            ))}
            </div>
          
            <div>
                <h3>
                    Display Based on User Type
                </h3>
                {UserTypeData.map((ele) => (
                <li key={ele.id}>
                    <span>ID: {ele.id}</span>
                    <span>NAME: {ele.name}</span>
                    <span>USERTYPE: {ele.user_type}</span>
                    <span>AGE:{ele.age}</span>
                    <span>YEARS: {ele.years}</span>
                </li>
            ))}
            </div>
           

         <div>
            <h3>Display Designer Experience</h3>
            <p>{DesignerExperience}</p>
         </div>
        </>
    }
}

export default HigherOrderComponent