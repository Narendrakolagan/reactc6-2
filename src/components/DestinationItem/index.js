import './index.css'

const DestinationItem = props => {
    const {DestinationDetails} = props
    const {id, name, imgUrl} = DestinationDetails
    
    return(
        <li className = "List-container">
            <img src = {imgUrl} className = "image" alt = avatar />
            <h1 className = "heading">{name}</h1>
        </li>
    )
}

export default DestinationItem 
