import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendar, FaClock, FaTicketAlt } from 'react-icons/fa';

const EventListingContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 3rem;
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const EventCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const EventImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const EventInfo = styled.div`
  padding: 1.5rem;
`;
const EventMainTitle=styled.h2`
  color: ${({ theme })=> theme.colors.mainColor}
`;
const EventTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const EventDetail = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.5rem;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const ViewButton = styled(Link)`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 1rem;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const EventListing = () => {
  const events = [
    {
      id: 1,
      title: "Billish Ellish concert",
      date: "2024-06-15",
      time: "20:00",
      image: "/images/billieeilish.jpg",
      artist: "Billish Eilish",
      price: "Free",
    },
    {
      id: 2,
      title: "Taylor swift Era",
      date: "2024-06-20",
      time: "21:00",
      image: "/images/taylorswift.jpg",
      artist: "Taylor Swift",
      price: "Free",
    },
    {
      id: 3,
      title: "Dean Lewis 's Band ",
      date: "2024-06-25",
      time: "19:30",
      image: "/images/Dean-lewis.jpg",
      artist: "Symphony Orchestra",
      price: "Free",
    },
    {
      id: 4,
      title: "Pop Extravaganza - Rihanna",
      date: "2024-07-01",
      time: "20:30",
      image: "/images/Rihanna.jpg",
      artist: "Rihanna",
      price: "Free",
    },
    {
      id: 5,
      title: "Electronic Dance Night with Black Pink",
      date: "2024-07-05",
      time: "22:00",
      image: "./images/black-pink.jpg",
      artist: "Black  Pink",
      price: "Free",
    },
    {
      id: 6,
      title: "Folk Music Festival with Annie",
      date: "2024-07-10",
      time: "18:00",
      image: "/images/annie.jpg",
      artist: "Marshallow - annie",
      price: "Free",
    },
    {
      id: 7,
      title: "Hip Hop Showcase",
      date: "2024-07-15",
      time: "21:30",
      image: "/images/images-drangons.jpg",
      artist: "images Drangons",
      price: "Free",
    },
    {
      id: 8,
      title: "Blues & Soul Night",
      date: "2024-07-20",
      time: "20:00",
      image: "/images/sabrina-carpenter.jpg",
      artist: "Sabrina carpenter",
      price: "Free",
    },
    {
      id: 9,
      title: "World Music Fusion",
      date: "2024-07-25",
      time: "19:00",
      image: "/images/harry-styles.jpg",
      artist: "Harry styles",
      price: "Free",
    }
    // Add more events as needed
  ];

  return (
    <EventListingContainer>
      <EventMainTitle>
          Upcoming Events
      </EventMainTitle>
      <EventGrid>
        {events.map((event) => (
          <EventCard key={event.id}>
            <EventImage src={event.image} alt={event.title} />
            <EventInfo>
              <EventTitle>{event.title}</EventTitle>
              <EventDetail>
                <FaCalendar />
                {new Date(event.date).toLocaleDateString()}
              </EventDetail>
              <EventDetail>
                <FaClock />
                {event.time}
              </EventDetail>
              <EventDetail>
                <FaTicketAlt />
                {event.price}
              </EventDetail>
              <ViewButton to={`/event/${event.id}`}>View Event</ViewButton>
            </EventInfo>
          </EventCard>
        ))}
      </EventGrid>
    </EventListingContainer>
  );
};

export default EventListing; 