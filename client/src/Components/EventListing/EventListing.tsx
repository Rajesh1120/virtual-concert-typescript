import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendar, FaClock, FaTicket, FaVideo } from 'react-icons/fa6';

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
  margin-bottom: 3rem;
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

const IconWrapper = ({ icon: Icon }: { icon: React.ElementType }) => {
  return Icon ? <Icon /> : null;
};

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

const WatchButton = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: ${({ theme }) => theme.colors.mainColor};
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 1rem;
  margin-left: 0.5rem;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Tab = styled.div<{ active: boolean }>`
  padding: 1rem 2rem;
  cursor: pointer;
  color: ${({ active, theme }) => active ? theme.colors.mainColor : theme.colors.mainColor};
  text-decoration: ${({ active}) => active ? "underline" : "none"};
  border-bottom: 2px solid ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  font-weight: ${({ active }) => active ? 'bold' : 'normal'};
  font-size: 1.2rem;
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
  }
`;

const EventListing = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed'>('upcoming');
  const [upcomingEvents, setUpcomingEvents] = useState<any[]>([]);
  const [completedEvents, setCompletedEvents] = useState<any[]>([]);

  const events = [
    {
      id: 1,
      title: "Billish Ellish concert",
      date: "2025-06-15",
      time: "20:00",
      image: "/images/billieeilish.jpg",
      artist: "Billish Eilish",
      price: "Free",
    },
    {
      id: 2,
      title: "Taylor swift Era",
      date: "2025-06-20",
      time: "21:00",
      image: "/images/taylorswift.jpg",
      artist: "Taylor Swift",
      price: "Free",
    },
    {
      id: 3,
      title: "Dean Lewis 's Band ",
      date: "2025-06-25",
      time: "19:30",
      image: "/images/Dean-lewis.jpg",
      artist: "Symphony Orchestra",
      price: "Free",
    },
    {
      id: 4,
      title: "Pop Extravaganza - Rihanna",
      date: "2025-07-01",
      time: "20:30",
      image: "/images/Rihanna.jpg",
      artist: "Rihanna",
      price: "Free",
    },
    {
      id: 5,
      title: "Electronic Dance Night with Black Pink",
      date: "2025-07-05",
      time: "22:00",
      image: "./images/black-pink.jpg",
      artist: "Black  Pink",
      price: "Free",
    },
    {
      id: 6,
      title: "Folk Music Festival with Annie",
      date: "2025-07-10",
      time: "18:00",
      image: "/images/annie.jpg",
      artist: "Marshallow - annie",
      price: "Free",
    },
    {
      id: 7,
      title: "Hip Hop Showcase",
      date: "2025-07-15",
      time: "21:30",
      image: "/images/images-drangons.jpg",
      artist: "images Drangons",
      price: "Free",
    },
    {
      id: 8,
      title: "Blues & Soul Night",
      date: "2025-07-20",
      time: "20:00",
      image: "/images/sabrina-carpenter.jpg",
      artist: "Sabrina carpenter",
      price: "Free",
    },
    {
      id: 9,
      title: "World Music Fusion",
      date: "2025-07-25",
      time: "19:00",
      image: "/images/harry-styles.jpg",
      artist: "Harry styles",
      price: "Free",
    },
    // Add some completed events with streamed URLs
    {
      id: 10,
      title: "Rock Concert 2023",
      date: "2023-12-15",
      time: "20:00",
      image: "/images/rock-concert.jpg",
      artist: "Rock Band",
      price: "completed",
      streamedUrl: "https://www.youtube.com/watch?v=example1",
    },
    {
      id: 11,
      title: "Jazz Festival 2023",
      date: "2023-11-20",
      time: "19:30",
      image: "/images/jazz-festival.jpg",
      artist: "Jazz Ensemble",
      price: "completed",
      streamedUrl: "https://www.youtube.com/watch?v=example2",
    },
    {
      id: 12,
      title: "Classical Symphony",
      date: "2023-10-10",
      time: "18:00",
      image: "/images/classical.jpg",
      artist: "Symphony Orchestra",
      price: "completed",
      streamedUrl: "https://www.youtube.com/watch?v=example3",
    }
  ];

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Process events to add streamedUrl to all expired events
    const processedEvents = events.map(event => {
      const eventDate = new Date(event.date);
      if (eventDate < today && !event.streamedUrl) {
        // Add a default streamedUrl for expired events that don't have one
        return {
          ...event,
          streamedUrl: `https://www.youtube.com/watch?v=default-${event.id}`,
          price: "completed"
        };
      }
      return event;
    });
    
    const upcoming = processedEvents.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate >= today;
    });
    
    const completed = processedEvents.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate < today;
    });
    
    setUpcomingEvents(upcoming);
    setCompletedEvents(completed);
  }, [events]);

  const renderEvents = (events: any[]) => {
    return events.map((event) => {
      const isCompleted = new Date(event.date) < new Date();
      
      return (
        <EventCard key={event.id}>
          <EventImage src={event.image} alt={event.title} />
          <EventInfo>
            <EventTitle>{event.title}</EventTitle>
            <EventDetail>
              <IconWrapper icon={FaCalendar as React.ElementType} />
              {new Date(event.date).toLocaleDateString()}
            </EventDetail>
            <EventDetail>
              <IconWrapper icon={FaClock as React.ElementType} />
              {event.time}
            </EventDetail>
            <EventDetail>
              <IconWrapper icon={FaTicket as React.ElementType} />
              {isCompleted ? "Completed" : event.price}
            </EventDetail>
            <div style={{ display: 'flex' }}>
              {isCompleted ? (
                <WatchButton href={event.streamedUrl} target="_blank" rel="noopener noreferrer">
                  <IconWrapper icon={FaVideo as React.ElementType} /> Watch
                </WatchButton>
              ) : (
                <ViewButton to={`/event/${event.id}`}>View Event</ViewButton>
              )}
            </div>
          </EventInfo>
        </EventCard>
      );
    });
  };

  return (
    <EventListingContainer>
      <TabContainer>
        <Tab 
          active={activeTab === 'upcoming'} 
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming Events
        </Tab>
        <Tab 
          active={activeTab === 'completed'} 
          onClick={() => setActiveTab('completed')}
        >
          Completed Events
        </Tab>
      </TabContainer>
      
      {activeTab === 'upcoming' ? (
        <>
          <EventMainTitle>Upcoming Events</EventMainTitle>
          <EventGrid>
            {renderEvents(upcomingEvents)}
          </EventGrid>
        </>
      ) : (
        <>
          <EventMainTitle>Completed Events</EventMainTitle>
          <EventGrid>
            {renderEvents(completedEvents)}
          </EventGrid>
        </>
      )}
    </EventListingContainer>
  );
};

export default EventListing; 