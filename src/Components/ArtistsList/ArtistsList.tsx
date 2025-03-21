
import styled from 'styled-components'
import { FaCalendar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
interface AllArtistsList{
    id: number;
    artists: string;
    image: string;
    next_concert: string;
    data: string;

}

const ArtistContainer=styled.div`
    max-width: 1200px;
    padding: 2rem;
    margin : 0 auto;
    margin-top:3rem;
    color: ${({theme})=> theme.colors.mainColor}
`;
const ArtistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;
const ArtistCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);

  }
`;
const ArtistImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
const ArtistInfo = styled.div`
  padding: 1.5rem;
  
`;
const ArtistName = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;
const ArtistDetail = styled.div`
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
const artists=[{
    id: 1,
    date: "2024-06-15",
    image: "/images/billieeilish.jpg",
    artist: "Billish Eilish",
    next_concert: "Billish Eilish Concert"
  },
  {
    id: 2,
    next_concert: "Taylor swift Era",
    date: "2024-06-20",
    image: "/images/taylorswift.jpg",
    artist: "Taylor Swift",
    
  },
  {
    id: 3,
    next_concert: "Dean Lewis 's Band ",
    date: "2024-06-25",
    image: "/images/Dean-lewis.jpg",
    artist: "Dean Lewis",
    
  },
  {
    id: 4,
    next_concert: "Pop Extravaganza - Rihanna",
    date: "2024-07-01",
    image: "/images/Rihanna.jpg",
    artist: "Rihanna",
    
  },
  {
    id: 5,
    next_concert: "Electronic Dance Night with Black Pink",
    date: "2024-07-05",
    image: "./images/black-pink.jpg",
    artist: "Black  Pink",
 
  },
  {
    id: 6,
    next_concert: "Folk Music Festival with Annie",
    date: "2024-07-10",
    image: "/images/annie.jpg",
    artist: "Marshallow - annie",
    
  },
  {
    id: 7,
    next_concert: "Hip Hop Showcase",
    date: "2024-07-15",
    image: "/images/images-drangons.jpg",
    artist: "Images Drangons",
   
  },
  {
    id: 8,
    next_concert: "Blues & Soul Night",
    date: "2024-07-20",
    image: "/images/sabrina-carpenter.jpg",
    artist: "Sabrina carpenter",
    
  },
  {
    id: 9,
    next_concert: "World Music Fusion",
    date: "2024-07-25",
    
    image: "/images/harry-styles.jpg",
    artist: "Harry styles",
    
  }
]

const ArtistsList: React.FC= ()=>{
    const [flipped , setFlipped]=useState(false)
    return (
        
        <ArtistContainer>
            <h2>List of Artists</h2>
            <ArtistGrid > 
                {artists.map((artist)=> {
                return (
                    <ArtistCard key={artist.id} >
                        <ArtistImage src={artist.image} alt={artist.artist}></ArtistImage>
                        <ArtistInfo>
                            <ArtistName>
                                <h3>{artist.artist}</h3>
                            </ArtistName>
                            <ArtistDetail>
                                <FaCalendar />
                                {new Date(artist.date).toLocaleDateString()}
                            </ArtistDetail>
                            <ArtistDetail>
                                <h4>Next-Concert Name :- </h4>
                                {artist.next_concert}
                            </ArtistDetail>
                            <ViewButton to={`/artists`}>About Artist</ViewButton>
                        </ArtistInfo>
                    </ArtistCard>  
                    
                )
                })}
            </ArtistGrid>
           
        
        </ArtistContainer>
    )
}
export default ArtistsList;