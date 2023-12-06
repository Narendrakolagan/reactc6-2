import DestinationItem from './components/DestinationItem/index.js'

import './index.css'

const DestinationSearch = props => (
    const {DestinationsList} = props
    return DestinationsList
)

const App = () => (
    <div>
        <ul className = "Lists-container">
            {DestinationsList.map((eachItem) =>(
                <DestinationItem DestinationDetails = {eachItem}/>
            ))}
        </ul>
    </div>
) 
