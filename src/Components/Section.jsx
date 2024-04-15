import data from "../IMG/data.json";


const Section = ({ category, images }) => {

    return (

        <article>
            <h2>{category}</h2>
            <div className="movie-list">
                {images.map((picture) => {
                    return (
                        <div className="movie" key={picture}>
                            <img src={picture} alt={picture} />
                        </div>
                    )
                })}
            </div>
        </article>
    )
}

export default Section;