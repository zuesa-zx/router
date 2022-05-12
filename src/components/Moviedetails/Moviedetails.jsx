import { React, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Row, Card, Col } from 'react-bootstrap'
function Moviedetails() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [myData, setMyData] = useState([])
  const GetUser = async () => {
    try {
      const { data } = await axios.get('https://movie-app-gmc.herokuapp.com/api/movies/' + id)
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
  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={myData.imgUrl} />
              <Card.Body>
                <Card.Title>{myData.title}</Card.Title>
                <Card.Text>
                  {myData.category}
                  {myData.description}
                  {myData.date}
                </Card.Text>
              </Card.Body>
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


export default Moviedetails