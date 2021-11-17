import Head from "next/head" //add the metatags 
import { MongoClient } from "mongodb";
import React, { Fragment } from "react";
import Layout from "../components/layout/Layout";
import MeetUpList from "../components/meetups/MeetupList";
  
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React meetups</title>
        <meta name = "description" content = "Browse a huge list of highly active React meetups"/>
      </Head>
      <MeetUpList meetups={props.meetups} />;
    </Fragment>
  )
  
}

//  export async function getServerSideProps(context){

//    const req = context.req
//    const res = context.res

//    fetch data from API
//    return {
//      props: {
//        meetups: DUMMY_DATA
//      },
//    }
//  }

//  Static rendering, the data is pre-rendered before the component
// The code here is not exposed to to client so you can write directly here without exposing the credentials
// So you don't have to create and write another api file
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://testuser:nWW7KuXK2TFzSnfp@cluster0.lv82h.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray()

  client.close()

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString()
      }))
    },
    revalidate: 1, //  info is updated every one second
  };
}

export default HomePage;
