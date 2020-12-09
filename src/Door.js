import './Door.css'
function Door(props) {
    const {isOpen = false, openCtn = 0, timeTaken = 0 } = props;
    return (
        <div className='door-container'>
            <div className='door-visualization'>
                <div className={`gate ${isOpen? 'open' : 'closed'}`} />
            </div>
            <div className='door-information'>
                <div className='state'>
                    <label>Door {`${isOpen? 'Open' : 'Closed'}`}</label>
                </div>
                <div className='time'>
                    <label>Time {`${timeTaken}s`}</label>
                </div>
                <div className='count'>
                    <label>Executed {openCtn} Times</label>
                </div>
            </div>
        </div>
    );
}

export default Door;