import './Adverts.css'
import { Link } from 'react-router-dom'

export const Advert2 = () => {

     return(
        <>
            <div className="advert2">
                <div className="name_button2">
                    <img className="avert2_img_name" alt="aaa" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/df54agf-38d3f3a2-b7f8-4c02-b0e3-55fcc469c68c.png/v1/fill/w_1280,h_444/avatar__the_way_of_water__2022__logo_png__by_mintmovi3_df54agf-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDQ0IiwicGF0aCI6IlwvZlwvODQ2YTkwODYtOGE0MC00M2UwLWFhMTAtMmZjN2Q2ZDczNzMwXC9kZjU0YWdmLTM4ZDNmM2EyLWI3ZjgtNGMwMi1iMGUzLTU1ZmNjNDY5YzY4Yy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.PzT_FtF9Py0O2HIdatRgUPo7DxNorJUeeixf90MoruA"/>
                    <Link to={`/22`}>
                    <button className="button2">Watch Full HD</button>
                    </Link>
                    
                </div>
                <img className="advert2_img" alt="aaa" src="https://images.thedirect.com/media/article_full/avatar-2-reviews.jpg"/>
            </div>
        </>
     )
}