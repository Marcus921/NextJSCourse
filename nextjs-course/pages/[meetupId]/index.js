import { getStaticProps } from '..';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
    return ( 
        <MeetupDetail 
            image='https://i.pinimg.com/originals/32/be/41/32be418b4194710188f7f1caa6d74ae5.jpg' 
            title="First Meetup" 
            dress="Some Street 5, Some City" 
            description="Some Meetup"/>
           
    );
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;

    console.log(meetupId)

    return {
        props: {
            meetupData: {
                image: 'https://i.pinimg.com/originals/32/be/41/32be418b4194710188f7f1caa6d74ae5.jpg',
                id: meetupId,
                title: 'First Meetup',
                adress: 'Some Street 5, Some City',
                description: 'Some Meetup'

            }
        }
    }
}

export default MeetupDetails;