import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { FaCalendar, FaClock, FaTicketAlt, FaUser, FaMusic } from 'react-icons/fa';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  image: string;
  artist: string;
  price: string;
  genre: string;
  description: string;
  streamUrl: string;
}

const EventContainer = styled.div`
  max-width: 1200px;
  margin: 5rem auto;
  padding: 0 2rem;
`;

const EventHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EventImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
`;

const EventInfo = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 2rem;
  border-radius: 10px;
`;

const EventTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const EventDetailItem = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const Description = styled.div`
  margin-top: 2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.secondary};
  
`;

const TicketButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  margin-top: 1rem;
  
  &:disabled {
    background: ${({ theme }) => theme.colors.textSecondary};
    cursor: not-allowed;
  }
`;

const StreamContainer = styled.div`
  margin-top: 2rem;
  background: black;
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
`;

const StreamIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const EventDetail = () => {
  const { id } = useParams();
  const [hasTicket, setHasTicket] = useState(false);

  // Mock event data - in a real app, this would be fetched from an API
  const events: Record<number, Event> = {
    1: {
      id: 1,
      title: "Billish Ellish concert",
      date: "2024-06-15",
      time: "20:00",
      image: "/images/billieeilish.jpg",
      artist: "Billish Eilish",
      price: "Free",
      genre: "Jazz",
      description: "Join us for an enchanting evening of smooth jazz featuring the renowned Jazz Ensemble. Experience the magic of improvisation and rhythm in this intimate virtual concert.",
      streamUrl: "https://www.youtube.com/embed/live_stream?channel=UCxxx"
    },
    2: {
      id: 2,
      
      title: "Taylor swift Era",
      date: "2024-06-20",
      time: "21:00",
      image: "/images/taylorswift.jpg",
      artist: "Taylor Swift",
      price: "Free",
      genre: "Rock",
      description: "Get ready to rock with The Electric Stones! This high-energy virtual concert will feature their greatest hits and new material from their latest album.",
      streamUrl: "https://www.youtube.com/embed/live_stream?channel=UCyyy"
    },
    3: {
      id: 3,
      title: "Dean Lewis 's Band ",
      date: "2024-06-25",
      time: "19:30",
      image: "/images/Dean-lewis.jpg",
      artist: "Dean Lewis",
      price: "Free",
      genre: "Classical",
      description: "Experience the majesty of classical music with the Symphony Orchestra performing masterpieces from Mozart, Beethoven, and more.",
      streamUrl: "https://www.youtube.com/embed/live_stream?channel=UCzzz"
    },
    4: {
      id: 4,
      title: "Pop Extravaganza - Rihanna",
      date: "2024-07-01",
      time: "20:30",
      image: "/images/Rihanna.jpg",
      artist: "Rihanna",
      price: "Free",
      genre: "Pop",
      description: "Luna Stars brings their chart-topping hits to this virtual spectacular, featuring stunning visuals and special guest appearances.",
      streamUrl: "https://www.youtube.com/embed/live_stream?channel=UCwww"
    },
    5: {
      id: 5,
      title: "Electronic Dance Night with Black Pink",
      date: "2024-07-05",
      time: "22:00",
      image: "./images/black-pink.jpg",
      artist: "Black  Pink",
      price: "Free",
      genre: "Electronic",
      description: "Get ready to dance with DJ Pulse's immersive electronic music experience, featuring stunning visuals and bass-heavy beats.",
      streamUrl: "https://www.youtube.com/embed/live_stream?channel=UCvvv"
    },
    6:{
      id: 6,
      title: "Folk Music Festival with Annie",
      date: "2024-07-10",
      time: "18:00",
      image: "/images/annie.jpg",
      artist: "Marshallow - annie",
      price: "Free",
      genre: "Electronic",
      description: "Get ready to dance with DJ Pulse's immersive electronic music experience, featuring stunning visuals and bass-heavy beats.",
      streamUrl: "https://www.youtube.com/embed/live_stream?channel=UCvvv"
    
    },
    7:{
      id: 7,
      title: "Hip Hop Showcase",
      date: "2024-07-15",
      time: "21:30",
      image: "/images/images-drangons.jpg",
      artist: "images Drangons",
      price: "Free",
      genre: "Electronic",
      description: "Get ready to dance with DJ Pulse's immersive electronic music experience, featuring stunning visuals and bass-heavy beats.",
      streamUrl: "https://www.youtube.com/embed/live_stream?channel=UCvvv"
    
    },
    8:{
      id: 8,
      title: "Blues & Soul Night",
      date: "2024-07-20",
      time: "20:00",
      image: "/images/sabrina-carpenter.jpg",
      artist: "Sabrina carpenter",
      price: "Free",
      genre: "Electronic",
      description: "Get ready to dance with DJ Pulse's immersive electronic music experience, featuring stunning visuals and bass-heavy beats.",
      streamUrl: "https://www.youtube.com/embed/live_stream?channel=UCvvv"
    
    },
    9:{
      id: 9,
      title: "World Music Fusion",
      date: "2024-07-25",
      time: "19:00",
      image: "/images/harry-styles.jpg",
      artist: "Harry styles",
      price: "Free",
      genre: "Electronic",
      description: "Get ready to dance with DJ Pulse's immersive electronic music experience, featuring stunning visuals and bass-heavy beats.",
      streamUrl: "https://www.youtube.com/embed/live_stream?channel=UCvvv"
    
    }
  };

  const event = events[Number(id)];

  if (!event) {
    return <div>Event not found</div>;
  }

  const handleTicketPurchase = () => {
    // In a real app, this would handle payment processing
    setHasTicket(true);
  };

  return (
    <EventContainer>
      <EventHeader>
        <div>
          <EventImage src={event.image} alt={event.title} />
          <Description>
            <h2>About the Event</h2>
            <p>{event.description}</p>
          </Description>
        </div>
        
        <EventInfo>
          <EventTitle>{event.title}</EventTitle>
          <EventDetailItem>
            <FaCalendar />
            {new Date(event.date).toLocaleDateString()}
          </EventDetailItem>
          <EventDetailItem>
            <FaClock />
            {event.time}
          </EventDetailItem>
          <EventDetailItem>
            <FaUser />
            {event.artist}
          </EventDetailItem>
          <EventDetailItem>
            <FaMusic />
            {event.genre}
          </EventDetailItem>
          <EventDetailItem>
            <FaTicketAlt />
            {event.price}
          </EventDetailItem>
          
          {!hasTicket ? (
            <TicketButton onClick={handleTicketPurchase}>
              Get Free Access
            </TicketButton>
          ) : (
            <TicketButton disabled>
              Access Granted
            </TicketButton>
          )}
        </EventInfo>
      </EventHeader>

      {hasTicket && (
        <div>
          <h2>Live Stream</h2>
          <StreamContainer>
            <StreamIframe
              src={event.streamUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </StreamContainer>
        </div>
      )}
    </EventContainer>
  );
};

export default EventDetail;