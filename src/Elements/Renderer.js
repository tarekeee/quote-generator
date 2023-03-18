function Renderer(props) {
    return (
        <div>
        <h1 className={props.quoteStyle}>"{props.Quote}"</h1>
        <h2 className={props.authorStyle}>-{props.Author}</h2>
        </div>
    )
}

export default Renderer ;