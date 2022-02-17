import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Triforium_Fridays_Night_2.jpg/330px-Triforium_Fridays_Night_2.jpg",
    address:
      "Meetupstreet 5 ,12345 Meetup which you definitely should not miss",
    description:
      "This is a first ,amazing meetup which you definitely should not miss .It will on this",
  },
  {
    id: "m2",
    title: "This is a Second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/South_Coast_Plaza_entrance.jpg/300px-South_Coast_Plaza_entrance.jpg",
    address:
      "Meetupstreet 5 ,12345 Meetup which you definitely should not miss",
    description:
      "This is a second ,amazing meetup which you definitely should not miss .It will on this",
  },
];

function AllMeetupPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {

    setIsLoading(true);
    fetch(
      "https://react-getting-started-85bc9-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        const meetups = [];

        for(const key in data){
            const meetup = {
                id : key,
                ...data[key]
            };

            meetups.push(meetup)
        }


        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h2>All Meetups</h2>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupPage;
