import React from "react"
import undewater from "./image/underwater.jpg"
import Jane from "./image/jane.jpg"

const Home = props => {

return (
<article className="homepage">
    <section className="section top-section">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="text-container text-white">
                        <h1>Mahady Manana</h1>
                        <h3>Web development, Web design</h3>
                        <p>Technology in web, Follow the best practice, Use best tools to build a beautifull responsive website</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="myskills-container">
                        <div className="item-container">
                            <div className="item">
                                <div className="image">
                                    <img src="/images/wordpress.png" alt="Javascript" className="thumbnail-medium"/>
                                </div>
                                <div className="text">
                                    <h2 className="wordpress">Wordpress</h2>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image">
                                    <img src="/images/javascript.png" alt="Javascript" className="thumbnail-medium"/>
                                </div>
                                <div className="text">
                                    <h2 className="javascript">Javascript</h2>
                                </div>
                            </div>
                        
                            <div className="item">
                                <div className="image">
                                    <img src="/images/node.png" alt="Javascript" className="thumbnail-medium"/>
                                </div>
                                <div className="text">
                                    <h2 className="nodejs">Node.js</h2>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image">
                                    <img src="/images/react.png" alt="Javascript" className="thumbnail-medium"/>
                                </div>
                                <div className="text">
                                    <h2 className="reactjs">React.js</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</article>    
)
}

export default Home;