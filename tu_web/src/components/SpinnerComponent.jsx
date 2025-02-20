export const SpinnerComponent = () => (
    <div className="text-center py-5">
        <div className="spinner-grow mx-3" role="status" style={{color:'#0089ad'}}>
            <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-warning mx-3" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-success mx-3" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
)