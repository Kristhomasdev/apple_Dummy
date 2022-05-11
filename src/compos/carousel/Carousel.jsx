import "./carousel.css";
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import FigureCaption from 'react-bootstrap/FigureCaption';
import Image from 'react-bootstrap/Image';

let Carrousel = () =>{
    return(
<Carousel fade>
  <Carousel.Item interval={5000}>
    
    {/* <Figure>
    <Figure.Image 
        // height={400}
        // width={1600}
        src="https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        id="figure-image"
    />
    
    </Figure> */}
    
    {/* <img src='https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' ></img> */}
    <Image src='https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="figure-image" fluid  />
  </Carousel.Item>
   
  <Carousel.Item interval={5000}>
        {/* <Figure className='faded'>
            <Figure.Image 
                // height={400}
                // width={1600}
                src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                id="figure-image"

            />
        </Figure> */}
        <Image src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="figure-image" fluid/>
  </Carousel.Item>
  
  <Carousel.Item interval={5000}>
      {/* <Figure>
          <Figure.Image 
            //   height={400}
            //   width={1600}
              src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1600"
              id="figure-image"

          />
      </Figure> */}
      <Image src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1600" className="figure-image" fluid/>
  </Carousel.Item>
</Carousel>
    )
}

export default Carrousel;