import './Heading.scss';


function Heading(props){
    return (
        <div className='container heading-section'>
            <h2 className='text-h2'>{props.title}</h2>
            <p className='paragraph'>{props.text}</p>
        </div>


    )
}


export default Heading;