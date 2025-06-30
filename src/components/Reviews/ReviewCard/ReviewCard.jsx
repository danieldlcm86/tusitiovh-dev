import './ReviewCard.css'
import StarIcon from './StarsIcon'

const ReviewCard = ({ cards }) => {
    return (
        <>
            {cards.map((reviews, index) => (
                <div className="card" key={index}>
                    < StarIcon />
                    <div className='container'>
                        <div className="infos">
                            <p className="date-time">
                                Hace {reviews.days} días
                            </p>
                            <p className="description">
                                "{reviews.description}"
                            </p>
                        </div>

                        <div className="author">
                            {reviews.name}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ReviewCard