
function App() {

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");
    const [color,setColor]= React.useState("");
    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            let randomIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randomIndex])
        }
        fetchData();
    }, [])

    const getNewQuote=()=>{
        const colors=[
            "#000000",
            "#0000FF",
            "#808080",
            "#008000",
            "#800080",
            "#FF0000",
            "#FFFFFF"
        ];
        let randomIndex=Math.floor(Math.random()*quotes.length);
        let randColorIndex=Math.floor(Math.random()*colors.length);

        setRandomQuote(quotes[randomIndex])
        setColor(colors[randColorIndex])
    }
    return (
       // <div style={{ backgroundColor: color, minHeight: "100vh" }}>
            
       // </div>  
       <div style={{backgroundColor:color, minHeight:"100vh"}}>
        <div className="container pt-5">
                <div className="jumbotron">
                    <div className="card">
                        <div className="card-header">Inspirational Quotes</div >
                        <div className="card-body">
                            {randomQuote ? (
                                <>
                                    <h5 className="card-title">-{randomQuote.author || "No Author"}</h5>
                                    <p className="card-text">&quot;{randomQuote.text}&quot;</p>
                                </>
                            ) : (
                                <h2>Loading</h2>
                            )
                            }
                            <div className="row">
                                <button onClick={getNewQuote} className="btn btn-primary ml-3">New Quote</button>
                                <a href={"https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" +
                                encodeURIComponent(
                                    '"'+randomQuote.text +'"'+randomQuote.author
                                    )}  
                                    target="_blank" className="btn btn-warning">                                   
                                    <i className="fa fa-twitter"></i></a>
                                <a href="" className="btn btn-danger">
                                    <i class="fa fa-tumblr" aria-hidden="true"></i>
                                     </a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
       </div>
    );
}
ReactDOM.render(<App />, document.getElementById('app'))
