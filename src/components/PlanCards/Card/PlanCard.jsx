import './PlanCard.css'

const PlanCard = ({ price, title, info, points, buttonInfo }) => {
    return (
        <div className="plan">
            <div className="inner">
                <span className="pricing">
                    <span>
                        {price} <small></small>
                    </span>
                </span>
                <p className="title">{title}</p>
                <p className="info">{info}</p>
                <ul className="features">
                    {points.map((point, index) => (
                        <li key={index}>
                        <span className="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                        </span>
                        <span>{point}</span>
                    </li>
                    ))}
                </ul>
                <div className="action">
                    <a className="button" href="#">
                        {buttonInfo}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PlanCard