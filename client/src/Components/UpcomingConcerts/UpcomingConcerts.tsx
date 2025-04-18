import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaCalendar, FaClock } from 'react-icons/fa6';
import React from 'react';
// import { theme } from '../styles/theme';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  image: string;
  artist: string;
}
interface SetActiveProps {
  setActiveLink: React.Dispatch<React.SetStateAction<activeLinks>>;
}
interface activeLinks {
  "Home": boolean,
  "Events": boolean,
  "About": boolean,
  "Logout": boolean,
  "Artists": boolean
  
}
interface NextButtonProps{
  i: number;
  j: number;
  
}
interface PrevButtonProps{
  edgecase?:boolean;
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
  align-items: center;
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
  height: 300px;
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

const IconWrapper = ({ icon: Icon }: { icon: React.ElementType }) => {
  return Icon ? <Icon /> : null;
};

const PrevButton= styled.button<PrevButtonProps>`
  position : absolute;
  padding: 1rem;
  height: 50px;
  left: 0;
  cursor:pointer;
  border:none;
  background-color: ${(({edgecase})=>(edgecase? "rgb(202, 107, 153)": "rgb(240, 95, 165)"))}

  color: white;
  
    
`;
const NextButton = styled.button`
  position: absolute;
  right:0;
  padding:1rem;
  height: 50px;
  cursor:pointer;
  border:none;
  background-color:rgb(240, 95, 165) ;
  color: white;
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

const UpcomingConcerts : React.FC<SetActiveProps> =({setActiveLink}) => {
  const [nextPrevButtonVal, setNextPrevButtonVal]=useState<NextButtonProps>({
    i: 0,
    j: 3,
    
  })
  const [edgecase, setEdgeCase]=useState<PrevButtonProps>({edgecase:false});


  const handleClick=()=>{
   setActiveLink({ Home: false,Events: true, About: false, Logout: false, Artists: false})
  }
    
  const handleNextButton=()=>{
      setNextPrevButtonVal(prevbutton=>{
        if(prevbutton.j + 3 > events.length){
          return ({i:prevbutton.j, j: prevbutton.j + events.length - prevbutton.j })
        }else{
          return ({i:prevbutton.j, j: prevbutton.j + 3  })
        }
      })
    
    
  }
  const handlePrevButton = () => {
    if (nextPrevButtonVal.i <=0){
      setEdgeCase({edgecase:true})
    }
    else{
      setNextPrevButtonVal(prevbutton => {
        return ({i:prevbutton.i-3, j: prevbutton.i})
      })
      setEdgeCase({edgecase:false})
    }
    
  }
  const events: Event[] = [
    {
      id: 1,
      title: "Billish Ellish concert",
      date: "2024-06-15",
      time: "20:00",
      image: "/images/billieeilish.jpg",
      artist: "Billish Eilish"
    },
    {
      id: 2,
      title: "Taylor swift Era",
      date: "2024-06-20",
      time: "21:00",
      image: "/images/taylorswift.jpg",
      artist: "Taylor Swift"
    },
    {
      id: 3,
      title: "Dean Lewis 's Band ",
      date: "2024-06-25",
      time: "19:30",
      image: "/images/Dean-lewis.jpg",
      artist: "Symphony Orchestra"
    },
    {
      id: 4,
      title: "Pop Extravaganza - Rihanna",
      date: "2024-07-01",
      time: "20:30",
      image: "/images/Rihanna.jpg",
      artist: "Rihanna",
      
    },
    {
      id: 5,
      title: "Electronic Dance Night with Black Pink",
      date: "2024-07-05",
      time: "22:00",
      image: "./images/black-pink.jpg",
      artist: "Black  Pink",
      
    },
    {
      id: 6,
      title: "Folk Music Festival with Annie",
      date: "2024-07-10",
      time: "18:00",
      image: "/images/annie.jpg",
      artist: "Marshallow - annie",
      
    }
    
  ];

  return (
    <Section>
      
      <Container>
        <Title>Upcoming Concerts</Title>
        {events.length > 0 &&  nextPrevButtonVal.j <= events.length && nextPrevButtonVal.i >= 0 &&
        
          <Grid>
              {nextPrevButtonVal.i <= 0 ? <PrevButton edgecase onClick={handlePrevButton} disabled>Prev</PrevButton>:
              <PrevButton onClick={handlePrevButton} edgecase>Prev</PrevButton>}
            {events.slice(nextPrevButtonVal.i, nextPrevButtonVal.j).map(event => (
              <EventCard key={event.id} to={`/event/${event.id}`}>
                <EventImage src={event.image} alt={event.title} />
                <EventInfo>
                  <EventTitle>{event.title}</EventTitle>
                  <EventDetail>
                  <IconWrapper icon={FaCalendar as React.ComponentType} />
                    {new Date(event.date).toLocaleDateString()}
                  </EventDetail>
                  <EventDetail>
                    <IconWrapper icon={FaClock as React.ComponentType} />
                    {event.time}
                  </EventDetail>
                </EventInfo>
              </EventCard>
            ))}
            {nextPrevButtonVal.j >= events.length ? <NextButton onClick={handleNextButton} disabled>Next</NextButton> : 
            <NextButton onClick={handleNextButton} >Next</NextButton>}
          </Grid>
       }
        <ViewAllButton onClick={handleClick} to="/events">See All Events</ViewAllButton>
      </Container>
    </Section>
  );
};

export default UpcomingConcerts;
