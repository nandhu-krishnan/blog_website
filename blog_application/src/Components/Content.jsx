import '../Style/Content.css'

function Content(props) {
    return(
        <div className="contentDiv">
            <h2 className="content-header">{props.contentHeader}</h2>
            <p>{props.content}</p>
        </div>
    );
}

export default Content