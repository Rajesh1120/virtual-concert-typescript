import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCalendar, FaClock, FaTicketAlt } from 'react-icons/fa';

const EventListingContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
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
      title: "Summer Jazz Night",
      date: "2024-06-15",
      time: "20:00",
      image: "/images/concert1.jpg",
      artist: "Jazz Ensemble",
      price: "Free",
    },{
      id: 2,
      title: "Rock Revolution",
      date: "2024-06-20",
      time: "21:00",
      image: "/images/concert2.jpg",
      artist: "The Electric Stones",
      price: "Free",
    },
    {
      id: 3,
      title: "Classical Evening",
      date: "2024-06-25",
      time: "19:30",
      image: "/images/concert3.jpg",
      artist: "Symphony Orchestra",
      price: "Free",
    },
    {
      id: 4,
      title: "Pop Extravaganza",
      date: "2024-07-01",
      time: "20:30",
      image: "/images/concert4.jpg",
      artist: "Luna Stars",
      price: "Free",
    },
    {
      id: 5,
      title: "Electronic Dance Night",
      date: "2024-07-05",
      time: "22:00",
      image: "/images/concert5.jpg",
      artist: "DJ Pulse",
      price: "Free",
    },
    {
      id: 6,
      title: "Folk Music Festival",
      date: "2024-07-10",
      time: "18:00",
      image: "/images/concert6.jpg",
      artist: "The Wanderers",
      price: "Free",
    },
    {
      id: 7,
      title: "Hip Hop Showcase",
      date: "2024-07-15",
      time: "21:30",
      image: "/images/concert7.jpg",
      artist: "Urban Poets",
      price: "Free",
    },
    {
      id: 8,
      title: "Blues & Soul Night",
      date: "2024-07-20",
      time: "20:00",
      image: "/images/concert8.jpg",
      artist: "The Soul Sisters",
      price: "Free",
    },
    {
      id: 9,
      title: "World Music Fusion",
      date: "2024-07-25",
      time: "19:00",
      image: "/images/concert9.jpg",
      artist: "Global Harmony",
      price: "Free",
    }
    // Add more events as needed
  ];

  return (
    <EventListingContainer>
      <h2>Upcoming Events</h2>
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