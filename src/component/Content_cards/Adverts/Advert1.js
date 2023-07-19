import { Link } from 'react-router-dom'
import './Adverts.css'

export const Advert1 = () => {

     return(
        <>
            <div className="advert1">
                <div className="name_button1">
                    <img className="avert1_img_name" alt="aaa" src="https://dx35vtwkllhj9.cloudfront.net/cineplex-pictures/john-wick-chapter-4/images/regions/ca/tt.png"/>
                    <Link to={`/6`}> 
                    <button  className="button1">Watch Full HD</button>
                    </Link>
                </div>
                <img className="advert1_img" alt="aaa" src="https://variety.com/wp-content/uploads/2023/03/john-wick-chapter-4-keanu.jpg?w=1000&h=563&crop=1"/>
            </div>
        </>
     )
}