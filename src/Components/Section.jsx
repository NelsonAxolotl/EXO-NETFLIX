import data from "../IMG/data.json";


const Section = ({ category, images }) => {

    return (

        <main>
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
        </main>
    )
}

export default Section;