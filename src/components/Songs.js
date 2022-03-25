import { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import Modify from './Modify';
import NavigationMenu from './NavigationMenu';

const Songs = ({songs}) => {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(()=> {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });
    return (
        <div className="blog-list">
            <NavigationMenu />
            <Container>
                <Row>
                    {songs.map((song)=>(
                        <Col sm={4} key={song.id}>
                            <div className="songs">
                                <audio src={song.src} ref={audioEl}></audio>
                                <h3>{song.title}</h3>
                                <button onClick={()=>setIsPlaying(!isPlaying)}></button>
                                <Link to="/modify"><img src={song.image} width={300} height={180}/></Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
 
export default Songs;