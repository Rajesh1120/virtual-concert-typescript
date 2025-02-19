import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCalendar, FaClock } from 'react-icons/fa';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  image: string;
  artist: string;
}

const Section = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const EventCard = styled(Link)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.3s ease;

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

const ViewAllButton = styled(Link)`
  display: block;
  width: fit-content;
  margin: 3rem auto 0;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const UpcomingConcerts = () => {
  const events: Event[] = [
    {
      id: 1,
      title: "Summer Jazz Night",
      date: "2024-06-15",
      time: "20:00",
      image: "/images/concert1.jpg",
      artist: "Jazz Ensemble"
    },
    {
      id: 2,
      title: "Rock Revolution",
      date: "2024-06-20",
      time: "21:00",
      image: "/images/concert2.jpg",
      artist: "The Electric Stones"
    },
    {
      id: 3,
      title: "Classical Evening",
      date: "2024-06-25",
      time: "19:30",
      image: "/images/concert3.jpg",
      artist: "Symphony Orchestra"
    }
  ];

  return (
    <Section>
      <Container>
        <Title>Upcoming Concerts</Title>
        <Grid>
          {events.slice(0, 3).map(event => (
            <EventCard key={event.id} to={`/event/${event.id}`}>
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
              </EventInfo>
            </EventCard>
          ))}
        </Grid>
        <ViewAllButton to="/events">See All Events</ViewAllButton>
      </Container>
    </Section>
  );
};

export default UpcomingConcerts;
