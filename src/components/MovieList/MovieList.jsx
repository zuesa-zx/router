import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Card, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
function MovieList({ search, rating }) {
  const navigate = useNavigate();
  const [myData, setMyData] = useState([])
  const GetUser = async () => {
    try {
      const { data } = await axios.get('https://movie-app-gmc.herokuapp.com/api/movies')
      setMyData(data)
      console.log(data)
    }
    catch (e) {
      console.log(e)
    }

  }
  useEffect(() => {
    GetUser()
  }, [])
  const ratingChanged = () => {

  }
  return (
    <div>
      <Row xs={1} md={4} className="g-4">
        {myData.filter(el => el.title.toLowerCase().includes(search.toLowerCase()) && rating >= el.rate).map((el) => (
          <Col>
            <Card>
              <Link to={`/Movie/${el._id}`}><Card.Img variant="top" src={el.imgUrl} /></Link>
              <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>
                  {el.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <ReactStars
                  style='margin:0 auto'
                  count={5}
                  value={el.rate}
                  size={24}
                  edit={false}
                  activeColor="#ffd700"
                />
              </Card.Footer>
            </Card>

          </Col>
        ))}
      </Row>
      <>
        <button onClick={() => navigate(-2)}>Go 2 pages back</button>
        <button onClick={() => navigate(-1)}>Go 1 pages back</button>
        <button onClick={() => navigate(1)}>Go 1 Page forward</button>
        <button onClick={() => navigate(2)}>Go 2 pages forward</button>
      </>
    </div>
  )
}

export default MovieList