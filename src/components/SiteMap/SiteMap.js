import "./SiteMap.scss";

export default function SiteMap() {

    return (
        <div className="site-map">
            <div className="site-map__site-box site-map__site-box--sandbox">Sandbox</div>
            <div className="site-map__site-box site-map__site-box--prompts">Prompts</div>
            <div className="site-map__site-box site-map__site-box--tasks">Tasks</div>
            <div className="site-map__site-box site-map__site-box--evals">Evals</div>
            <div className="site-map__site-box site-map__site-box--about">About</div>
        </div>
    );
}