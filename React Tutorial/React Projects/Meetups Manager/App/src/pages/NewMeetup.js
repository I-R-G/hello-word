import {useHistory} from "react-router-dom"
import NewMeetupForm from "../components/meetups/NewMeetupForm"

function NewMeetupsPage(){
    const history = useHistory()

    function addMeetUpHandler(meetupData){
        fetch(
            "https://react-course-825eb-default-rtdb.firebaseio.com/meetups.json", //include json for firebase
            {
                method: "POST", 
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-Type" : "application/json"
                }
            }
        ).then(() => {
            history.replace("/")
        })
        
    }

    return (
      <section>
          <h1>Add New Meetup</h1>
          <NewMeetupForm onAddMeetup = {addMeetUpHandler}/>
      </section>
    )
}

export default NewMeetupsPage