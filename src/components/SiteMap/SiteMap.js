import { Link } from "react-router-dom";
import "./SiteMap.scss";

export default function SiteMap() {

    return (
        <div className="site-map">
            <div className="site-map__site-box site-map__site-box--sandbox">
                <Link to="/sandbox">Sandbox</Link>
            </div>
            <div className="site-map__site-box site-map__site-box--prompts">
                <Link to="/prompts">Prompts</Link>
            </div>
            <div className="site-map__site-box site-map__site-box--tasks">
                <Link to="/tasks">Tasks</Link>
            </div>
            <div className="site-map__site-box site-map__site-box--evals">
                <Link to="/evals">Evals</Link>
            </div>
            <div className="site-map__site-box site-map__site-box--about">
                <Link to="/testbox">Testbox</Link>
            </div>
        </div>
    );
}