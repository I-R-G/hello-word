import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <Fragment>
    <Head>
      <title>{props.meetupData.title}</title>
      <meta name = "description" content = {props.meetupData.description}/>
    </Head>
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.title}
      description={props.meetupData.description}
    />
    </Fragment>
  );
}

// This function must be present in dinamic pages such this one when using "getStaticProps"
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://testuser:nWW7KuXK2TFzSnfp@cluster0.lv82h.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  //return all objects, no filter critereas
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking", //true and blocking tell paths that the routes may not be exhausting, false return the error page
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  //fetch data for a single prop

  const meetupId = context.params.meetupId; // meetupId = [meetupId] set in the file name

  const client = await MongoClient.connect(
    "mongodb+srv://testuser:nWW7KuXK2TFzSnfp@cluster0.lv82h.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)})

  client.close();

  return {
    props : {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description
      }
    }
  };
}

export default MeetupDetails;
